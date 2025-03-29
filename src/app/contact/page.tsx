import ContactFormSection from "@/components/ui/contactus/contact-form-section";
import DirectContactSection from "@/components/ui/contactus/direct-contact-section";
import ContactUsHeader from "@/components/ui/contactus/header";

export default function Contact() {
  return (
    <div className="min-h-screen scroll-smooth relative w-full ">
      <ContactUsHeader />
      <div className="w-full flex relative flex-col lg:flex-row z-10 items-center justify-center gap-24 ">
        <ContactFormSection />
        <DirectContactSection />
      </div>
      <div className="hidden md:block absolute bottom-[200px] left-[700px] bg-[radial-gradient(circle_at_center,#5D6EF3_0%,_transparent_40%)] opacity-30 w-full h-full"></div>

      <div className="hidden md:block absolute top-[100px] left-[250px] bg-[radial-gradient(circle_at_center,_#AA48FE_0%,_transparent_30%)] opacity-30 w-full h-full"></div>
    </div>
  );
}
