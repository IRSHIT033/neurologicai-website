import FooterCTA from "./footerCTA";
import FooterLinks from "./footerLinks";
import FooterContact from "./footerContact";

export default function FooterMobile() {
  return (
    <footer className="bg-black text-white w-[140vw] min-w-[140vw]">
      <FooterCTA />
      <FooterLinks />
      <div className="w-full border-t border-[#4A4A4A] my-1"></div>
      <FooterContact />
    </footer>
  );
}
