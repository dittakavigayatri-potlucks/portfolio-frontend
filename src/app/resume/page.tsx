import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { EducationHistory } from "@/components/Education";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import { LeadershipHistory } from "@/components/Leadership";
import { CocurricularHistory } from "@/components/CoCurricular";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl">
        I build at the intersection of{" "}
        <Highlight>quantitative research</Highlight> and applied economic
        analysis — from causal inference to systematic financial modeling.
      </Paragraph>
      <WorkHistory />
      <span className="text-4xl">🎓</span>
      <Heading className="font-black">Education</Heading>
      <Paragraph className="max-w-xl">
        Grounded in <Highlight>mathematics and economics</Highlight>, with
        graduate training in{" "}
        <Highlight>quantitative methods</Highlight> at Columbia University.
      </Paragraph>
      <EducationHistory />
      <span className="text-4xl">🏆</span>
      <Heading className="font-black">Leadership</Heading>
      <Paragraph className="max-w-xl">
        From founding a{" "}
        <Highlight>public health analytics initiative</Highlight> to
        contributing to academic research communities.
      </Paragraph>
      <LeadershipHistory />
      <span className="text-4xl">🚩</span>
      <Heading className="font-black">Co-Curriculars</Heading>
      <Paragraph className="max-w-xl mt-4">
        Research, conferences, and community engagement beyond the{" "}
        <Highlight>classroom</Highlight>.
      </Paragraph>
      <CocurricularHistory />
    </Container>
  );
}
