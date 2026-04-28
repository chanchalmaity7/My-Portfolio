'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DetailsIcon, ExternalArrowIcon, PlayStoreIcon } from '@/components/ActionIcons';
import PlayStoreSoonButton from '@/components/PlayStoreSoonButton';
import ProjectBannerVisual from '@/components/ProjectBannerVisual';
import { AASPAS_PLAY_STORE_URL, aaspasCaseStudy } from '@/data/aaspas';
import { aaspasSmartBoxCaseStudy } from '@/data/aaspasSmartBox';
import { aiCameraProjectCaseStudy } from '@/data/aiCameraProject';
import { LIZZ_SHOP_LIVE_URL, lizzShopProjectCaseStudy } from '@/data/lizzShopProject';
import { MUSHDELIGHT_LIVE_URL, mushdelightProjectCaseStudy } from '@/data/mushdelightProject';
import { PRIVATE_THEATER_LIVE_URL, streamingProjectCaseStudy } from '@/data/streamingProject';
import { voicemailProjectCaseStudy } from '@/data/voicemailProject';

type Project = {
  title: string;
  image: string;
  imageClassName?: string;
  visualVariant?: 'aaspasLottie' | 'smartBoxPhone';
  description: string;
  proof: string;
  tech: string[];
  status: string;
  liveUrl: string | null;
  detailHref?: string;
  playStoreUrl?: string;
  playStoreComingSoon?: boolean;
  imageContain?: boolean;
  features: string[];
  deepGroups: Array<{
    title: string;
    detail: string;
  }>;
};

