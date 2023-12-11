import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import HomeBanner from "@/components/homepage/homeBanner";
import Image from "next/image";

export const metadata = {
  title: "Home : Work manager",
};

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-5xl"> Welcome to work manager </h1> */}
      {/* Banner section */}
      <HomeBanner />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  );
}
