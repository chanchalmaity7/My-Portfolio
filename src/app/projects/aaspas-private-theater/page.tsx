import Link from 'next/link';
import Image from 'next/image';
import { DetailsIcon, ExternalArrowIcon } from '@/components/ActionIcons';
import { PRIVATE_THEATER_LIVE_URL, streamingProjectCaseStudy } from '@/data/streamingProject';

const roomFlowNodes = ['Create room', 'Join link', 'Synced player', 'Voice + chat'];

export default function AasPasPrivateTheaterProjectPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(229,9,20,0.22),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(124,58,237,0.18),transparent_28%),linear-gradient(135deg,#07111f_0%,#16131f_48%,#080d18_100%)] px-6 pb-20 pt-28">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <Link
              href="/projects"
              className="inline-flex rounded-full border border-white/15 bg-slate-950/45 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md"
            >
              Back to projects
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.26em] text-red-200">
              Realtime media case study
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {streamingProjectCaseStudy.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-fuchsia-200">
              {streamingProjectCaseStudy.subtitle}
            </p>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-200 sm:text-xl">
              {streamingProjectCaseStudy.longDescription}
            </p>

            <div className="mt-6 rounded-[1.75rem] border border-fuchsia-300/20 bg-fuchsia-300/10 p-5 text-sm leading-8 text-fuchsia-100 sm:text-base">
              {streamingProjectCaseStudy.soloNarrative}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PRIVATE_THEATER_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                <span>Visit live website</span>
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

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-red-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/80">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={streamingProjectCaseStudy.assets.poster}
                    alt="AasPas Private Theater poster"
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-slate-950/50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-200">
                  Room topology
                </p>
                <div className="mt-5 grid gap-3">
                  {roomFlowNodes.map((node, index) => (
                    <div key={node} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-sm font-black uppercase tracking-[0.18em] text-white">{node}</div>
                      <div className="mt-2 text-sm leading-6 text-slate-300">
                        {index === 0
                          ? 'Paste a supported link, validate the source, bind host identity, and generate a private room.'
                          : index === 1
                            ? 'Guests enter quickly through a shared link and recover their lightweight room identity on return.'
                            : index === 2
                              ? 'Playback state stays synchronized through host authority, versioned snapshots, and drift correction.'
                              : 'WebRTC voice, live chat, and emoji reactions turn passive watching into a real collaborative room.'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1220] px-6 py-14">
        <div className="container mx-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {streamingProjectCaseStudy.heroMetrics.map((metric) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">System map</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Major product systems</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This project is strong portfolio material because it combines media playback,
              realtime authority rules, collaboration behavior, and persistence instead of only
              rendering a video player on screen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {streamingProjectCaseStudy.keySystems.map((system) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Product surfaces</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Four connected experience surfaces</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The project spans room creation, collaborative viewing, voice and chat interaction,
              and backend lifecycle control. That breadth is exactly what makes it look like a
              real product instead of a single screen demo.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {streamingProjectCaseStudy.productSurfaces.map((surface) => (
              <article key={surface.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">{surface.title}</h3>
                  <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-100">
                    {surface.tone}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{surface.summary}</p>
                <div className="mt-5 grid gap-3">
                  {surface.points.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-300" />
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Technical architecture</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Technology footprint</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The stack spans media players, realtime room sync, Mongo persistence, WebRTC voice,
              compatibility checks, and a responsive client experience that behaves well under
              real multi-user usage.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {streamingProjectCaseStudy.technicalArchitecture.map((group) => (
              <article key={group.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-xl font-black text-white">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{group.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-3 py-1.5 text-xs font-semibold text-fuchsia-100"
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Playback compatibility</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Source support and playback orchestration</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              One of the deepest parts of the system is the way it treats media sources as a real
              product problem instead of assuming every URL behaves like a perfect MP4.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {streamingProjectCaseStudy.sourceSystems.map((item) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Realtime behavior</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Sync rules, recovery, and room authority</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Realtime correctness matters here. The room needs a clear source of truth, drift
              correction, and recovery behavior when clients buffer, refresh, or re-enter.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {streamingProjectCaseStudy.realtimeSystems.map((item) => (
              <article key={item} className="rounded-lg border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm leading-7 text-slate-200">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-6 py-18">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Collaboration layer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Voice, chat, and shared-room feel</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The product becomes memorable because watching is not the only action. Users can
              talk, react, and stay socially connected inside the same room surface.
            </p>

            <div className="mt-8 grid gap-3">
              {streamingProjectCaseStudy.collaborationSystems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Ownership</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What I personally handled</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              This project matters in a portfolio because it proves I can think across media,
              realtime sync, communication, persistence, and product UX without needing a big team.
            </p>

            <div className="mt-8 grid gap-3">
              {streamingProjectCaseStudy.soloOwnership.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#07111f] px-6 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-200">Technology index</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Core technologies used</h2>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {streamingProjectCaseStudy.technologyList.map((tech) => (
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
