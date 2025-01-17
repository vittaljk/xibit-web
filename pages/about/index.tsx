import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import * as Atoms from "@/components/Atoms";
import { aboutUsCarouselItems } from "@/data";

export default function About() {
  return (
    <Templates.Layout pageTitle="About x'ibit">
      <Molecules.Carousel carouselItems={aboutUsCarouselItems} />
      <Atoms.AboutUs />
      <Molecules.ContactForm />
    </Templates.Layout>
  );
}
