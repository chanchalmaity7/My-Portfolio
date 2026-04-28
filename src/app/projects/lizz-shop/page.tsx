import Image from 'next/image';
import Link from 'next/link';
import { DetailsIcon, ExternalArrowIcon } from '@/components/ActionIcons';
import { LIZZ_SHOP_LIVE_URL, lizzShopProjectCaseStudy } from '@/data/lizzShopProject';

export default function LizzShopProjectPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_20%,rgba(236,72,153,0.22),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(244,63,94,0.18),transparent_28%),linear-gradient(135deg,#07111f_0%,#1a1220_52%,#08111f_100%)] px-6 pb-20 pt-28">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <Link href="/projects" className="inline-flex rounded-full border border-white/15 bg-slate-950/45 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-md">
              Back to projects
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Retail commerce case study</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">{lizzShopProjectCaseStudy.title}</h1>
            <p className="mt-3 text-lg font-semibold text-emerald-200">{lizzShopProjectCaseStudy.subtitle}</p>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-200 sm:text-xl">{lizzShopProjectCaseStudy.longDescription}</p>

            <div className="mt-6 rounded-[1.75rem] border border-emerald-300/20 bg-emerald-300/10 p-5 text-sm leading-8 text-emerald-100 sm:text-base">
              {lizzShopProjectCaseStudy.soloNarrative}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LIZZ_SHOP_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                <span>Visit live website</span>
                <ExternalArrowIcon className="h-4 w-4" />
              </a>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition-transform hover:-translate-y-0.5">
                <DetailsIcon className="h-4 w-4" />
                <span>Explore other projects</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-fuchsia-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/80">
                <Image src={lizzShopProjectCaseStudy.assets.poster} alt="Lizz-Shop showcase" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1220] px-6 py-14">
        <div className="container mx-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lizzShopProjectCaseStudy.heroMetrics.map((metric) => (
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">System proof</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What gives the storefront real product depth</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {lizzShopProjectCaseStudy.homeProofBlocks.map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-6 py-18">
        <div className="container mx-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lizzShopProjectCaseStudy.keySystems.map((system) => (
            <article key={system.title} className="rounded-lg border border-white/10 bg-white/[0.05] p-6">
              <h3 className="text-xl font-black text-white">{system.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{system.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#07111f] px-6 py-18">
        <div className="container mx-auto grid gap-4 md:grid-cols-2">
          {lizzShopProjectCaseStudy.technicalArchitecture.map((group) => (
            <article key={group.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-6">
              <h3 className="text-xl font-black text-white">{group.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1220] px-6 py-16">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Ownership</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What I personally handled</h2>
            <div className="mt-8 grid gap-3">
              {lizzShopProjectCaseStudy.soloOwnership.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.05] p-4">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span className="text-sm leading-7 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Technology index</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Core technologies used</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {lizzShopProjectCaseStudy.technologyList.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-slate-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
