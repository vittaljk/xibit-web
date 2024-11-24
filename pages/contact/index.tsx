import * as Templates from "@/components/Templates";
import * as Molecules from "@/components/Molecules";

export default function Contact() {
  return (
    <Templates.Layout>
      <div>
        Contact page.
        <Molecules.ContactForm />
      </div>
    </Templates.Layout>
  );
}
