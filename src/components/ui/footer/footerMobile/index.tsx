import FooterCTA from "./footercta";
import FooterLinks from "./footerlinks";
import FooterContact from "./footerContact";

export default function FooterMobile() {
  return (
    <footer className="bg-black text-white ">
      <FooterCTA />
      <FooterLinks />
      <div className="w-full border-t border-[#4A4A4A] my-1"></div>
      <FooterContact />
    </footer>
  );
}
