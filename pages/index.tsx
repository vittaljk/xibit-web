import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";
import * as Organisms from "@/components/Organisms";
import * as Atoms from "@/components/Atoms";

export default function IndexPage() {
  return (
    <Templates.Layout>
      <Molecules.Carousel />
      <Atoms.AboutUs />
      <Organisms.Projects />
      <Molecules.ContactForm />
    </Templates.Layout>
  );
}