const projects: Project[] = [
  {
    title: 'AasPas - Hyperlocal Service Marketplace',
    image: aaspasCaseStudy.assets.heroCard,
    visualVariant: 'aaspasLottie',
    description:
      'A full-stack React Native and Node.js marketplace for customers, workers, and admins. Includes native Android call screens, full-screen booking alerts, live worker tracking, route cache, multilingual AI booking assistance, payments, wallet settlement, worker earnings, support, reviews, and multilingual UX.',
    proof:
      'This is a solo-built flagship system that combines mobile product engineering, backend architecture, realtime sockets, native Android behavior, live location workflows, multilingual AI-assisted booking support, payment correctness, and operations-oriented business tooling.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'Redis patterns', 'Firebase FCM', 'Agora', 'Razorpay', 'Google Maps'],
    status: 'Flagship product',
    liveUrl: null,
    detailHref: '/projects/aaspas',
    playStoreUrl: AASPAS_PLAY_STORE_URL,
    features: [
      'Native Android incoming booking and calling experiences',
      'Multilingual AI booking-help and assisted service discovery',
      'Realtime worker tracking with route cache and latest-location recovery',
      'Minimum booking fee, online payment, cash collection, and remaining-due flow',
      'Worker earnings, commission, wallet, and settlement-style records',
      'Customer, worker, and admin-facing product surfaces',
      'Support tickets, reviews, tutorials, and booking history flows',
      'Service-radius and availability logic for worker discovery',
      '12-language localization for Indian mobile users',
    ],
    deepGroups: aaspasCaseStudy.homeProofBlocks,
  },
  {
    title: 'AasPas Smart Box - Connected IoT Control Platform',
    image: aaspasSmartBoxCaseStudy.assets.phonePreview,
    visualVariant: 'smartBoxPhone',
    description:
      'A connected smart-switch product that combines ESP32 hardware, a cloud backend, a web dashboard, a mobile app, relay automation, energy analytics, and recovery-focused device behavior.',
    proof:
      'This project shows that I can build beyond app-only software into end-to-end IoT systems where hardware identity, cloud state, realtime transport, energy data, and user control all matter together.',
    tech: ['ESP32', 'Expo', 'React Native', 'Next.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Render'],
    status: 'IoT product system',
    liveUrl: null,
    detailHref: '/projects/aaspas-smart-box',
    playStoreComingSoon: true,
    features: [
      'Device claiming and user ownership',
      '3-channel relay control',
      'Per-relay timer automation',
      'Daily and one-time schedules',
      'Realtime sync across device, app, and dashboard',
      'Energy units and cost tracking',
      'Power-loss pause and resume behavior',
      'Monthly energy overview and outage history',
    ],
    deepGroups: aaspasSmartBoxCaseStudy.homeProofBlocks,
  },
  {
    title: 'Mushdelight - Premium Food Commerce',
    image: mushdelightProjectCaseStudy.assets.poster,
    description:
      'Premium food commerce platform with customer auth, OTP verification, order lifecycle screens, product reviews, subscriber communication, and admin product controls.',
    proof:
      'Built to show complete commerce execution across customer accounts, Mongo-backed catalog and order data, review systems, communication workflows, and business-facing product operations.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT patterns', 'Brevo', 'Nodemailer', 'Framer Motion'],
    status: 'Commerce product',
    liveUrl: MUSHDELIGHT_LIVE_URL,
    detailHref: '/projects/mushdelight',
    features: [
      'Signup, login, OTP verification, and password recovery',
      'Catalog and cart journey',
      'Checkout and order lifecycle screens',
      'Order tracking and cancellation',
      'Review and rating support',
      'Subscriber and contact flows',
      'Admin-side product and settings operations',
    ],
    deepGroups: mushdelightProjectCaseStudy.homeProofBlocks,
  },
  {
    title: 'Lizz-Shop - Retail E-commerce Platform',
    image: lizzShopProjectCaseStudy.assets.poster,
    description:
      'Full-stack shopping platform with category browsing, search, size and color variants, JWT-backed sessions, MongoDB user state, wishlist persistence, and cart persistence.',
    proof:
      'This project demonstrates practical ecommerce engineering through cookie-authenticated sessions, user-specific shopping state, merchandising sections, and variant-aware retail browsing.',
    tech: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'JWT', 'cookies-next', 'Axios'],
    status: 'Retail commerce system',
    liveUrl: LIZZ_SHOP_LIVE_URL,
    detailHref: '/projects/lizz-shop',
    features: [
      'Category browsing and search',
      'Wishlist and cart persistence',
      'Size and color variant selection',
      'JWT plus cookie-authenticated sessions',
      'MongoDB-backed product and user state',
      'New arrivals, trending, and BOGO sections',
      'Responsive storefront layout',
    ],
    deepGroups: lizzShopProjectCaseStudy.homeProofBlocks,
  },
  {
    title: 'AasPas Private Theater - Realtime Watch Party Website',
    image: streamingProjectCaseStudy.assets.poster,
    description:
      'A realtime watch-party system with host-controlled playback, shared room links, WebRTC voice, chat, reactions, multi-source video support, and Mongo-backed recovery.',
    proof:
      'This project shows depth in collaborative media engineering: playback authority rules, player abstraction, room persistence, source validation, and social interaction all working together in one product.',
    tech: ['Next.js', 'React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'SimplePeer', 'ReactPlayer', 'react-youtube'],
    status: 'Realtime web product',
    liveUrl: PRIVATE_THEATER_LIVE_URL,
    detailHref: '/projects/aaspas-private-theater',
    imageContain: true,
    features: [
      'Private room creation and join-link flow',
      'Host-only synchronized playback control',
      'Realtime room chat and emoji reactions',
      'WebRTC voice communication',
      'Source support for YouTube, Drive, MP4, HLS, Streamable, and embeds',
      'Playback recovery after refresh or buffering',
      'Mongo-backed room persistence and TTL cleanup',
      'Fullscreen-friendly collaboration UI',
    ],
    deepGroups: streamingProjectCaseStudy.homeProofBlocks,
  },
  {
    title: 'Visual Voicemail System',
    image: voicemailProjectCaseStudy.assets.poster,
    description:
      'Android-first visual voicemail product with Twilio forwarding flow, Mongo-backed message storage, greeting setup, unread badges, and mobile audio playback.',
    proof:
      'Shows how telephony workflows, backend event handling, audio data, and mobile inbox UX can be turned into one product concept.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Twilio', 'TwiML', 'Multer', 'React Native Sound'],
    status: 'Telephony workflow app',
    liveUrl: null,
    detailHref: '/projects/visual-voicemail',
    imageContain: true,
    features: [
      'Twilio-based unanswered-call voicemail flow',
      'Voicemail inbox with unread state',
      'Greeting upload support',
      'Caller number and duration visibility',
      'Audio playback inside app',
      'Hindi-first mobile experience',
    ],
    deepGroups: voicemailProjectCaseStudy.homeProofBlocks,
  },
  {
    title: 'AI Camera Pro',
    image: aiCameraProjectCaseStudy.assets.poster,
    description:
      'Premium camera-style React Native app with multiple capture modes, gallery import, permissions flow, device-side enhancement pipeline, and polished preview behavior.',
    proof:
      'Highlights mobile product polish across permission handling, capture interactions, image processing flow, and camera-style interface design.',
    tech: ['React Native', 'TypeScript', 'Image Picker', 'Image Resizer', 'react-native-permissions', 'Animated API'],
    status: 'Mobile imaging product',
    liveUrl: null,
    detailHref: '/projects/ai-camera-pro',
    imageContain: true,
    features: [
      'Photo, Portrait, Night, Macro, and Pro modes',
      'Camera and gallery import flow',
      'Device-side enhancement and resize pipeline',
      'HD and standard output quality',
      'Flash and settings controls',
      'Preview modal and processing overlay',
    ],
    deepGroups: aiCameraProjectCaseStudy.homeProofBlocks,
  },
  {
    title: 'Building Junction - Architecture Consultancy',
    image: '/project/Building Junction.png',
    description:
      'Business website for an architectural consultancy with service storytelling, portfolio presentation, lead generation, responsive design, and SEO-friendly structure.',
    proof:
      'It is positioned as a conversion-focused business website rather than only a visual landing page, with emphasis on trust and brand quality.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO'],
    status: 'Live demo',
    liveUrl: 'https://architect-website-teal.vercel.app/',
    features: ['Premium landing page', 'Service presentation', 'Portfolio showcase', 'Lead capture', 'SEO hierarchy', 'Responsive layout'],
    deepGroups: [
      { title: 'Brand trust', detail: 'Visual hierarchy and presentation choices were crafted for a real-world consultancy audience.' },
      { title: 'Lead generation', detail: 'The structure supports enquiry, credibility, and commercial positioning rather than brochure-only browsing.' },
    ],
  },
  {
    title: 'EduQuest - Gamified Learning Platform',
    image: '/project/EduQuest .png',
    description:
      'Gamified learning product with quiz flows, progress mechanics, student-teacher concepts, interactive UI, and PWA-style product thinking.',
    proof:
      'It shows ambition in educational product design by combining gameplay, progress loops, and highly interactive frontend decisions.',
    tech: ['React', 'TypeScript', 'Vite', 'React Three Fiber', 'Tailwind CSS', 'PWA'],
    status: 'Hackathon project',
    liveUrl: 'https://edu-quest-beta.vercel.app/',
    features: ['XP system', 'Quiz arena', 'Progress tracking', 'Teacher tools', 'Interactive learning', 'PWA concepts'],
    deepGroups: [
      { title: 'Gamified motivation', detail: 'XP and challenge mechanics were used to make the learning experience feel dynamic and rewarding.' },
      { title: 'Frontend experimentation', detail: 'The build also proves comfort with creative interaction and rapid product exploration.' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.14),transparent_28%)]" />
        <div className="container relative z-10 mx-auto">
          <Link href="/" className="mb-8 inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-bold text-cyan-200">
            Back to home
          </Link>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="max-w-5xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Project archive</p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">Selected engineering work</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A deeper look at products I built across mobile, backend, payments, realtime systems,
              maps, native Android flows, IoT, commerce, and modern web experiences. The goal here is
              to show actual execution depth clearly, especially on larger systems like AasPas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className={`overflow-hidden rounded-[1.8rem] border bg-white/[0.05] shadow-2xl shadow-slate-950/25 backdrop-blur-xl ${
                index === 0 ? 'border-cyan-300/35 lg:col-span-2' : 'border-white/10'
              }`}
            >
              <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-72 overflow-hidden">
                    <ProjectBannerVisual
                      alt={project.title}
                      image={project.image}
                      imageClassName={project.imageClassName}
                      imageContain={project.imageContain}
                      variant={project.visualVariant}
                      sizes="(min-width: 768px) 42vw, 100vw"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-bold text-cyan-100">
                      {project.status}
                    </span>
                    {index === 0 ? (
                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
                        {aaspasCaseStudy.heroMetrics[0].value}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-4 text-3xl font-black tracking-tight">{project.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm leading-7 text-emerald-100">
                    {project.proof}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Key features</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {project.deepGroups.map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                        <h3 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs font-semibold text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.playStoreUrl ? (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950"
                      >
                        <PlayStoreIcon className="h-4 w-4" />
                        <span>Play Store</span>
                        <ExternalArrowIcon className="h-4 w-4" />
                      </a>
                    ) : null}

                    {!project.playStoreUrl && project.playStoreComingSoon ? (
                      <PlayStoreSoonButton label="Play Store" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950" />
                    ) : null}

                    {project.detailHref ? (
                      <Link
                        href={project.detailHref}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-bold text-white"
                      >
                        <DetailsIcon className="h-4 w-4" />
                        <span>View details</span>
                      </Link>
                    ) : null}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950"
                      >
                        <span>Visit live project</span>
                        <ExternalArrowIcon className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
