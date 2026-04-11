import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { FeatureGrid } from "@/components/FeatureGrid";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { ResearchCarousel } from "@/components/ResearchCarousel";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Gayatri</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a <Highlight>quantitative researcher</Highlight> studying macro-financial systems,{" "}
        stochastic modeling, and market microstructure at Columbia University.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I work at the intersection of{" "}
        <Highlight>econometrics, financial modeling, and system design</Highlight> — building frameworks where the math has to be right and the system actually works.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Explore My Research
      </Heading>
      <ResearchCarousel />
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <FeatureGrid />
      <TechStack />
    </Container>
  );
}
