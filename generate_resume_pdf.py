from __future__ import annotations

from pathlib import Path
from textwrap import wrap


PAGE_W = 595.276
PAGE_H = 841.89
MARGIN_X = 38
TOP_Y = 806
BOTTOM_Y = 42

BLACK = (0.06, 0.09, 0.16)
BODY = (0.18, 0.24, 0.33)
MUTED = (0.36, 0.42, 0.50)
BLUE = (0.03, 0.37, 0.55)
CYAN = (0.03, 0.58, 0.70)
LINE = (0.83, 0.87, 0.91)
LIGHT = (0.94, 0.97, 0.99)


def esc(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def width_estimate(text: str, size: float, bold: bool = False) -> float:
    factor = 0.56 if bold else 0.50
    total = 0.0
    for ch in text:
        if ch in "il.,:;|'!":
            total += size * 0.25
        elif ch in "MW@#%&":
            total += size * 0.78
        elif ch == " ":
            total += size * 0.25
        else:
            total += size * factor
    return total


def wrap_text(text: str, max_w: float, size: float, bold: bool = False) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if width_estimate(trial, size, bold) <= max_w:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


class PdfResume:
    def __init__(self) -> None:
        self.pages: list[list[str]] = []
        self.ops: list[str] = []
        self.y = TOP_Y

    def new_page(self) -> None:
        if self.ops:
            self.pages.append(self.ops)
        self.ops = []
        self.y = TOP_Y
        self.rect(MARGIN_X, PAGE_H - 24, PAGE_W - (MARGIN_X * 2), 4, CYAN)

    def ensure(self, needed: float) -> None:
        if self.y - needed < BOTTOM_Y:
            self.new_page()

    def color(self, rgb: tuple[float, float, float]) -> str:
        return f"{rgb[0]:.3f} {rgb[1]:.3f} {rgb[2]:.3f}"

    def rect(self, x: float, y: float, w: float, h: float, rgb: tuple[float, float, float]) -> None:
        self.ops.append(f"{self.color(rgb)} rg {x:.2f} {y:.2f} {w:.2f} {h:.2f} re f")

    def line(self, x1: float, y1: float, x2: float, y2: float, rgb: tuple[float, float, float] = LINE) -> None:
        self.ops.append(f"{self.color(rgb)} RG 0.7 w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def text(
        self,
        x: float,
        y: float,
        value: str,
        size: float = 10,
        font: str = "F1",
        rgb: tuple[float, float, float] = BODY,
    ) -> None:
        self.ops.append(
            f"BT {self.color(rgb)} rg /{font} {size:.2f} Tf 1 0 0 1 {x:.2f} {y:.2f} Tm ({esc(value)}) Tj ET"
        )

    def heading(self, value: str) -> None:
        self.ensure(26)
        self.y -= 8
        self.text(MARGIN_X, self.y, value.upper(), 10.2, "F2", BLACK)
        text_w = width_estimate(value.upper(), 10.2, True)
        self.line(MARGIN_X + text_w + 12, self.y + 3, PAGE_W - MARGIN_X, self.y + 3)
        self.y -= 11

    def paragraph(self, value: str, size: float = 9.4, indent: float = 0, gap: float = 4) -> None:
        max_w = PAGE_W - (MARGIN_X * 2) - indent
        lines = wrap_text(value, max_w, size)
        self.ensure((len(lines) * (size + 3)) + gap)
        for line in lines:
            self.text(MARGIN_X + indent, self.y, line, size, "F1", BODY)
            self.y -= size + 3
        self.y -= gap

    def label_line(self, label: str, date: str = "", meta: str = "") -> None:
        self.ensure(36)
        self.text(MARGIN_X, self.y, label, 10.2, "F2", BLACK)
        if date:
            date_w = width_estimate(date, 9.2, True)
            self.text(PAGE_W - MARGIN_X - date_w, self.y, date, 9.2, "F2", MUTED)
        self.y -= 12
        if meta:
            self.paragraph(meta, 8.6, 0, 2)

    def bullets(self, items: list[str], size: float = 9.1) -> None:
        for item in items:
            lines = wrap_text(item, PAGE_W - (MARGIN_X * 2) - 16, size)
            self.ensure((len(lines) * (size + 3)) + 2)
            self.text(MARGIN_X + 2, self.y, "-", size, "F2", CYAN)
            self.text(MARGIN_X + 14, self.y, lines[0], size, "F1", BODY)
            self.y -= size + 3
            for line in lines[1:]:
                self.text(MARGIN_X + 14, self.y, line, size, "F1", BODY)
                self.y -= size + 3
        self.y -= 4

    def skills(self, rows: list[tuple[str, str]]) -> None:
        col_gap = 22
        col_w = (PAGE_W - (MARGIN_X * 2) - col_gap) / 2
        row_blocks = []
        for i in range(0, len(rows), 2):
            row_blocks.append(rows[i : i + 2])
        for row in row_blocks:
            wrapped = []
            max_lines = 1
            for label, value in row:
                text = f"{label}: {value}"
                lines = wrap_text(text, col_w, 8.6)
                wrapped.append((label, value, lines))
                max_lines = max(max_lines, len(lines))
            self.ensure(max_lines * 11 + 3)
            base_y = self.y
            for idx, (label, value, lines) in enumerate(wrapped):
                x = MARGIN_X + idx * (col_w + col_gap)
                for line_i, line in enumerate(lines):
                    if line_i == 0:
                        prefix = f"{label}: "
                        self.text(x, base_y - (line_i * 11), prefix, 8.6, "F2", BLACK)
                        self.text(x + width_estimate(prefix, 8.6, True), base_y - (line_i * 11), line[len(prefix) :], 8.6, "F1", BODY)
                    else:
                        self.text(x, base_y - (line_i * 11), line, 8.6, "F1", BODY)
            self.y -= max_lines * 11 + 3
        self.y -= 3

    def projects(self, rows: list[tuple[str, str, str]]) -> None:
        col_gap = 22
        col_w = (PAGE_W - (MARGIN_X * 2) - col_gap) / 2
        for i in range(0, len(rows), 2):
            pair = rows[i : i + 2]
            blocks = []
            max_h = 0
            for title, stack, desc in pair:
                desc_lines = wrap_text(desc, col_w, 8.45)
                blocks.append((title, stack, desc_lines))
                max_h = max(max_h, 12 + 10 + len(desc_lines) * 10 + 7)
            self.ensure(max_h + 2)
            base_y = self.y
            for idx, (title, stack, desc_lines) in enumerate(blocks):
                x = MARGIN_X + idx * (col_w + col_gap)
                self.text(x, base_y, title, 9.2, "F2", BLACK)
                self.text(x, base_y - 10, stack, 8.0, "F2", BLUE)
                yy = base_y - 21
                for line in desc_lines:
                    self.text(x, yy, line, 8.45, "F1", BODY)
                    yy -= 10
            self.y -= max_h

    def education(self, rows: list[tuple[str, str, str]]) -> None:
        for title, detail, date in rows:
            self.ensure(27)
            self.text(MARGIN_X, self.y, title, 9.3, "F2", BLACK)
            date_w = width_estimate(date, 8.6, True)
            self.text(PAGE_W - MARGIN_X - date_w, self.y, date, 8.6, "F2", MUTED)
            self.y -= 11
            self.text(MARGIN_X, self.y, detail, 8.5, "F1", BODY)
            self.y -= 13

    def close(self) -> None:
        if self.ops:
            self.pages.append(self.ops)
            self.ops = []

    def write(self, path: Path) -> None:
        self.close()
        objects: list[bytes] = []

        def add(obj: str | bytes) -> int:
            if isinstance(obj, str):
                obj = obj.encode("latin-1")
            objects.append(obj)
            return len(objects)

        catalog_id = add("placeholder")
        pages_id = add("placeholder")
        font1_id = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
        font2_id = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

        page_ids = []
        content_ids = []
        for page_ops in self.pages:
            stream = "\n".join(page_ops).encode("latin-1")
            content_id = add(b"<< /Length " + str(len(stream)).encode("ascii") + b" >>\nstream\n" + stream + b"\nendstream")
            page_id = add(
                f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {PAGE_W:.3f} {PAGE_H:.3f}] "
                f"/Resources << /Font << /F1 {font1_id} 0 R /F2 {font2_id} 0 R >> >> "
                f"/Contents {content_id} 0 R >>"
            )
            content_ids.append(content_id)
            page_ids.append(page_id)

        kids = " ".join(f"{page_id} 0 R" for page_id in page_ids)
        objects[catalog_id - 1] = f"<< /Type /Catalog /Pages {pages_id} 0 R >>".encode("latin-1")
        objects[pages_id - 1] = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_ids)} >>".encode("latin-1")

        out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        xrefs = [0]
        for i, obj in enumerate(objects, start=1):
            xrefs.append(len(out))
            out.extend(f"{i} 0 obj\n".encode("ascii"))
            out.extend(obj)
            out.extend(b"\nendobj\n")
        startxref = len(out)
        out.extend(f"xref\n0 {len(objects) + 1}\n".encode("ascii"))
        out.extend(b"0000000000 65535 f \n")
        for offset in xrefs[1:]:
            out.extend(f"{offset:010d} 00000 n \n".encode("ascii"))
        out.extend(
            f"trailer\n<< /Size {len(objects) + 1} /Root {catalog_id} 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode(
                "ascii"
            )
        )
        path.write_bytes(out)


