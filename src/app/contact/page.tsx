import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Gayatri Dittakavi",
  description:
    "Gayatri Dittakavi is a Quantitative Researcher focused on Macro-financial systems, Econometrics, and Stochastic Modeling. She works at the intersection of markets, policy, and data-driven decision making.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        If you're interested in quantitative research, macro-financial analysis,
        or collaborations in Econometrics, Systematic Strategies, or DeFi systems,
        feel free to reach out. I’m always open to discussing ideas, research, or opportunities.{" "}
      </Paragraph>
      <Contact />
    </Container>
  );
}
