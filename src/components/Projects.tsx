'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
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
  image: string | null;
  imageClassName?: string;
  visualVariant?: 'aaspasLottie' | 'smartBoxPhone';
  description: string;
  impact: string;
  tech: string[];
  status: string;
  gradient: string;
  liveUrl: string | null;
  detailHref?: string;
  playStoreUrl?: string;
  playStoreComingSoon?: boolean;
  imageContain?: boolean;
  deepDive: Array<{
    title: string;
    detail: string;
  }>;
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(0);

  const projects: Project[] = [
    {
      title: 'AasPas - Hyperlocal Service Marketplace',
      image: aaspasCaseStudy.assets.heroCard,
      visualVariant: 'aaspasLottie',
      description:
        'A full-stack React Native and Node.js platform for service booking, multilingual AI booking help, worker operations, native calling, live tracking, payment automation, wallet settlement, multilingual UX, and admin workflows.',
      impact:
        'Flagship proof of mobile engineering, backend architecture, native Android modules, realtime sockets, Redis and Mongo recovery, AI-guided booking support, payment correctness, live location systems, and business-facing operational tooling built solo.',
      tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'Redis', 'Firebase FCM', 'Agora', 'Razorpay'],
      status: 'Flagship product',
      gradient: 'from-cyan-500 to-blue-700',
      liveUrl: null,
      detailHref: '/projects/aaspas',
      playStoreUrl: AASPAS_PLAY_STORE_URL,
      deepDive: [
        {
          title: 'Money and wallet automation',
          detail:
            'Advance booking fee, remaining balance, worker earnings, commission, cash collection, wallet visibility, and settlement-oriented flow are handled as one connected marketplace payment system.',
        },
        {
          title: 'Tracking and geo logic',
          detail:
            'Worker radius, availability, live location, route cache, latest-location recovery, ETA awareness, and controlled rerouting make tracking behave like a serious logistics-style flow.',
        },
        {
          title: 'Native Android depth',
          detail:
            'Incoming booking popup, full-screen call UX, ongoing-call notification, lock-screen actions, background-safe flows, and return-to-call behavior were built natively where JS-only UX was not enough.',
        },
        {
          title: 'Operational completeness',
          detail:
            'Customer app, worker app, admin tooling, support flows, review handling, version control, and notification routing make the project feel like a full business system, not a prototype.',
        },
        {
          title: 'AI-guided booking support',
          detail:
            'A multilingual assistant layer helps users express service needs naturally, route them to the right worker flow, and reduce friction during discovery and booking.',
        },
      ],
    },
    {
      title: 'AasPas Smart Box - Connected IoT Control Platform',
      image: aaspasSmartBoxCaseStudy.assets.phonePreview,
      visualVariant: 'smartBoxPhone',
      description:
        'A full-stack smart-switch platform built around ESP32 hardware, cloud APIs, a web dashboard, a mobile app, relay automation, energy analytics, and device-recovery behavior.',
      impact:
        'Strong proof of end-to-end IoT product engineering across device identity, backend automation, realtime transport, energy logic, mobile UX, web control surfaces, and power-loss handling.',
      tech: ['ESP32', 'Expo', 'React Native', 'Next.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Render'],
      status: 'IoT product system',
      gradient: 'from-sky-500 to-blue-700',
      liveUrl: null,
      detailHref: '/projects/aaspas-smart-box',
      playStoreComingSoon: true,
      deepDive: [
        {
          title: 'Connected device architecture',
          detail:
            'ESP32 firmware, web dashboard, mobile app, and cloud backend stay in sync through authenticated APIs, realtime transport, and persistence.',
        },
        {
          title: 'Automation and scheduling',
          detail:
            'Each relay supports timers, daily schedules, and one-time schedules, making the system feel like a practical home-automation platform.',
        },
        {
          title: 'Energy intelligence',
          detail:
            'Relay-level watt, unit, cost, monthly usage, and all-time history turn the switch into a monitoring product, not just a remote toggle.',
        },
        {
          title: 'Power-loss resilience',
          detail:
            'Heartbeats, offline detection, power-loss pause/resume, outage history, and fallback communication paths show production-minded IoT thinking.',
        },
      ],
    },
    {
      title: 'Mushdelight - Premium Food Commerce',
      image: mushdelightProjectCaseStudy.assets.poster,
      description:
        'A premium food-commerce website with customer auth, OTP verification, order lifecycle handling, reviews, subscriber communication, and admin-side product operations.',
      impact:
        'Shows deeper commerce execution across customer accounts, Mongo-backed products and orders, review systems, email communication, and brand-ready operational tooling.',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT patterns', 'Brevo', 'Nodemailer', 'Framer Motion'],
      status: 'Commerce product',
      gradient: 'from-emerald-500 to-lime-600',
      liveUrl: MUSHDELIGHT_LIVE_URL,
      detailHref: '/projects/mushdelight',
      deepDive: [
        {
          title: 'Customer account lifecycle',
          detail:
            'Signup, login, OTP verification, forgot password, reset password, order visibility, and review participation make the product feel like a real commerce account system.',
        },
        {
          title: 'Order and post-purchase flow',
          detail:
            'Cart, checkout, order placement, tracking, and cancellation are connected so the product covers more than just the pre-payment part of ecommerce.',
        },
        {
          title: 'Business communication',
          detail:
            'Contact flows, subscriber capture, and email-oriented infrastructure make the site useful for brand retention and customer communication as well as checkout.',
        },
        {
          title: 'Admin operations',
          detail:
            'Product controls, settings, reorder handling, and data-backed business models show there is a usable operational layer behind the storefront.',
        },
      ],
    },
    {
      title: 'Lizz-Shop - Retail E-commerce Platform',
      image: lizzShopProjectCaseStudy.assets.poster,
      description:
        'A full-stack retail storefront with category browsing, search, variant-aware product pages, cookie-authenticated sessions, wishlist, cart persistence, and merchandising sections.',
      impact:
        'Demonstrates practical ecommerce engineering through JWT-backed sessions, MongoDB user state, size and color variants, persistent shopping intent, and curated retail presentation.',
      tech: ['Next.js 15', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Mongoose', 'JWT', 'cookies-next', 'Axios'],
      status: 'Retail commerce system',
      gradient: 'from-pink-500 to-rose-600',
      liveUrl: LIZZ_SHOP_LIVE_URL,
      detailHref: '/projects/lizz-shop',
      deepDive: [
        {
          title: 'Auth and session depth',
          detail:
            'The storefront uses JWT plus cookies so shopping state is tied to actual user sessions rather than fragile local-only browser memory.',
        },
        {
          title: 'Persistent shopping state',
          detail:
            'Cart and wishlist data are stored per user in MongoDB-backed models, which makes revisit behavior and multi-step shopping more realistic.',
        },
        {
          title: 'Variant-aware retail behavior',
          detail:
            'Size and color selection on product detail pages makes the purchase flow feel closer to an actual fashion or retail storefront.',
        },
        {
          title: 'Merchandising systems',
          detail:
            'Trending, new-arrivals, and BOGO sections show that the project includes merchandising logic, not only product CRUD and static pages.',
        },
      ],
    },
    {
      title: 'AasPas Private Theater - Realtime Watch Party Website',
      image: streamingProjectCaseStudy.assets.poster,
      description:
        'A collaborative watch-party website with host-controlled playback, join-link room entry, WebRTC voice, live chat, emoji reactions, and multi-source video support.',
      impact:
        'Strong proof of collaborative media engineering across playback authority, player abstraction, Socket.IO room sync, Mongo-backed recovery, and WebRTC communication.',
      tech: ['Next.js', 'React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'SimplePeer', 'ReactPlayer', 'react-youtube'],
      status: 'Realtime web product',
      gradient: 'from-red-500 to-fuchsia-700',
      liveUrl: PRIVATE_THEATER_LIVE_URL,
      detailHref: '/projects/aaspas-private-theater',
      imageContain: true,
      deepDive: [
        {
          title: 'Shared playback authority',
          detail:
            'The room owner controls shared play, pause, and seek while guests receive versioned state updates, drift correction, and recovery sync after reload or buffering.',
        },
        {
          title: 'Media compatibility engine',
          detail:
            'The product parses YouTube, Google Drive, HLS, direct media files, Streamable, and embed-style URLs so different source types can still fit into one room experience.',
        },
        {
          title: 'Room collaboration layer',
          detail:
            'WebRTC voice, live chat, emoji reactions, fullscreen overlays, and join-link workflows make the room feel like a real shared social product instead of a solo player.',
        },
        {
          title: 'Persistence and lifecycle',
          detail:
            'MongoDB stores playback state, activity, chat, and member identity hints while TTL cleanup keeps inactive rooms temporary and manageable.',
        },
      ],
    },
    {
      title: 'Visual Voicemail System',
      image: voicemailProjectCaseStudy.assets.poster,
      description:
        'An Android-first visual voicemail product with Twilio call forwarding flow, voicemail inbox, unread state, greeting setup, and audio playback.',
      impact:
        'Shows cross-layer product thinking across telephony webhooks, Mongo-backed voicemail storage, greeting handling, and mobile inbox UX.',
      tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Twilio', 'TwiML', 'Multer', 'React Native Sound'],
      status: 'Telephony workflow app',
      gradient: 'from-blue-500 to-emerald-600',
      liveUrl: null,
      detailHref: '/projects/visual-voicemail',
      imageContain: true,
      deepDive: voicemailProjectCaseStudy.homeProofBlocks,
    },
    {
      title: 'AI Camera Pro',
      image: aiCameraProjectCaseStudy.assets.poster,
      description:
        'A premium camera-style React Native app with capture modes, gallery import, permission UX, device-side enhancement flow, quality selection, and polished preview behavior.',
      impact:
        'Highlights mobile-product craftsmanship around permissions, processing flow, animation polish, and richer camera interactions beyond a basic utility screen.',
      tech: ['React Native', 'TypeScript', 'Image Picker', 'Image Resizer', 'react-native-permissions', 'Animated API'],
      status: 'Mobile imaging product',
      gradient: 'from-sky-500 to-indigo-700',
      liveUrl: null,
      detailHref: '/projects/ai-camera-pro',
      imageContain: true,
      deepDive: aiCameraProjectCaseStudy.homeProofBlocks,
    },
    {
      title: 'Building Junction - Architecture Consultancy',
      image: '/project/Building Junction.png',
      description:
        'A premium business website for an architecture consultancy with service storytelling, portfolio presentation, responsive sections, and lead-generation structure.',
      impact:
        'Demonstrates brand positioning, responsive design, SEO-friendly content hierarchy, and business-focused website execution.',
      tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Framer Motion'],
      status: 'Live demo',
      gradient: 'from-orange-500 to-red-600',
      liveUrl: 'https://architect-website-teal.vercel.app/',
      deepDive: [
        {
          title: 'Trust-building visual system',
          detail:
            'The design language was shaped to feel premium and credible for a client-facing consultancy business.',
        },
        {
          title: 'Business conversion structure',
          detail:
            'Service narratives, portfolio sections, and CTA placement were planned to support enquiry generation.',
        },
        {
          title: 'Professional web execution',
          detail:
            'Responsive sections, SEO-friendly layout, and consistent content hierarchy give the project commercial credibility.',
        },
      ],
    },
    {
      title: 'EduQuest - Gamified Learning Platform',
      image: '/project/EduQuest .png',
      description:
        'A gamified learning product with quiz flows, progress mechanics, role-based learning ideas, PWA thinking, and interactive frontend architecture.',
      impact:
        'Highlights product creativity with learning loops, gamification, responsive UX, and ambitious hackathon-style execution.',
      tech: ['React', 'TypeScript', 'Vite', 'React Three Fiber', 'PWA', 'Tailwind CSS'],
      status: 'Hackathon project',
      gradient: 'from-sky-500 to-cyan-600',
      liveUrl: 'https://edu-quest-beta.vercel.app/',
      deepDive: [
        {
          title: 'Gamification systems',
          detail:
            'XP, progression, and challenge loops were used to make the learning experience more motivating than a plain quiz flow.',
        },
        {
          title: 'Interactive learning UX',
          detail:
            'The product explores how responsive interaction and visual feedback can improve educational product engagement.',
        },
        {
          title: 'Rapid execution under pressure',
          detail:
            'It also shows the ability to ship ambitious frontend ideas quickly in a hackathon-style environment.',
        },
      ],
    },
    {
      title: 'Private Client Systems',
      image: null,
      description:
        'Confidential client projects across commerce, management dashboards, booking systems, realtime workflows, payment integrations, and business websites.',
      impact:
        'Shows ability to deliver under client constraints, handle NDA work, and translate business requirements into reliable software.',
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Socket.IO', 'Payments', 'Cloud Deployment'],
      status: 'NDA protected',
      gradient: 'from-indigo-500 to-violet-700',
      liveUrl: null,
      deepDive: [
        {
          title: 'Client-focused execution',
          detail:
            'These systems were delivered around business requirements, deadlines, and stakeholder constraints instead of public demo goals.',
        },
        {
          title: 'Broad problem coverage',
          detail:
            'Work includes dashboards, workflows, payments, realtime patterns, and role-based business tools across different domains.',
        },
        {
          title: 'Professional trust',
          detail:
            'Keeping parts of the portfolio under NDA also reflects real client responsibility and production discipline.',
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0b1220] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,#0b1220_0%,#111827_100%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Selected work</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Projects with visible engineering depth</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Each project is presented as a product system: what it solves, how it behaves, and what
            level of engineering ownership it demonstrates.
          </p>
        </motion.div>

        <div className="mb-8 rounded-[1.8rem] border border-cyan-300/20 bg-cyan-300/10 p-6 text-slate-100">
          <p className="text-sm leading-8">
            AasPas is the strongest proof of solo product ownership in this portfolio. It combines
            maps, payments, wallet logic, realtime booking state, native Android, worker operations,
            and business-side controls in one connected system.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const expanded = expandedProject === index;

            return (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-[1.8rem] border bg-white/[0.05] shadow-xl shadow-slate-950/22 backdrop-blur-sm transition-all duration-300 md:backdrop-blur-md transform-gpu will-change-transform ${
                  index === 0 ? 'border-cyan-300/35 lg:col-span-2' : 'border-white/10 hover:border-cyan-300/30'
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  {project.image ? (
                    <ProjectBannerVisual
                      alt={project.title}
                      image={project.image}
                      imageClassName={project.imageClassName}
                      imageContain={project.imageContain}
                      variant={project.visualVariant}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    {project.status}
                  </span>
                  {index === 0 ? (
                    <span className="absolute right-5 top-5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100 backdrop-blur-md">
                      {aaspasCaseStudy.heroMetrics[0].value}
                    </span>
                  ) : null}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-tight text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm leading-7 text-emerald-100">
                    {project.impact}
                  </div>

                  <button
                    onClick={() => setExpandedProject(expanded ? null : index)}
                    className="mt-4 text-sm font-bold text-cyan-200 transition-colors hover:text-white"
                  >
                    {expanded ? 'Hide system detail' : 'Open system detail'}
                  </button>

                  {expanded ? (
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {project.deepDive.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                          <h4 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{item.title}</h4>
                          <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, index === 0 ? 10 : 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.playStoreUrl ? (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
                      >
                        <PlayStoreIcon className="h-4 w-4" />
                        <span>Play Store</span>
                        <ExternalArrowIcon className="h-4 w-4" />
                      </a>
                    ) : null}

                    {!project.playStoreUrl && project.playStoreComingSoon ? (
                      <PlayStoreSoonButton label="Play Store" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5" />
                    ) : null}

                    {project.detailHref ? (
                      <Link
                        href={project.detailHref}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
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
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
                      >
                        <span>Visit live project</span>
                        <ExternalArrowIcon className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
