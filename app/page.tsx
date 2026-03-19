"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      a: "Ages 13 through 18, from anywhere in the world can play Hack Club: The Game. This event is open to everyone!",
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

  const prizes = [
    { 
      title: "3D Printers", 
      desc: "For standout projects that push the limits.", 
      image: "http://googleusercontent.com/image_collection/image_retrieval/10077852107166114510" 
    },
    { 
      title: "Microcontrollers", 
      desc: "Raspberry Pis, ESP32s, and Arduinos.", 
      image: "http://googleusercontent.com/image_collection/image_retrieval/11309652824616511047" 
    },
    { 
      title: "Robotics Kits", 
      desc: "Servos, motors, and structural parts.", 
      image: "http://googleusercontent.com/image_collection/image_retrieval/5877186618957861715" 
    },
    { 
      title: "Sensor Packs", 
      desc: "Lidar, cameras, temp & humidity modules.", 
      image: "http://googleusercontent.com/image_collection/image_retrieval/2255118021567372957" 
    },
    { 
      title: "Hack Club Merch", 
      desc: "Exclusive stickers and apparel.", 
      image: "http://googleusercontent.com/image_collection/image_retrieval/3186985389220768444" 
    },
  ];

  const repeatedPrizes = [...prizes, ...prizes];

  return (
    <main className="relative min-h-screen bg-[#020617] text-slate-50 selection:bg-[#ec3750] selection:text-white">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="fixed top-0 left-0 z-50">
        <Image
          src="/flag-orpheus-top.png"
          alt="Hack Club Flag"
          width={250}
          height={100}
          className="w-40 md:w-56 drop-shadow-2xl"
          priority
        />
      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ec3750]/10 via-transparent to-transparent blur-2xl"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl relative"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mb-4 inline-block rounded-full border border-[#ec3750]/50 bg-[#ec3750]/10 px-4 py-1.5 text-sm font-medium text-[#ec3750] backdrop-blur-md"
          >
            A Hack Club YSWS Event
          </motion.div>
          
          <h1 className="mb-6 text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl">
            HARD<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec3750] to-[#ff7b54]">RUSH</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-400 sm:text-2xl font-light leading-relaxed">
            Build a small robot that solves a real-life problem. Convert your hours into <strong className="text-white font-bold tracking-wide">CELLS</strong>. We ship you the hardware.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-lg flex-col gap-4 sm:flex-row relative z-20">
            <div className="relative flex-1 group">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#ec3750] to-purple-600 opacity-20 blur transition group-hover:opacity-40"></div>
              <input
                type="email"
                placeholder="Enter your email to get started"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative w-full rounded-lg border border-slate-800 bg-slate-900/80 px-5 py-4 text-white placeholder-slate-500 backdrop-blur-xl focus:border-[#ec3750] focus:outline-none focus:ring-1 focus:ring-[#ec3750]"
              />
            </div>
            <button
              type="submit"
              className="relative rounded-lg bg-[#ec3750] px-8 py-4 font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(236,55,80,0.4)] transition-all hover:bg-[#d42d43] hover:shadow-[0_0_30px_rgba(236,55,80,0.6)] hover:-translate-y-1"
            >
              Get Started
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-2 text-sm font-semibold tracking-widest text-slate-500 uppercase"
        >
          <span>Initiate Sequence</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 py-32 px-6 bg-slate-950/80 backdrop-blur-xl border-y border-slate-900 shadow-2xl">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-32 text-center"
          >
            <h2 className="text-5xl font-black tracking-tight mb-6">MISSION DIRECTIVES</h2>
            <div className="h-1 w-24 bg-[#ec3750] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400">Your path to getting hardware shipped to your door.</p>
          </motion.div>

          <div className="flex flex-col gap-32">
            {[
              { title: "Identify a Problem", desc: "Look around your room or daily routine. What's annoying? What needs automation? Think of a small device that fixes it." },
              { title: "Accumulate Cells", desc: "Start building and documenting. Every hour of focused engineering earns you Cells. Track your progress." },
              { title: "Ship & Claim", desc: "Push your code to GitHub with a pristine, human-written README. Include a video of your prototype. We review it, we ship your prize." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex w-full ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className="relative w-full md:w-3/5 rounded-3xl border border-slate-800 bg-slate-900/60 p-10 backdrop-blur-md shadow-2xl hover:border-[#ec3750]/40 transition-colors duration-500 overflow-hidden group">
                  <div className="absolute -right-10 -top-10 text-[12rem] font-black leading-none text-slate-800/20 z-0 select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-[#ec3750]/10">
                    0{i + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold mb-4 text-white group-hover:text-[#ec3750] transition-colors">{step.title}</h3>
                    <p className="text-xl text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-40 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black tracking-tight mb-4">THE LOOT</h2>
            <div className="h-1 w-24 bg-[#ec3750] mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400">Exchange your Cells for real-world engineering gear.</p>
          </motion.div>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20"></div>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-8 w-max px-4 hover:[animation-play-state:paused]"
          >
            {repeatedPrizes.map((prize, i) => (
              <div 
                key={i} 
                className="relative w-80 shrink-0 rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden group/card hover:border-[#ec3750] transition-colors"
              >
                <div className="h-56 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#ec3750]/20 mix-blend-overlay z-10 group-hover/card:opacity-0 transition-opacity"></div>
                  <img 
                    src={prize.image} 
                    alt={prize.title} 
                    className="w-full h-full object-cover grayscale-[50%] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
                  />
                </div>
                <div className="p-6 relative z-20 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
                  <h3 className="mb-2 text-2xl font-bold text-white group-hover/card:text-[#ec3750] transition-colors">{prize.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{prize.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-6 bg-slate-950/80 backdrop-blur-3xl border-y border-slate-900">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black tracking-tight mb-6">INTEL (FAQ)</h2>
              <div className="h-1 w-24 bg-[#ec3750] mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-colors hover:border-slate-700"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-xl font-bold text-white pr-4">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#ec3750] flex-shrink-0"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-400 leading-relaxed text-lg">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 bg-[#020617] py-20 px-6 text-slate-400">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-16 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-6 text-3xl font-bold text-white">A project by Hack Club</h2>
              <p className="mb-6 leading-relaxed">
                Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. We believe you learn best by building so we&apos;re creating community and providing grants so you can make awesome projects. In the past few years, we&apos;ve partnered with GitHub to run Summer of Making, hosted the world&apos;s longest hackathon on land, and ran Canada&apos;s largest high school hackathon.
              </p>
              <p className="font-bold text-white text-lg">
                At Hack Club, students aren&apos;t just learning, they&apos;re shipping.
              </p>
            </div>
            
            <div className="flex gap-16">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-white tracking-wide">Hack Club</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/philosophy" className="hover:text-[#ec3750] transition-colors">Philosophy</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/team" className="hover:text-[#ec3750] transition-colors">Our Team &amp; Board</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/branding" className="hover:text-[#ec3750] transition-colors">Branding</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/donate" className="hover:text-[#ec3750] transition-colors">Donate</a>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-white tracking-wide">Resources</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://events.hackclub.com" className="hover:text-[#ec3750] transition-colors">Community Events</a>
                <a target="_blank" rel="noopener noreferrer" href="https://jams.hackclub.com" className="hover:text-[#ec3750] transition-colors">Jams</a>
                <a target="_blank" rel="noopener noreferrer" href="https://workshops.hackclub.com" className="hover:text-[#ec3750] transition-colors">Workshops</a>
                <a target="_blank" rel="noopener noreferrer" href="https://hackclub.com/conduct" className="hover:text-[#ec3750] transition-colors">Code of Conduct</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}