import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import * as Organisms from "@/components/Organisms";

export default function IndexPage() {
  return (
    <Templates.Layout>
      {/* <Molecules.HeroBanner
        heroImage="/images/projects/Ishavasya/1.jpg"
        name="X'ibit"
        title="Where Design Meets Impeccable Execution"
      /> */}

      {/* optional carousel */}

      <Molecules.Carousel />
      <Organisms.Projects />
      <Molecules.ContactForm />
    </Templates.Layout>
  );
}