def build_resume() -> PdfResume:
    pdf = PdfResume()
    pdf.new_page()

    pdf.text(MARGIN_X, pdf.y, "CHANCHAL MAITY", 24, "F2", BLACK)
    pdf.y -= 18
    pdf.text(MARGIN_X, pdf.y, "AI-Native Full-Stack & Mobile Product Engineer", 10.8, "F2", BLUE)
    pdf.y -= 14
    pdf.text(
        MARGIN_X,
        pdf.y,
        "Contai, East Midnapore, West Bengal 721427 | +91 99329 15707 | chanchal@aaspasindia.com | https://chanchal.aaspasindia.com",
        8.8,
        "F1",
        BODY,
    )
    pdf.y -= 10
    pdf.text(MARGIN_X, pdf.y, "Languages: Bengali, Hindi, English | Remote-ready | Target: Full-Stack, React Native, Node.js, Product Engineer roles", 8.6, "F1", BODY)
    pdf.y -= 12
    pdf.line(MARGIN_X, pdf.y, PAGE_W - MARGIN_X, pdf.y)
    pdf.y -= 4

    pdf.heading("Professional Summary")
    pdf.paragraph(
        "Full-stack and mobile product engineer with 3+ years of hands-on experience building mobile apps, Next.js web products, Node.js APIs, MongoDB systems, realtime Socket.IO flows, payments, maps, native Android behavior, IoT control surfaces, and AI-assisted product workflows. Strongest proof is AasPas, a hyperlocal service marketplace built across customer app, worker app, backend APIs, live tracking, in-app calling, wallet and earnings logic, payment state, multilingual help, and admin-ready operations.",
        9.2,
        gap=2,
    )

    pdf.heading("Technical Skills")
    pdf.skills(
        [
            ("Mobile", "React Native, Expo, TypeScript, React Navigation, Native Android, Java, FCM, app lifecycle"),
            ("Frontend", "Next.js, React, Tailwind CSS, Framer Motion, responsive UI, SEO-ready websites"),
            ("Backend", "Node.js, Express.js, MongoDB, Mongoose, JWT auth, REST APIs, role-based flows"),
            ("Realtime", "Socket.IO, WebSockets, Redis-style active state, recovery snapshots, event rooms"),
            ("Integrations", "Razorpay, Google Maps, Google Directions, Agora, Firebase FCM, Twilio, WebRTC"),
            ("Product", "booking lifecycle, payments, wallet, worker operations, support, localization, admin tooling"),
            ("IoT", "ESP32, relay control, device ownership, schedules, timers, heartbeat, power-loss recovery"),
            ("AI Workflow", "GPT, Claude, Gemini, prompt decomposition, debugging, code review, verification loops"),
        ]
    )

    pdf.heading("Professional Experience")
    pdf.label_line(
        "Founder & Lead Product Engineer - AasPas India (CPJ Solution)",
        "2024 - Present",
        "React Native, TypeScript, Node.js, Express.js, MongoDB, Socket.IO, Razorpay, Google Maps, Agora, Firebase FCM, Native Android",
    )
    pdf.bullets(
        [
            "Own product architecture and implementation across customer app, worker app, backend APIs, realtime event layer, native Android modules, and operational workflows.",
            "Built the marketplace lifecycle from service discovery and booking to worker acceptance, live tracking, job completion, payment, wallet/earnings, reviews, support, and admin visibility.",
            "Implemented Socket.IO rooms and events for booking state, worker location, payment updates, call lifecycle, and active booking recovery with hot state and MongoDB durability.",
            "Integrated Razorpay payments, Google Maps/Directions, Firebase push notifications, Agora voice calling, and Android full-screen notification/call experiences for real mobile conditions.",
            "Designed multilingual and AI-assisted booking flows for regional users while keeping sensitive booking, payment, and worker-earning state backend-owned.",
        ]
    )

    pdf.label_line(
        "Full-Stack Web & Mobile Developer - Client and Portfolio Products",
        "2021 - 2024",
        "Next.js, React, Node.js, MongoDB, TypeScript, authentication, ecommerce, realtime media, telephony",
    )
    pdf.bullets(
        [
            "Delivered product-style applications across ecommerce, food commerce, media streaming, telephony, architecture consultancy, and business websites.",
            "Built authentication, cart and order flows, admin tools, OTP/email workflows, dashboards, SEO-friendly pages, responsive UI, and backend-backed user state.",
            "Used AI-native engineering workflows to plan architecture faster, break down complex features, debug issues, and verify implementation quality before shipping.",
        ]
    )

    pdf.label_line("TRC Engineer, QC Department - Aforeserve.com LTD (Lenovo)", "2022 - 2023")
    pdf.bullets(
        [
            "Diagnosed hardware and service-quality issues in Lenovo device workflows, strengthening practical debugging, device behavior analysis, and production support discipline.",
            "Built a hardware-aware foundation that now supports IoT, native Android, background behavior, notifications, calling, maps, and real-device reliability decisions in software products.",
        ]
    )

    pdf.heading("Selected Product Work")
    pdf.projects(
        [
            (
                "AasPas - Hyperlocal Service Marketplace",
                "React Native, Node.js, MongoDB, Socket.IO, Razorpay, Maps, Agora",
                "Customer and worker marketplace with booking, live tracking, native calling, payments, wallet/earnings, support, reviews, multilingual AI help, and admin operations.",
            ),
            (
                "AasPas Smart Box - IoT Control Platform",
                "ESP32, Node.js, MongoDB, Socket.IO, Next.js, Expo",
                "Relay control system with timers, daily schedules, energy analytics, heartbeat, HTTP fallback, ownership checks, and power-loss recovery.",
            ),
            (
                "AasPas Private Theater - Watch Party",
                "Next.js, Socket.IO, WebRTC, MongoDB, ReactPlayer",
                "Realtime watch-party product with host playback control, room links, chat, emoji reactions, WebRTC voice, room recovery, and multi-source video support.",
            ),
            (
                "Mushdelight - Food Commerce Platform",
                "Next.js, React, MongoDB, Mongoose, JWT, email tooling",
                "Food-commerce website with catalog, cart, authentication, OTP verification, order lifecycle, reviews, subscribers, and admin product operations.",
            ),
            (
                "Lizz-Shop - Retail Ecommerce",
                "Next.js, TypeScript, Node.js, Express.js, MongoDB Atlas",
                "Retail storefront with filters, search, variants, wishlist, cart persistence, cookie/JWT sessions, backend user state, and merchandising sections.",
            ),
            (
                "Visual Voicemail - Telephony Product",
                "React Native, Node.js, Express.js, MongoDB, Twilio",
                "Android-first voicemail concept with call forwarding, Twilio webhooks, voicemail inbox, unread state, greeting setup, and mobile audio playback.",
            ),
            (
                "AI Camera Pro - Mobile Imaging App",
                "React Native, TypeScript, Image Picker, Image Resizer",
                "Camera-style app with capture modes, gallery import, permission UX, enhancement flow, quality selection, preview behavior, and polished interactions.",
            ),
        ]
    )

    pdf.heading("Engineering Strengths")
    pdf.bullets(
        [
            "End-to-end ownership across mobile, backend, database, realtime, native Android, and deployment-ready product flows.",
            "Strong debugging mindset across software, hardware, mobile lifecycle, notifications, calling, maps, payments, and recovery behavior.",
            "Product thinking around real user journeys: booking, support, trust, worker operations, payments, earnings, and operational visibility.",
            "AI-native execution with manual review, architecture control, prompt decomposition, code reasoning, and verification discipline.",
        ],
        8.9,
    )

    pdf.heading("Education & Certifications")
    pdf.education(
        [
            (
                "Full-Stack Software Engineering Certificate",
                "Meta / Coursera - Online Professional Certification; advanced JavaScript, React, and backend development",
                "2023",
            ),
            ("Diploma in Computer Hardware & Networking", "The George Telegraph Training Institute", "2020 - 2022"),
            ("Higher Secondary (HS)", "Nachinda Jibankrishna High School - Percentage: 85.4%", "2020"),
        ]
    )
    return pdf


if __name__ == "__main__":
    output = Path(__file__).with_name("Chanchal_Maity_Professional_Developer_Resume.pdf")
    build_resume().write(output)
    print(output)
