from __future__ import annotations

from pathlib import Path


PAGE_W = 595.276
PAGE_H = 841.89
LEFT_W = 205
MAIN_X = 226
MAIN_R = 565
SIDEBAR_X = 24
SIDEBAR_R = 181
TOP = 806
BOTTOM = 38

NAVY = (0.055, 0.086, 0.145)
DARK = (0.075, 0.110, 0.180)
WHITE = (1, 1, 1)
INK = (0.070, 0.095, 0.145)
BODY = (0.215, 0.265, 0.345)
MUTED = (0.430, 0.480, 0.560)
BLUE = (0.055, 0.345, 0.820)
CYAN = (0.050, 0.760, 0.860)
SKY = (0.725, 0.910, 0.980)
PANEL = (0.945, 0.970, 0.990)
LINE = (0.845, 0.885, 0.925)
SIDEBAR_TEXT = (0.790, 0.850, 0.925)


PHOTO_PATH = Path(__file__).with_name("public").joinpath("img", "chanchal-professional.jpg")
OUTPUT_PATH = Path(__file__).with_name("Chanchal_Maity_Resume.pdf")


def esc(text: str) -> str:
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def rgb(color: tuple[float, float, float]) -> str:
    return f"{color[0]:.3f} {color[1]:.3f} {color[2]:.3f}"


def text_width(text: str, size: float, bold: bool = False) -> float:
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


def wrap_text(text: str, max_width: float, size: float, bold: bool = False) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if text_width(trial, size, bold) <= max_width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines or [""]


def jpeg_dimensions(data: bytes) -> tuple[int, int]:
    pos = 2
    while pos < len(data) - 9:
        if data[pos] != 0xFF:
            pos += 1
            continue
        marker = data[pos + 1]
        pos += 2
        if marker in (0xD8, 0xD9):
            continue
        length = int.from_bytes(data[pos : pos + 2], "big")
        if marker in range(0xC0, 0xC4):
            height = int.from_bytes(data[pos + 3 : pos + 5], "big")
            width = int.from_bytes(data[pos + 5 : pos + 7], "big")
            return width, height
        pos += length
    raise ValueError("Could not read JPEG dimensions")


