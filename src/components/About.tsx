"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-4xl">
      <div className="flex flex-col md:flex-row gap-12 items-start my-10">
        {/* Text content */}
        <div className="flex-1">
          <Paragraph className="mt-4">
            Hey there! I&apos;m Gayatri Dittakavi, a graduate student in Quantitative Methods in the Social Sciences (QMSS) at Columbia University. My work sits at the intersection of macro-financial systems, stochastic modeling, and quantitative research — I approach markets as stochastic systems evolving over time, where prices, liquidity, and risk are shaped by both observable signals and latent structural dynamics. My modeling perspective is grounded in probability spaces, filtrations, and time-evolving information sets, with a persistent focus on how agents operate under incomplete and delayed information.
          </Paragraph>
          <Paragraph className="mt-4">
            I work extensively with time-series models (ARIMA, VAR, regime-switching processes), volatility modeling (ARCH/GARCH), and signal extraction frameworks across macro and cross-asset datasets. My approach combines econometric rigor with system-level intuition — focusing not just on prediction, but on identifying the structural drivers of market behavior. A key area of my recent work is in crypto and DeFi lending systems, where I study liquidation mechanics, oracle latency, and endogenous failure dynamics. I frame liquidation as a stochastic timing problem rather than a price-threshold problem, formalizing a phase transition condition: bad debt emerges when price evolution outruns system update frequency.
          </Paragraph>
          <Paragraph className="mt-4">
            Before Columbia, I completed a B.Sc. (Hons) in Mathematics with a Minor in Economics from Lady Shri Ram College, University of Delhi — building a strong foundation in real analysis, probability theory, and statistical inference. I&apos;ve since applied those tools in research settings at Columbia&apos;s ISERP, where I worked on quasi-Poisson regression and difference-in-differences designs for causal inference, and at NITI Aayog, where I redesigned fiscal performance rankings using Wroclaw taxonomy and contributed to the Economic Survey 2024.
          </Paragraph>
          <Paragraph className="mt-4">
            On the research side, I&apos;ve published work spanning commute distance and residential characteristics, limits on women&apos;s commute in Indian cities, urban economic optimization, and fair division problems (the Three Person–Two Cuts problem). I&apos;m drawn to applied problems where mathematical structure, market microstructure, and system design intersect — particularly where small parameter changes can lead to regime shifts or nonlinear outcomes.
          </Paragraph>
          <Paragraph className="mt-4">
            Outside of research and coursework, I enjoy long walks around the city, reading across economics and fiction, and following markets with the same obsessive attention I bring to model diagnostics. I&apos;m always happy to talk about stochastic processes, DeFi risk, or why the efficient frontier looks the way it does under real-world constraints.
          </Paragraph>
          <Paragraph className="mt-4">
            Welcome to my corner of the web. Here you&apos;ll find my projects, research, and a window into what I&apos;m thinking about. Whether you&apos;re a fellow researcher, a potential collaborator, or just curious — feel free to reach out.
          </Paragraph>
        </div>

        {/* Single photo on the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:w-64 w-full flex-shrink-0"
        >
          <Image
            src="/images/GayatriPhoto3.png"
            width={256}
            height={320}
            alt="Gayatri Dittakavi"
            className="rounded-2xl object-cover object-top shadow-xl w-full h-72 md:h-80"
          />
        </motion.div>
      </div>
    </div>
  );
}
