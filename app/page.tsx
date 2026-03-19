"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const faqs = [
    {
      q: "How's the event gonna look like?",
      a: "Build a small robot or smart device that solves a real-life problem. To ship your project, publish the source code on GitHub with a clear README written without AI, and include a video presentation link. Once you ship your project, we ship your prize.",
    },
    {
      q: "Who can participate?",
      a: "Ages 13 through 18, from anywhere in the world can play Hack Club: The Game.",
    },
    {
      q: "How do I sign up?",
      a: "Just enter your email at the top of this page to get started!",
    },
    {
      q: "Is this free?",
      a: "Yes! This program is entirely funded by Hack Club, a US-based 501(c)(3) charity helping teens learn how to design and code, with sponsors such as GitHub.",
    },
    {
      q: "What can I make?",
      a: "Build a small robot or smart device that solves a real-life problem. It could water your plants, remind you about tasks, control lights, or automate something in your room.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-10 z-50">
        <Image
          src="/flag-orpheus-top.png"
          alt="Hack Club Flag"
          width={250}
          height={100}
          className="w-40 md:w-56"
          priority
        />
      </div>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Turn your time into <span className="text-[#ec3750]">hardware.</span>
          </h1>
          <p className="mb-10 text-lg text-slate-400 sm:text-2xl">
            Build a small robot that solves a real-life problem. Work hard, earn <strong className="text-white">Cells</strong>, and we&apos;ll ship you the gear to make it real.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email to get started"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-md border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-[#ec3750] focus:outline-none focus:ring-1 focus:ring-[#ec3750]"
            />
            <button
              type="submit"
              className="rounded-md bg-[#ec3750] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#d42d43]"
            >
              Get Started
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-slate-500"
        >
          Scroll to discover
          <br />
          ↓
        </motion.div>
      </section>

      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <h2 className="mb-6 text-4xl font-bold">How it works</h2>
            <p className="text-xl text-slate-400">
              Only 7 out of 200 will make it. You build. You document. We ship.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              { title: "1. Find a Problem", desc: "Look around your room. What annoys you? Automate it." },
              { title: "2. Earn Cells", desc: "Every hour of work converts to Cells. Use them to get your parts." },
              { title: "3. Ship It", desc: "Write a clean README, record a video, and get your prize." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-sm"
              >
                <h3 className="mb-4 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 text-center text-4xl font-bold">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold text-[#ec3750]">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 py-16 px-6 text-slate-400">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-2xl font-bold text-white">A project by Hack Club</h2>
              <p className="mb-4">
                Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. We believe you learn best by building so we&apos;re creating community and providing grants so you can make awesome projects. In the past few years, we&apos;ve partnered with GitHub to run Summer of Making, hosted the world&apos;s longest hackathon on land, and ran Canada&apos;s largest high school hackathon.
              </p>
              <p className="font-semibold text-white">
                At Hack Club, students aren&apos;t just learning, they&apos;re shipping.
              </p>
            </div>
            
            <div className="flex gap-12">
              <div className="flex flex-col space-y-3">
                <h3 className="text-lg font-bold text-white">Hack Club</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/philosophy" className="hover:text-[#ec3750] transition-colors">Philosophy</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/team" className="hover:text-[#ec3750] transition-colors">Our Team &amp; Board</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/branding" className="hover:text-[#ec3750] transition-colors">Branding</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/donate" className="hover:text-[#ec3750] transition-colors">Donate</a>
              </div>
              <div className="flex flex-col space-y-3">
                <h3 className="text-lg font-bold text-white">Resources</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://events.hackclub.com" className="hover:text-[#ec3750] transition-colors">Community Events</a>
                <a target="_blank" rel="noopener noreferrer" href="https://jams.hackclub.com" className="hover:text-[#ec3750] transition-colors">Jams</a>
                <a target="_blank" rel="noopener noreferrer" href="https://workshops.hackclub.com" className="hover:text-[#ec3750] transition-colors">Workshops</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/conduct" className="hover:text-[#ec3750] transition-colors">Code of Conduct</a>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl border border-slate-800" data-controller="responsive-image-map">
            <img 
              className="w-full object-cover" 
              alt="Hack Club Photo" 
              loading="lazy" 
              useMap="#footer-credits-map" 
              data-responsive-image-map-target="image" 
              src="https://flavortown.hackclub.com/assets/landing/footer/footer-image-3b0eef26.webp" 
            />
            <map name="footer-credits-map" data-responsive-image-map-target="map">
              <area target="_blank" alt="" title="" href="https://github.com/ayessaaa" coords="122,342,353,415" shape="rect" />
              <area target="_blank" alt="" title="" href="https://cskartikey.dev" coords="437,345,639,426" shape="rect" />
              <area target="_blank" alt="" title="" href="http://fireentity.space" coords="716,327,929,393" shape="rect" />
              <area target="_blank" alt="" title="" href="https://github.com/3kh0" coords="1002,337,1164,394" shape="rect" />
              <area target="_blank" alt="" title="" href="https://me.slevel.xyz" coords="130,463,336,529" shape="rect" />
              <area target="_blank" alt="" title="" href="https://transcental.dev" coords="426,458,660,525" shape="rect" />
              <area target="_blank" alt="" title="" href="https://cyteon.dev" coords="708,448,879,525" shape="rect" />
              <area target="_blank" alt="" title="" href="https://github.com/dhamariT" coords="911,458,1016,507" shape="rect" />
              <area target="_blank" alt="" title="" href="https://github.com/EDRipper" coords="1035,466,1221,529" shape="rect" />
              <area target="_blank" alt="" title="" href="https://saahild.com/?ref=flavortown-homepage" coords="194,564,421,631" shape="rect" />
              <area target="_blank" alt="" title="" href="https://github.com/deoshreyas" coords="504,547,685,645" shape="rect" />
              <area target="_blank" alt="" title="" href="http://jmeow.net/" coords="743,583,932,642" shape="rect" />
              <area target="_blank" alt="" title="" href="https://r58playz.dev/" coords="986,577,1189,634" shape="rect" />
              <area target="_blank" alt="" title="" href="https://lilia.rocks" coords="110,661,294,731" shape="rect" />
              <area target="_blank" alt="" title="" href="https://instagram.com/e_lee_za.a" coords="385,682,579,779" shape="rect" />
              <area target="_blank" alt="" title="" href="https://ascpixi.dev" coords="142,782,312,843" shape="rect" />
            </map>
          </div>
        </div>
      </footer>
    </main>
  );
}