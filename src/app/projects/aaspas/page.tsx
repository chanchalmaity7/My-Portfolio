import Image from 'next/image';
import Link from 'next/link';
import { DetailsIcon, ExternalArrowIcon, PlayStoreIcon } from '@/components/ActionIcons';
import { AASPAS_PLAY_STORE_URL, aaspasCaseStudy } from '@/data/aaspas';

export default function AasPasProjectPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={aaspasCaseStudy.assets.heroBanner}
            alt="AasPas mobile product showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.32)_0%,rgba(7,17,31,0.76)_35%,rgba(7,17,31,0.97)_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pb-20 pt-28 sm:pb-24 sm:pt-32">
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-white/15 bg-slate-950/45 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"
          >
            Back to projects
          </Link>

          <div className="mt-10 max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Flagship case study
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {aaspasCaseStudy.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-emerald-200">{aaspasCaseStudy.subtitle}</p>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-200 sm:text-xl">
              {aaspasCaseStudy.longDescription}
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-emerald-300/20 bg-emerald-300/10 p-5 text-sm leading-8 text-emerald-100 sm:text-base">
              {aaspasCaseStudy.soloNarrative}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={AASPAS_PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                <PlayStoreIcon className="h-4 w-4" />
                <span>Open on Play Store</span>
                <ExternalArrowIcon className="h-4 w-4" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-transform hover:-translate-y-0.5"
              >
                <DetailsIcon className="h-4 w-4" />
                <span>Explore other projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1220] px-6 py-14">
        <div className="container mx-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aaspasCaseStudy.heroMetrics.map((metric) => (
            <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
              <div className="text-2xl font-black text-white">{metric.value}</div>
              <div className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Visual showcase</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Designed product surfaces</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              These are real production screenshots from the customer and worker apps. I placed
              them here so the case study shows actual product depth across discovery, package
              selection, AI assistance, tracking, payments, wallet visibility, and earnings
              correctness instead of only marketing visuals.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasCaseStudy.showcaseGallery.map((shot) => (
              <article
                key={shot.title}
                className={`overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.05] ${
                  shot.wide ? 'md:col-span-2 xl:col-span-3' : ''
                }`}
              >
                <div className={`relative ${shot.wide ? 'aspect-[16/7]' : 'aspect-[4/5]'}`}>
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    sizes={shot.wide ? '(min-width: 1280px) 70vw, 100vw' : '(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw'}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="text-xl font-black text-white">{shot.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-200">{shot.caption}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">System map</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Major product systems</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              AasPas is wide in scope because it connects discovery, booking, realtime state,
              worker motion, money movement, operational support, and post-service trust inside one
              mobile product. The engineering challenge was not one feature. It was making all of
              these subsystems behave consistently together.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasCaseStudy.keySystems.map((system) => (
              <article key={system.title} className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-xl font-black text-white">{system.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{system.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Role design</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Three connected product surfaces</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This product is deeper than a single app because it has separate responsibilities for
              customers, workers, and operations. There is also a shared realtime platform layer
              keeping those surfaces synchronized.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {aaspasCaseStudy.productSurfaces.map((surface) => (
              <article key={surface.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{surface.title}</h3>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                    {surface.tone}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{surface.summary}</p>
                <div className="mt-5 grid gap-3">
                  {surface.points.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Technical architecture</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Technology footprint</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The stack spans mobile frontend, backend APIs, realtime event routing, cache-backed
              recovery, mapping, external payment and communication services, and native Android
              integration. Each layer has a clear job rather than acting as accidental complexity.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {aaspasCaseStudy.technicalArchitecture.map((group) => (
              <article key={group.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-xl font-black text-white">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{group.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Money systems</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Marketplace payments, wallet, and earnings</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This product needed more than a simple payment button. It required marketplace-style
              money flow: advance fee, remaining balance, worker collection, earnings, commission,
              and backend-owned correctness for what was already paid versus still pending.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasCaseStudy.moneySystems.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Location intelligence</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Tracking, geo-location, and route behavior</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Live tracking had to feel stable and believable in real use. That meant worker
              discovery by radius, latest-location storage, polyline reuse, controlled rerouting,
              and customer-facing map state that survives app restarts or reconnect events.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasCaseStudy.trackingSystems.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Native communication</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Calling, notifications, and Android behavior</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Calling was implemented as a native-feeling system instead of a lightweight modal. The
              experience had to behave correctly from notifications, lock screen, background state,
              and in-progress multitasking while keeping caller and receiver flows synchronized.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasCaseStudy.communicationSystems.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Operations layer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Admin and support control layer</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The product also needed the business-side layer that helps the marketplace run after
              launch: notifications, service monitoring, support workflows, visibility into money
              movement, and rollout discipline for app updates.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasCaseStudy.adminSystems.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Flagship capabilities</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What makes this product unusually deep</h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aaspasCaseStudy.standoutFeatures.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Ownership and reliability</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What I personally handled</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This is the part that matters in interviews: the product was not only designed. It
              was also implemented, debugged, and production-shaped across all of these layers by a
              single developer with direct responsibility for both features and correctness.
            </p>

            <div className="mt-8 grid gap-3">
              {aaspasCaseStudy.soloOwnership.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-2xl font-black text-white">Production-minded safeguards</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">
              This page intentionally explains product scale without exposing sensitive secrets,
              internal pricing rules, private keys, raw customer data, or exploitable operational
              details. The goal is to show judgment, depth, and reliability in a safe public format.
            </p>

            <div className="mt-6 grid gap-3">
              {aaspasCaseStudy.reliabilityNotes.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative h-72 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/aaspas-showcase/app-screens/chatbot-ai.png"
                alt="AasPas AI concierge showcase"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain bg-slate-950/45 p-2"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative h-72 overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="/aaspas-showcase/app-screens/track-worker.png"
                  alt="AasPas live tracking showcase"
                  fill
                  sizes="(min-width: 1024px) 19vw, 100vw"
                  className="object-contain bg-slate-950/45 p-2"
                />
              </div>
              <div className="relative h-72 overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="/aaspas-showcase/app-screens/payment-flow.jpg"
                  alt="AasPas payment showcase"
                  fill
                  sizes="(min-width: 1024px) 19vw, 100vw"
                  className="object-contain bg-slate-950/45 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1220] px-6 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Technology index</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Core technologies used</h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {aaspasCaseStudy.technologyList.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
