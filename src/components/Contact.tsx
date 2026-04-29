'use client';

import { motion } from 'framer-motion';

const contactOptions = [
  {
    title: 'Email',
    value: 'maitychanchal7@gmail.com',
    href: 'mailto:maitychanchal7@gmail.com',
  },
  {
    title: 'WhatsApp',
    value: '+91 99329 15707',
    href: 'https://wa.me/919932915707',
  },
  {
    title: 'Location',
    value: 'Remote-ready from India',
    href: null,
  },
  {
    title: 'Focus',
    value: 'Full-stack, React Native, realtime systems',
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(16,185,129,0.13),transparent_32%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">Contact</p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Let us build something reliable.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I am open to remote roles, freelance work, and interviews where I can discuss real product engineering:
                mobile apps, backend systems, payments, maps, realtime infrastructure, and native Android behavior.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:maitychanchal7@gmail.com"
                  className="inline-flex justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Send email
                </a>
                <a
                  href="https://wa.me/919932915707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {contactOptions.map((option) => {
                const content = (
                  <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 transition-colors hover:border-cyan-300/30">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{option.title}</div>
                    <div className="mt-2 font-bold text-white">{option.value}</div>
                  </div>
                );

                return option.href ? (
                  <a key={option.title} href={option.href} target={option.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={option.title}>{content}</div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