class EliteResume:
    def __init__(self, photo_data: bytes, photo_size: tuple[int, int]) -> None:
        self.ops: list[str] = []
        self.photo_data = photo_data
        self.photo_w, self.photo_h = photo_size
        self.y = TOP

    def rect(self, x: float, y: float, w: float, h: float, color: tuple[float, float, float]) -> None:
        self.ops.append(f"{rgb(color)} rg {x:.2f} {y:.2f} {w:.2f} {h:.2f} re f")

    def stroke_rect(self, x: float, y: float, w: float, h: float, color: tuple[float, float, float], width: float = 0.8) -> None:
        self.ops.append(f"{rgb(color)} RG {width:.2f} w {x:.2f} {y:.2f} {w:.2f} {h:.2f} re S")

    def line(self, x1: float, y1: float, x2: float, y2: float, color: tuple[float, float, float], width: float = 0.8) -> None:
        self.ops.append(f"{rgb(color)} RG {width:.2f} w {x1:.2f} {y1:.2f} m {x2:.2f} {y2:.2f} l S")

    def circle_path(self, cx: float, cy: float, r: float) -> str:
        k = 0.5522847498
        c = r * k
        return (
            f"{cx + r:.2f} {cy:.2f} m "
            f"{cx + r:.2f} {cy + c:.2f} {cx + c:.2f} {cy + r:.2f} {cx:.2f} {cy + r:.2f} c "
            f"{cx - c:.2f} {cy + r:.2f} {cx - r:.2f} {cy + c:.2f} {cx - r:.2f} {cy:.2f} c "
            f"{cx - r:.2f} {cy - c:.2f} {cx - c:.2f} {cy - r:.2f} {cx:.2f} {cy - r:.2f} c "
            f"{cx + c:.2f} {cy - r:.2f} {cx + r:.2f} {cy - c:.2f} {cx + r:.2f} {cy:.2f} c h"
        )

    def circle(self, cx: float, cy: float, r: float, color: tuple[float, float, float]) -> None:
        self.ops.append(f"{rgb(color)} rg {self.circle_path(cx, cy, r)} f")

    def circle_stroke(self, cx: float, cy: float, r: float, color: tuple[float, float, float], width: float = 1.2) -> None:
        self.ops.append(f"{rgb(color)} RG {width:.2f} w {self.circle_path(cx, cy, r)} S")

    def text(
        self,
        x: float,
        y: float,
        value: str,
        size: float,
        font: str = "F1",
        color: tuple[float, float, float] = BODY,
    ) -> None:
        self.ops.append(f"BT {rgb(color)} rg /{font} {size:.2f} Tf 1 0 0 1 {x:.2f} {y:.2f} Tm ({esc(value)}) Tj ET")

    def image_circle(self, cx: float, cy: float, diameter: float) -> None:
        r = diameter / 2
        # Manual focus crop: keeps the professional headshot centered inside the resume avatar.
        scale = diameter / 720
        draw_w = self.photo_w * scale
        draw_h = self.photo_h * scale
        crop_left = 270
        crop_top = 130
        x = cx - r - (crop_left * scale)
        y = cy + r - draw_h + (crop_top * scale)
        self.ops.append("q")
        self.ops.append(f"{self.circle_path(cx, cy, r)} W n")
        self.ops.append(f"{draw_w:.2f} 0 0 {draw_h:.2f} {x:.2f} {y:.2f} cm /Im1 Do")
        self.ops.append("Q")

    def sidebar_heading(self, value: str, y: float) -> float:
        self.text(SIDEBAR_X, y, value.upper(), 8.2, "F2", CYAN)
        self.line(SIDEBAR_X, y - 6, SIDEBAR_R, y - 6, (0.170, 0.250, 0.360), 0.7)
        return y - 19

    def sidebar_lines(self, y: float, lines: list[str], size: float = 7.9, gap: float = 10.5) -> float:
        for line in lines:
            wrapped = wrap_text(line, SIDEBAR_R - SIDEBAR_X, size)
            for part in wrapped:
                self.text(SIDEBAR_X, y, part, size, "F1", SIDEBAR_TEXT)
                y -= gap
            y -= 2
        return y

    def sidebar_bullets(self, y: float, lines: list[str], size: float = 7.75) -> float:
        for line in lines:
            wrapped = wrap_text(line, SIDEBAR_R - SIDEBAR_X - 11, size)
            self.circle(SIDEBAR_X + 2.5, y + 2.2, 1.5, CYAN)
            self.text(SIDEBAR_X + 10, y, wrapped[0], size, "F1", SIDEBAR_TEXT)
            y -= 10
            for extra in wrapped[1:]:
                self.text(SIDEBAR_X + 10, y, extra, size, "F1", SIDEBAR_TEXT)
                y -= 10
        return y - 4

    def main_heading(self, value: str, y: float) -> float:
        self.text(MAIN_X, y, value.upper(), 8.6, "F2", BLUE)
        line_start = MAIN_X + text_width(value.upper(), 8.6, True) * 1.14 + 16
        if line_start < MAIN_R - 26:
            self.line(line_start, y + 3, MAIN_R, y + 3, LINE, 0.7)
        return y - 14

    def main_paragraph(self, y: float, text: str, size: float = 8.35, max_w: float | None = None) -> float:
        max_w = max_w or (MAIN_R - MAIN_X)
        for line in wrap_text(text, max_w, size):
            self.text(MAIN_X, y, line, size, "F1", BODY)
            y -= size + 2.8
        return y

    def main_bullets(self, y: float, items: list[str], size: float = 8.05, max_w: float | None = None) -> float:
        max_w = max_w or (MAIN_R - MAIN_X - 12)
        for item in items:
            lines = wrap_text(item, max_w, size)
            self.text(MAIN_X, y, "-", size, "F2", BLUE)
            self.text(MAIN_X + 11, y, lines[0], size, "F1", BODY)
            y -= size + 2.7
            for line in lines[1:]:
                self.text(MAIN_X + 11, y, line, size, "F1", BODY)
                y -= size + 2.7
        return y - 3

    def render(self) -> None:
        self.rect(0, 0, PAGE_W, PAGE_H, WHITE)
        self.rect(0, 0, LEFT_W, PAGE_H, NAVY)
        self.rect(0, 0, 5, PAGE_H, CYAN)
        self.rect(LEFT_W, PAGE_H - 18, PAGE_W - LEFT_W, 18, PANEL)
        self.rect(LEFT_W, 0, 1.1, PAGE_H, LINE)

        # Sidebar photo and identity.
        self.circle(102.5, 738, 61, (0.120, 0.170, 0.250))
        self.image_circle(102.5, 738, 112)
        self.circle_stroke(102.5, 738, 58.5, CYAN, 2.0)
        self.text(48, 658, "CHANCHAL MAITY", 12.0, "F2", WHITE)
        self.text(37, 642, "AI-NATIVE PRODUCT ENGINEER", 7.7, "F2", SKY)
        self.text(54, 630, "Full-Stack | Mobile | Backend", 7.2, "F1", SIDEBAR_TEXT)

        y = 600
        y = self.sidebar_heading("Contact", y)
        y = self.sidebar_lines(
            y,
            [
                "Phone: +91 99329 15707",
                "Email: chanchal@aaspasindia.com",
                "Portfolio: https://chanchal.aaspasindia.com",
                "Location: Contai, East Midnapore, West Bengal 721427",
                "Languages: Bengali, Hindi, English",
            ],
            7.6,
            9.5,
        )

        y = self.sidebar_heading("Speciality Snapshot", y - 5)
        y = self.sidebar_bullets(
            y,
            [
                "React Native mobile apps",
                "Node.js + MongoDB systems",
                "Realtime Socket.IO products",
                "Payments, maps, calling",
                "Native Android behavior",
                "IoT hardware-to-cloud",
                "DSA problem solving",
                "AI-assisted debugging",
            ],
            7.55,
        )

        y = self.sidebar_heading("Technical Stack", y - 2)
        y = self.sidebar_lines(
            y,
            [
                "Mobile: React Native, Expo, Flutter, TypeScript, Java",
                "Web: Next.js, React, Tailwind CSS, Bootstrap, Framer Motion",
                "Backend: Node.js, Express.js, MongoDB, Mongoose, JWT",
                "Foundations: Python scripting, DSA, algorithms, debugging",
                "Realtime: Socket.IO, WebSockets, Redis-style active state",
                "Integrations: Razorpay, Maps, Agora, Firebase FCM, Twilio",
                "Tools: Postman/API testing, Git/GitHub, npm, Vercel, Render",
                "IoT: ESP32, relay control, schedules, heartbeat recovery",
            ],
            7.25,
            8.9,
        )

        y = self.sidebar_heading("Best Fit Roles", y - 3)
        y = self.sidebar_bullets(
            y,
            [
                "AI-Native Product Engineer",
                "Full-Stack Developer (React Native & Node.js)",
                "Mobile Product Engineer (Maps, payments, realtime)",
                "Backend & Automation Developer (Python/Node.js)",
            ],
            7.2,
        )

        y = self.sidebar_heading("Interests", y - 2)
        self.sidebar_bullets(
            y,
            [
                "Movies and music",
                "Building new apps and product experiments",
                "Hardware-software ideas and device workflows",
                "Exploring new tools, APIs, and automation",
            ],
            7.2,
        )

        # Main header.
        self.text(MAIN_X, 776, "Chanchal Maity", 27, "F2", INK)
        self.text(MAIN_X, 752, "Full-Stack & Mobile Product Engineer", 12.3, "F2", BLUE)
        header_lines = wrap_text(
            "I build production-ready mobile, backend, realtime, IoT, and AI-assisted product systems end to end.",
            MAIN_R - MAIN_X,
            8.9,
        )
        header_y = 735
        for line in header_lines:
            self.text(MAIN_X, header_y, line, 8.9, "F1", BODY)
            header_y -= 11

        # Top proof panel.
        self.rect(MAIN_X, 641, MAIN_R - MAIN_X, 78, PANEL)
        self.stroke_rect(MAIN_X, 641, MAIN_R - MAIN_X, 78, LINE, 0.8)
        self.text(MAIN_X + 12, 700, "TOP SPECIALITY", 7.8, "F2", BLUE)
        speciality_lines = wrap_text(
            "Marketplace-grade apps with realtime state, payments, maps, native Android, DSA-style problem solving, and backend-owned correctness.",
            MAIN_R - MAIN_X - 24,
            7.9,
            True,
        )
        speciality_y = 684
        for line in speciality_lines[:2]:
            self.text(MAIN_X + 12, speciality_y, line, 7.9, "F2", INK)
            speciality_y -= 10
        chips = [
            ("AasPas", "customer + worker"),
            ("Realtime", "tracking + calls"),
            ("IoT", "ESP32 control"),
            ("Problem solving", "DSA + debugging"),
        ]
        chip_x = MAIN_X + 12
        chip_y = 650
        for title, detail in chips:
            chip_w = 76
            self.rect(chip_x, chip_y, chip_w, 20, WHITE)
            self.stroke_rect(chip_x, chip_y, chip_w, 20, (0.780, 0.850, 0.920), 0.6)
            self.text(chip_x + 5, chip_y + 10.5, title, 6.8, "F2", BLUE)
            self.text(chip_x + 5, chip_y + 3.2, detail, 5.6, "F1", MUTED)
            chip_x += chip_w + 8

        y2 = 612
        y2 = self.main_heading("Professional Summary", y2)
        y2 = self.main_paragraph(
            y2,
            "3+ years building React Native, Flutter, Next.js, Node.js, Python scripting, MongoDB, Socket.IO, payments, maps, native Android, IoT, and AI-assisted products. Strongest proof: AasPas, a customer-worker marketplace with live tracking, in-app calling, payments, wallet/earnings, DSA-style problem solving, and admin-ready backend operations.",
            7.9,
            max_w=292,
        )

        y2 = self.main_heading("Experience", y2 - 3)
        self.text(MAIN_X, y2, "Founder & Lead Product Engineer - AasPas India", 9.25, "F2", INK)
        self.text(MAIN_R - text_width("2024 - Present", 8.0, True), y2, "2024 - Present", 8.0, "F2", MUTED)
        y2 -= 12
        tech_lines = wrap_text(
            "CPJ Solution | React Native, Node.js, MongoDB, Socket.IO, Razorpay, Maps, Agora, FCM, Native Android",
            285,
            7.25,
            True,
        )
        for line in tech_lines:
            self.text(MAIN_X, y2, line, 7.25, "F2", BLUE)
            y2 -= 9.2
        y2 -= 2
        y2 = self.main_bullets(
            y2,
            [
                "Built customer and worker flows: discovery, booking, acceptance, tracking, payments, wallet, reviews, support, and admin visibility.",
                "Integrated Socket.IO tracking, Razorpay, Maps, Firebase FCM, Agora calling, and Android full-screen booking/call flows.",
                "Owned backend correctness for booking state, payment status, worker earnings, commission, wallet records, and recovery.",
                "Solved complex edge cases around double-booking prevention, active-job recovery, realtime state, and weak-network behavior.",
            ],
            7.75,
            285,
        )

        self.text(MAIN_X, y2, "Technical Integration Specialist - Brightex Solutions Pvt. Ltd.", 8.6, "F2", INK)
        self.text(MAIN_R - text_width("2023 - 2024", 7.6, True), y2, "2023 - 2024", 7.6, "F2", MUTED)
        y2 -= 10.8
        self.text(MAIN_X, y2, "Device performance + software-hardware integration", 7.15, "F2", BLUE)
        y2 -= 9.4
        y2 = self.main_bullets(
            y2,
            [
                "Optimized device performance and component-level software-hardware integration workflows.",
            ],
            7.55,
        )

        self.text(MAIN_X, y2, "TRC Engineer, QC Department - Aforeserve.com LTD", 8.6, "F2", INK)
        self.text(MAIN_R - text_width("2022 - 2023", 7.6, True), y2, "2022 - 2023", 7.6, "F2", MUTED)
        y2 -= 10.8
        self.text(MAIN_X, y2, "Lenovo service workflow", 7.15, "F2", BLUE)
        y2 -= 9.4
        y2 = self.main_bullets(
            y2,
            [
                "Diagnosed Lenovo device quality issues and strengthened hardware-aware debugging discipline.",
            ],
            7.55,
        )

        self.text(MAIN_X, y2, "Freelance Full-Stack Developer - NDA Clients", 8.35, "F2", INK)
        self.text(MAIN_R - text_width("2025 - Present", 7.6, True), y2, "2025 - Present", 7.6, "F2", MUTED)
        y2 -= 10.8
        self.text(MAIN_X, y2, "Business automation | secure mobile apps | API integrations", 7.05, "F2", BLUE)
        y2 -= 9.4
        y2 = self.main_bullets(
            y2,
            [
                "Delivered 15+ NDA projects across automation, secure app workflows, backend APIs, and integrations.",
            ],
            7.55,
            270,
        )

        y2 = self.main_heading("Flagship Product Work", y2 - 2)
        projects = [
            ("AasPas", "Live tracking, native calls, payments, wallet/earnings, reviews, AI help, and admin ops."),
            ("AasPas Smart Box", "ESP32 relay control, timers, schedules, energy analytics, heartbeat, fallback, and power recovery."),
            ("Private Theater", "Host playback, room links, chat, WebRTC voice, and multi-source video support."),
            ("Commerce + Mobile Systems", "Ecommerce, telephony, imaging, auth, admin tools, API flows, and polished mobile UX."),
        ]
        for name, desc in projects:
            self.text(MAIN_X, y2, name, 8.35, "F2", INK)
            y2 -= 9.1
            for line in wrap_text(desc, 260, 7.15):
                self.text(MAIN_X + 10, y2, line, 7.15, "F1", BODY)
                y2 -= 8.6
            y2 -= 1.2

        y2 = self.main_heading("Education & Certifications", y2 - 2)
        edu = [
            ("HackerRank Certifications", "Problem Solving, JavaScript, Node.js, REST API, and React", "2026"),
            ("Diploma in Computer Hardware & Networking", "The George Telegraph Training Institute", "2020 - 2022"),
            ("Higher Secondary (HS)", "Nachinda Jibankrishna High School - 85.4%", "2020"),
        ]
        for title, detail, date in edu:
            self.text(MAIN_X, y2, title, 8.35, "F2", INK)
            self.text(MAIN_R - text_width(date, 7.6, True), y2, date, 7.6, "F2", MUTED)
            y2 -= 9.3
            self.text(MAIN_X, y2, detail, 7.45, "F1", BODY)
            y2 -= 11

        y2 = self.main_heading("Core Strengths", y2 - 1)
        y2 = self.main_bullets(
            y2,
            [
                "End-to-end product ownership across mobile apps, backend APIs, realtime systems, payments, maps, and admin workflows.",
                "DSA-backed problem solving for state consistency, race conditions, recovery paths, and production bugs.",
                "Version-controlled delivery with Git/GitHub, API testing, deployment workflows, and clean iteration habits.",
                "Hardware-aware engineering mindset from TRC/Brightex experience and IoT experimentation.",
            ],
            7.35,
            286,
        )

        self.rect(MAIN_X, 31, MAIN_R - MAIN_X, 20, PANEL)
        self.text(MAIN_X + 9, 38.5, "Portfolio focus: mobile, backend, realtime, DSA problem solving, native Android, IoT, and AI workflows.", 6.9, "F2", BLUE)

    def write(self, output: Path) -> None:
        self.render()
        content = "\n".join(self.ops).encode("latin-1")
        objects: list[bytes] = []

        def add(obj: bytes | str) -> int:
            if isinstance(obj, str):
                obj = obj.encode("latin-1")
            objects.append(obj)
            return len(objects)

        catalog_id = add(b"placeholder")
        pages_id = add(b"placeholder")
        font_regular_id = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
        font_bold_id = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
        image_id = add(
            b"<< /Type /XObject /Subtype /Image /Width "
            + str(self.photo_w).encode("ascii")
            + b" /Height "
            + str(self.photo_h).encode("ascii")
            + b" /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "
            + str(len(self.photo_data)).encode("ascii")
            + b" >>\nstream\n"
            + self.photo_data
            + b"\nendstream"
        )
        content_id = add(b"<< /Length " + str(len(content)).encode("ascii") + b" >>\nstream\n" + content + b"\nendstream")
        page_id = add(
            f"<< /Type /Page /Parent {pages_id} 0 R /MediaBox [0 0 {PAGE_W:.3f} {PAGE_H:.3f}] "
            f"/Resources << /Font << /F1 {font_regular_id} 0 R /F2 {font_bold_id} 0 R >> "
            f"/XObject << /Im1 {image_id} 0 R >> >> /Contents {content_id} 0 R >>"
        )

        objects[catalog_id - 1] = f"<< /Type /Catalog /Pages {pages_id} 0 R >>".encode("latin-1")
        objects[pages_id - 1] = f"<< /Type /Pages /Kids [{page_id} 0 R] /Count 1 >>".encode("latin-1")

        out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        xrefs = [0]
        for index, obj in enumerate(objects, start=1):
            xrefs.append(len(out))
            out.extend(f"{index} 0 obj\n".encode("ascii"))
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
        output.write_bytes(out)


def main() -> None:
    photo_data = PHOTO_PATH.read_bytes()
    resume = EliteResume(photo_data, jpeg_dimensions(photo_data))
    resume.write(OUTPUT_PATH)
    print(OUTPUT_PATH)


if __name__ == "__main__":
    main()
