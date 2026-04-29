'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { DetailsIcon, ExternalArrowIcon, PlayStoreIcon } from '@/components/ActionIcons';
import PlayStoreSoonButton from '@/components/PlayStoreSoonButton';
import { AASPAS_PLAY_STORE_URL, aaspasCaseStudy } from '@/data/aaspas';
import { aaspasSmartBoxCaseStudy } from '@/data/aaspasSmartBox';
import { voicemailProjectCaseStudy } from '@/data/voicemailProject';
import { aiCameraProjectCaseStudy } from '@/data/aiCameraProject';

type ShowcaseApp = {
  name: string;
  label: string;
  image: string;
  phoneScreens?: Array<{
    src: string;
    title: string;
    accent: string;
  }>;
  gradient: string;
  description: string;
  proof: string;
  features: string[];
  stack: string[];
  systems: Array<{
    title: string;
    detail: string;
  }>;
  detailHref?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  playStoreComingSoon?: boolean;
  archiveHref?: string;
  imageContain?: boolean;
};

const flagshipMetrics = aaspasCaseStudy.heroMetrics;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const getCircularOffset = (index: number, activeIndex: number, total: number) => {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
};

export default function AppShowcase() {
  const [currentApp, setCurrentApp] = useState(0);
  const [currentAaspasPhoneScreen, setCurrentAaspasPhoneScreen] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [mobileDragOffset, setMobileDragOffset] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isShowcaseInView = useInView(sectionRef, { amount: 0.2 });

  const apps = useMemo<ShowcaseApp[]>(
    () => [
      {
        name: 'AasPas',
        label: 'Flagship product',
        image: aaspasCaseStudy.homePhoneScreens[0].src,
        phoneScreens: aaspasCaseStudy.homePhoneScreens.map((screen) => ({
          src: screen.src,
          title: screen.title,
          accent: screen.accent,
        })),
        gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
        description:
          'A production-grade hyperlocal service platform with customer booking, worker operations, multilingual AI booking help, React Native StyleSheet-driven screens, live tracking, native calls, payment automation, wallet settlement, support, reviews, and admin workflows.',
        proof:
          'Built as a complete marketplace system: role-based mobile apps, React Native StyleSheet-based screen architecture, backend APIs, native Android modules, realtime sockets, route caching, multilingual AI assistance, payment reconciliation, worker earnings, settlement-aware money flows, and operational tooling.',
        features: [
          'Service discovery and worker matching',
          'Multilingual AI booking assistant',
          'React Native StyleSheet-based native UI system',
          'Native booking popup and call flows',
          'Smooth live worker tracking',
          'Service-radius and availability logic',
          'Razorpay plus cash collection flow',
          'Worker earnings and wallet visibility',
          'Payment summary and remaining-due correctness',
          'Support, reviews, and booking history',
          'AI-guided booking help for natural-language requests',
          'Admin oversight and version-control support',
          '12-language localization',
        ],
        stack: [
          'React Native',
          'React Native StyleSheet',
          'Expo',
          'TypeScript',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Socket.IO',
          'Redis',
          'Firebase FCM',
          'Agora',
          'Razorpay',
          'Google Maps',
        ],
        systems: aaspasCaseStudy.homeProofBlocks,
        detailHref: '/projects/aaspas',
        playStoreUrl: AASPAS_PLAY_STORE_URL,
      },
      {
        name: 'AasPas Smart Box',
        label: 'IoT platform',
        image: aaspasSmartBoxCaseStudy.assets.phonePreview,
        gradient: 'from-sky-400 via-cyan-500 to-blue-700',
        description:
          'A connected smart-switch platform that combines ESP32 hardware, cloud APIs, web dashboard, mobile app, realtime device sync, timer automation, energy tracking, and power-loss recovery.',
        proof:
          'This project proves full-stack IoT product engineering: firmware-aware backend design, JWT ownership control, realtime Socket.IO state, mobile and web control surfaces, and resilience logic for actual household usage.',
        features: [
          'ESP32 device claiming and ownership',
          '3-channel relay control',
          'Per-relay timer automation',
          'Daily and one-time schedules',
          'Realtime mobile and web sync',
          'Energy usage and cost tracking',
          'Power-loss pause and resume logic',
          'HTTP fallback when socket drops',
          'Monthly device energy overview',
          'Multi-device user dashboard',
        ],
        stack: [
          'ESP32',
          'Expo',
          'React Native',
          'Next.js',
          'Node.js',
          'MongoDB',
          'Socket.IO',
          'JWT',
          'Render',
        ],
        systems: aaspasSmartBoxCaseStudy.homeProofBlocks,
        detailHref: '/projects/aaspas-smart-box',
        playStoreComingSoon: true,
      },
      {
        name: 'Mushdelight',
        label: 'Commerce system',
        image: '/project/Mushdelight.png',
        gradient: 'from-emerald-400 via-lime-500 to-green-600',
        description:
          'Premium food commerce platform with catalog, order lifecycle handling, customer auth, reviews, subscriber communication, and admin-side product control.',
        proof:
          'Demonstrates deeper commerce execution across Mongo-backed products and orders, OTP and password auth, review flow, subscriber email handling, and admin-side operational controls.',
        features: [
          'Catalog and product storytelling',
          'Cart and checkout flow',
          'Order tracking and cancellation',
          'OTP and password auth flows',
          'Order management',
          'Admin-side product control and reorder',
          'Subscriber and email communication flow',
        ],
        stack: ['Next.js', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT', 'Brevo', 'Nodemailer', 'Tailwind CSS', 'Framer Motion'],
        systems: [
          {
            title: 'Commerce flow',
            detail: 'Catalog browsing, cart management, checkout, and order completion are connected as one conversion-focused journey.',
          },
          {
            title: 'Customer lifecycle',
            detail: 'Login, signup, OTP verification, profile updates, reviews, order tracking, and cancellation support a more complete customer commerce loop.',
          },
          {
            title: 'Business and operations layer',
            detail: 'Admin login, product ordering control, contacts, subscribers, and bulk email tooling make it easier to position the project as a deployable commerce system.',
          },
        ],
        detailHref: '/projects/mushdelight',
        liveUrl: 'https://mushdelight.vercel.app/',
      },
      {
        name: 'Visual Voicemail',
        label: 'Telephony app',
        image: voicemailProjectCaseStudy.assets.poster,
        gradient: 'from-blue-500 via-cyan-500 to-emerald-600',
        description:
          'An Android-first visual voicemail product with Twilio forwarding flow, message inbox, unread badges, greeting setup, and voicemail playback.',
        proof:
          'Shows cross-layer product thinking across telephony webhooks, Mongo-backed voicemail storage, audio message handling, and mobile inbox UX.',
        features: [
          'Twilio-based unanswered-call voicemail flow',
          'Voicemail inbox with unread state',
          'Greeting upload support',
          'Caller number and duration visibility',
          'Audio playback inside app',
          'Hindi-first mobile experience',
        ],
        stack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Twilio', 'Multer', 'Axios'],
        systems: voicemailProjectCaseStudy.homeProofBlocks,
        detailHref: '/projects/visual-voicemail',
        imageContain: true,
      },
      {
        name: 'AI Camera Pro',
        label: 'Mobile imaging app',
        image: aiCameraProjectCaseStudy.assets.poster,
        gradient: 'from-sky-400 via-blue-500 to-indigo-700',
        description:
          'A premium camera-style React Native app with capture modes, gallery import, permission UX, quality control, device-side enhancement flow, and preview behavior.',
        proof:
          'Shows mobile-product craftsmanship around camera permissions, image processing flow, animation polish, and richer capture interactions beyond a basic utility screen.',
        features: [
          'Photo, Portrait, Night, Macro, and Pro modes',
          'Camera and gallery import flow',
          'Device-side enhancement and resize pipeline',
          'HD and standard output quality',
          'Flash and settings controls',
          'Preview modal and processing overlay',
        ],
        stack: ['React Native', 'Image Picker', 'Image Resizer', 'react-native-permissions', 'Animated API'],
        systems: aiCameraProjectCaseStudy.homeProofBlocks,
        detailHref: '/projects/ai-camera-pro',
        imageContain: true,
      },
      {
        name: 'Lizz-Shop',
        label: 'E-commerce app',
        image: '/project/Lizz-Shop.png',
        gradient: 'from-fuchsia-400 via-pink-500 to-rose-600',
        description:
          'Full-stack shopping experience with authentication, category browsing, wishlist, cart persistence, search, size and color variants, and Mongo-backed user state.',
        proof:
          'Shows practical full-stack shopping architecture across cookie-authenticated sessions, JWT-secured APIs, user-specific cart and wishlist state, and storefront merchandising sections.',
        features: [
          'Product listing and detail flow',
          'Wishlist and cart state',
          'Variant selection by size and color',
          'Cookie-authenticated sessions',
          'MongoDB-backed user and product model',
          'Responsive storefront pages',
          'New arrivals, trending, and BOGO merchandising',
        ],
        stack: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB Atlas', 'JWT', 'Mongoose', 'Axios', 'Tailwind CSS'],
        systems: [
          {
            title: 'Customer purchase loop',
            detail: 'The project covers browse, save, cart, and purchase-intent behavior instead of isolated static pages.',
          },
          {
            title: 'Auth and data layer',
            detail: 'JWT auth with cookies and MongoDB-backed user cart and wishlist state show real backend-backed application structure.',
          },
          {
            title: 'Interface quality',
            detail: 'Search, merchandising bands, detailed product pages, and category browsing make it feel more like an actual retail storefront.',
          },
        ],
        detailHref: '/projects/lizz-shop',
        liveUrl: 'https://lizz-shop.vercel.app/',
      },
      {
        name: 'Building Junction',
        label: 'Business website',
        image: '/project/Building Junction.png',
        gradient: 'from-amber-400 via-orange-500 to-red-600',
        description:
          'Premium architectural consultancy website with service presentation, portfolio storytelling, lead generation, and professional brand positioning.',
        proof:
          'Designed to communicate trust for a real business through visual hierarchy, content strategy, responsive sections, and SEO-friendly structure.',
        features: [
          'Premium landing experience',
          'Service storytelling',
          'Portfolio presentation',
          'Lead capture flow',
          'SEO-friendly layout',
          'Business-first responsive design',
        ],
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO'],
        systems: [
          {
            title: 'Brand communication',
            detail: 'The site turns services and portfolio work into a clear trust-building narrative for potential clients.',
          },
          {
            title: 'Lead generation',
            detail: 'Structure, CTA placement, and presentation choices were made to support enquiry and business conversion.',
          },
          {
            title: 'Professional execution',
            detail: 'Responsive design, visual polish, and content hierarchy make it credible for a real consultancy business.',
          },
        ],
        archiveHref: '/projects',
      },
      {
        name: 'EduQuest',
        label: 'Hackathon build',
        image: '/project/EduQuest .png',
        gradient: 'from-sky-400 via-cyan-500 to-blue-600',
        description:
          'Gamified learning platform with interactive quizzes, progress loops, student-teacher concepts, and PWA-style product thinking.',
        proof:
          'Highlights ability to design ambitious product loops around learning, engagement, interaction, and frontend experimentation.',
        features: [
          'Quiz arena mechanics',
          'XP and progression loops',
          'Student and teacher ideas',
          'Interactive UI design',
          'Gamified learning concepts',
          'PWA-oriented thinking',
        ],
        stack: ['React', 'TypeScript', 'Vite', 'React Three Fiber', 'Tailwind CSS', 'PWA'],
        systems: [
          {
            title: 'Gamification logic',
            detail: 'Progression, XP, and challenge mechanics were used to make the product feel more engaging than a standard quiz app.',
          },
          {
            title: 'Learning experience design',
            detail: 'The project explores how interaction design can improve retention and motivation for educational products.',
          },
          {
            title: 'Frontend ambition',
            detail: 'It also demonstrates willingness to combine UI, animation, and product experiments under fast hackathon constraints.',
          },
        ],
        archiveHref: '/projects',
      },
    ],
    []
  );

  const activeApp = apps[currentApp];

  useEffect(() => {
    const applyScreenMode = () => setIsLargeScreen(window.innerWidth >= 1024);
    applyScreenMode();
    window.addEventListener('resize', applyScreenMode, { passive: true });
    return () => window.removeEventListener('resize', applyScreenMode);
  }, []);

  useEffect(() => {
    if (!isLargeScreen || !isShowcaseInView) {
      return;
    }

    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentApp((prev) => (prev + 1) % apps.length);
      }
    }, 6500);

    return () => clearInterval(interval);
  }, [apps.length, isDragging, isLargeScreen, isShowcaseInView]);

  useEffect(() => {
    if (!isShowcaseInView) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentAaspasPhoneScreen((prev) => (prev + 1) % aaspasCaseStudy.homePhoneScreens.length);
    }, 1650);

    return () => window.clearInterval(interval);
  }, [isShowcaseInView]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsDragging(true);
    setMobileDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    setMobileDragOffset(touchEndX.current - touchStartX.current);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      setCurrentApp((prev) =>
        swipeDistance > 0 ? (prev + 1) % apps.length : (prev - 1 + apps.length) % apps.length
      );
    }

    setMobileDragOffset(0);
    setTimeout(() => setIsDragging(false), 120);
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#07111f] py-24 text-white" id="apps">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(16,185,129,0.18),transparent_28%),linear-gradient(135deg,#07111f_0%,#0f172a_48%,#08111f_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-5xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Product engineering portfolio
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Products that prove mobile, backend, realtime, payment, native, and IoT systems depth.
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            This portfolio is intentionally structured to show product depth clearly: not only screens,
            but the actual system thinking behind maps, wallet logic, booking state, notifications,
            mobile recovery, native Android behaviors, and business-facing operations.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl sm:p-7"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Flagship case study
                </p>
                <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">AasPas</h3>
              </div>
              <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-200">
                Solo-built production-scale marketplace
              </div>
            </div>

            <p className="text-lg leading-8 text-slate-200">
              AasPas is a full-stack hyperlocal services platform with customer booking, worker operations,
              live worker tracking, native voice calls, payment automation, worker earnings, multilingual UX,
              support flows, and admin-ready operations.
            </p>

            <div className="mt-5 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5">
              <p className="text-sm leading-7 text-emerald-100">{aaspasCaseStudy.soloNarrative}</p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {flagshipMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div className="text-lg font-black text-white sm:text-xl">{metric.value}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-white/10 bg-slate-950/45 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="font-bold text-white">What makes AasPas unusually deep</h4>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  High-value interview proof
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {aaspasCaseStudy.homeProofBlocks.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <h5 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{item.title}</h5>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-white/10 bg-slate-950/45 p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="font-bold text-white">Technology footprint</h4>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Full-stack systems
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {aaspasCaseStudy.technicalArchitecture.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <h5 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{group.title}</h5>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{group.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={AASPAS_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                <PlayStoreIcon className="h-4 w-4" />
                <span>Download on Play Store</span>
                <ExternalArrowIcon className="h-4 w-4" />
              </a>
              <Link
                href="/projects/aaspas"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <DetailsIcon className="h-4 w-4" />
                <span>Full Case Study</span>
              </Link>
            </div>
          </motion.div>

          <div
            className="relative min-h-[520px] lg:hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-x-0 top-0 mx-auto h-[500px] max-w-[310px]">
              {apps.map((app, index) => {
                const offset = getCircularOffset(index, currentApp, apps.length);
                const dragProgress = clamp(-mobileDragOffset / 120, -1.2, 1.2);
                const virtualPosition = offset - dragProgress;
                const distance = Math.abs(virtualPosition);
                const isNear = distance <= 1.7;
                const activePhoneScreen =
                  app.name === 'AasPas' && app.phoneScreens
                    ? app.phoneScreens[currentAaspasPhoneScreen]
                    : undefined;
                const previewImage = activePhoneScreen?.src ?? app.image;

                const angle = virtualPosition * 0.9;
                const x = Math.sin(angle) * 92;
                const y = (1 - Math.cos(angle)) * 34;
                const scale = 1 - Math.min(distance, 1.4) * 0.18;
                const opacity = 1 - Math.min(distance, 1.4) * 0.32;
                const rotate = virtualPosition * 7;
                const zIndex = Math.round(30 - distance * 10);

                if (!isNear) return null;

                return (
                  <motion.button
                    key={app.name}
                    type="button"
                    onClick={() => setCurrentApp(index)}
                    className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 text-left outline-none"
                    initial={false}
                    animate={{
                      x,
                      y,
                      rotate,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{ duration: isDragging ? 0.08 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                    aria-label={`Show ${app.name}`}
                  >
                    <div
                      className={`h-[500px] w-[250px] rounded-[2.3rem] bg-gradient-to-br ${app.gradient} p-1 shadow-2xl shadow-black/40`}
                    >
                      <div className="h-full rounded-[2rem] bg-slate-950 p-2">
                        <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-slate-900">
                          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
                          <Image
                            src={previewImage}
                            alt={activePhoneScreen?.title ?? `${app.name} screenshot`}
                            fill
                            sizes="250px"
                            className={app.imageContain ? 'object-contain p-7' : 'object-cover'}
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-5 pt-20">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{app.label}</p>
                            <h4 className="mt-2 text-xl font-black text-white">{app.name}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div
            className="relative hidden min-h-[560px] lg:block"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="absolute inset-x-0 top-0 mx-auto h-[520px] max-w-[330px]">
              {apps.map((app, index) => {
                const offset = index - currentApp;
                const isActive = offset === 0;
                const isNear = Math.abs(offset) <= 2;
                const activePhoneScreen =
                  app.name === 'AasPas' && app.phoneScreens
                    ? app.phoneScreens[currentAaspasPhoneScreen]
                    : undefined;
                const previewImage = activePhoneScreen?.src ?? app.image;

                if (!isNear) return null;

                return (
                  <motion.button
                    key={app.name}
                    type="button"
                    onClick={() => setCurrentApp(index)}
                    className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 text-left outline-none"
                    initial={false}
                    animate={{
                      x: offset * 82,
                      y: Math.abs(offset) * 18,
                      rotate: offset * 5,
                      scale: isActive ? 1 : 0.82,
                      opacity: isActive ? 1 : 0.45,
                      zIndex: isActive ? 20 : 10 - Math.abs(offset),
                    }}
                    transition={{ duration: isDragging ? 0.18 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: isActive ? -8 : Math.abs(offset) * 18 - 4 }}
                    aria-label={`Show ${app.name}`}
                  >
                    <div
                      className={`h-[500px] w-[250px] rounded-[2.3rem] bg-gradient-to-br ${app.gradient} p-1 shadow-2xl shadow-black/40`}
                    >
                      <div className="h-full rounded-[2rem] bg-slate-950 p-2">
                        <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-slate-900">
                          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
                          <Image
                            src={previewImage}
                            alt={activePhoneScreen?.title ?? `${app.name} screenshot`}
                            fill
                            sizes="250px"
                            className={app.imageContain ? 'object-contain p-7' : 'object-cover'}
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent p-5 pt-20">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{app.label}</p>
                            <h4 className="mt-2 text-xl font-black text-white">{app.name}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeApp.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-6 lg:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{activeApp.label}</p>
                <h3 className="mt-2 text-3xl font-black text-white">{activeApp.name}</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{activeApp.description}</p>
                <p className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm leading-7 text-emerald-100">
                  {activeApp.proof}
                </p>

                {activeApp.name === 'AasPas' ? (
                  <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-300">
                        Real app screens
                      </h4>
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100">
                        One screen per phone
                      </span>
                    </div>
                    <div className="flex max-w-full gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                      {aaspasCaseStudy.homePhoneScreens.map((shot) => (
                        <div key={shot.title} className="w-[176px] shrink-0">
                          <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-1 shadow-2xl shadow-black/35">
                            <div className="rounded-[1.75rem] bg-slate-950 p-2">
                              <div className="relative h-[320px] overflow-hidden rounded-[1.45rem] bg-slate-900">
                                <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
                                <Image
                                  src={shot.src}
                                  alt={shot.title}
                                  fill
                                  sizes="176px"
                                  className="object-cover object-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="px-2 pt-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                              {shot.accent}
                            </p>
                            <p className="mt-1 text-sm font-bold text-white">{shot.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {activeApp.name === 'AasPas Smart Box' ? (
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {aaspasSmartBoxCaseStudy.showcaseGallery.slice(0, 3).map((shot) => (
                      <div key={shot.title} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50">
                        <div className="relative aspect-[3/4]">
                          <Image
                            src={shot.src}
                            alt={shot.title}
                            fill
                            sizes="(min-width: 1024px) 12vw, 28vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="min-w-0">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-300">System proof</h4>
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeApp.systems.map((system, idx) => (
                    <motion.div
                      key={system.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="min-w-0 rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                    >
                      <h5 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{system.title}</h5>
                      <p className="mt-3 break-words text-sm leading-7 text-slate-300">{system.detail}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="mb-4 mt-6 text-sm font-bold uppercase tracking-[0.22em] text-slate-300">Feature proof</h4>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {activeApp.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.03 }}
                      className="min-w-0 rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm font-semibold leading-7 text-white break-words"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex max-w-full flex-wrap gap-2">
                  {activeApp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="max-w-full rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 break-words"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activeApp.playStoreUrl ? (
                    <a
                      href={activeApp.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
                    >
                      <PlayStoreIcon className="h-4 w-4" />
                      <span>Try the app</span>
                    </a>
                  ) : null}

                  {!activeApp.playStoreUrl && activeApp.playStoreComingSoon ? (
                    <PlayStoreSoonButton label="Play Store" />
                  ) : null}

                  {activeApp.detailHref ? (
                    <Link
                      href={activeApp.detailHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                    >
                      <DetailsIcon className="h-4 w-4" />
                      <span>View details</span>
                    </Link>
                  ) : null}

                  {activeApp.liveUrl ? (
                    <a
                      href={activeApp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
                    >
                      <span>Visit live project</span>
                      <ExternalArrowIcon className="h-4 w-4" />
                    </a>
                  ) : null}

                  {activeApp.archiveHref ? (
                    <Link
                      href={activeApp.archiveHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-5 py-3 text-sm font-bold text-slate-200 transition-transform hover:-translate-y-0.5"
                    >
                      <span>Project archive</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-3">
          {apps.map((app, index) => (
            <button
              key={app.name}
              onClick={() => setCurrentApp(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentApp === index ? 'w-10 bg-cyan-300' : 'w-2.5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Open ${app.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
