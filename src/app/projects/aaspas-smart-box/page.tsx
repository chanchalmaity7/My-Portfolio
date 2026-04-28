import Image from 'next/image';
import Link from 'next/link';
import PlayStoreSoonButton from '@/components/PlayStoreSoonButton';
import { DetailsIcon } from '@/components/ActionIcons';
import { aaspasSmartBoxCaseStudy } from '@/data/aaspasSmartBox';

const architectureNodes = [
  'ESP32 device',
  'Cloud backend',
  'Mobile app',
  'Web dashboard',
];

export default function AasPasSmartBoxProjectPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(16,185,129,0.16),transparent_28%),linear-gradient(135deg,#07111f_0%,#101827_52%,#08111f_100%)] px-6 pb-20 pt-28">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/15 bg-slate-950/45 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"
            >
              Back to projects
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
              Connected IoT case study
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {aaspasSmartBoxCaseStudy.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-emerald-200">{aaspasSmartBoxCaseStudy.subtitle}</p>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-200 sm:text-xl">
              {aaspasSmartBoxCaseStudy.longDescription}
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-emerald-300/20 bg-emerald-300/10 p-5 text-sm leading-8 text-emerald-100 sm:text-base">
              {aaspasSmartBoxCaseStudy.soloNarrative}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <PlayStoreSoonButton label="Play Store" soonLabel="Coming soon on Play Store" />
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-transform hover:-translate-y-0.5"
              >
                <DetailsIcon className="h-4 w-4" />
                <span>Explore other projects</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-4">
                  <div className="relative mx-auto aspect-[9/19] w-full max-w-[240px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                    <Image
                      src={aaspasSmartBoxCaseStudy.assets.heroPreview}
                      alt="AasPas Smart Box mobile control screen"
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Live relay control, schedule automation, energy insights, and device health are
                    all surfaced through the mobile product instead of being hidden behind firmware-only tooling.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    System topology
                  </p>
                  <div className="mt-5 grid gap-3">
                    {architectureNodes.map((node, index) => (
                      <div key={node} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="text-sm font-black uppercase tracking-[0.18em] text-white">{node}</div>
                        <div className="mt-2 text-sm leading-6 text-slate-300">
                          {index === 0
                            ? 'Device identity, WiFi setup, relay control, heartbeat, and fallback communication.'
                            : index === 1
                              ? 'Auth, device ownership, automation, energy logic, presence, and persistence.'
                              : index === 2
                                ? 'Handheld control surface for relay actions, schedules, timers, and energy views.'
                                : 'Browser dashboard for device management, status monitoring, and automation setup.'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Mobile walkthrough</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Real app screens that prove product depth</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              These screens show that Smart Box is not a concept-only IoT demo. It already has real
              onboarding, connected-device overview, relay control, schedule setup, and energy analytics surfaces.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aaspasSmartBoxCaseStudy.showcaseGallery.map((shot) => (
              <article key={shot.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-4">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950">
                  <div className="relative aspect-[9/19] w-full">
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-black text-white">{shot.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{shot.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1220] px-6 py-14">
        <div className="container mx-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aaspasSmartBoxCaseStudy.heroMetrics.map((metric) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">System map</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Major product systems</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Smart Box is not only a remote switch. It is a hardware-to-cloud product where device
              identity, ownership, relay automation, analytics, and recovery all matter at once.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasSmartBoxCaseStudy.keySystems.map((system) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Platform surfaces</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Four connected product surfaces</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This project spans hardware, cloud, mobile, and web. That cross-surface complexity is
              exactly what makes it strong portfolio material.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {aaspasSmartBoxCaseStudy.platformSurfaces.map((surface) => (
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
              The stack spans embedded hardware behavior, authenticated backend APIs, realtime
              transport, web control surfaces, mobile UX, and analytical energy logic.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {aaspasSmartBoxCaseStudy.technicalArchitecture.map((group) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Automation systems</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Relay automation and scheduling engine</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Automation depth is one of the strongest parts of this product because timer and
              schedule logic work independently per relay instead of being a single global switch.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasSmartBoxCaseStudy.automationSystems.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Energy intelligence</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Usage analytics and cost visibility</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The energy layer gives the product more depth than a simple home switch because users
              can estimate runtime, units, and cost per relay over time.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasSmartBoxCaseStudy.energySystems.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Reliability</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Offline detection, power loss, and recovery</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Real homes have power cuts and unstable connectivity. The resilience logic in this
              system is what makes it feel more production-grade than a hobby-only IoT build.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aaspasSmartBoxCaseStudy.resilienceSystems.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Security and ownership</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Control, auth, and device trust</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Since this is a cloud-controlled device system, ownership validation and control
              security are central to the product, not optional extras.
            </p>

            <div className="mt-8 grid gap-3">
              {aaspasSmartBoxCaseStudy.securitySystems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Ownership</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What I personally handled</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This is another project where the value comes from system breadth: device logic,
              backend automation, web, mobile, and reliability decisions all had to come together.
            </p>

            <div className="mt-8 grid gap-3">
              {aaspasSmartBoxCaseStudy.soloOwnership.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
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
            {aaspasSmartBoxCaseStudy.technologyList.map((tech) => (
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
