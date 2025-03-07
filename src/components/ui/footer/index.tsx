import FooterCTA from "./footer-cta";
import FooterContact from "./footer-contact";
import FooterServices from "./footer-service";
import FooterLinks from "./footer-link";
import FooterBottomBar from "./footer-bottom-bar";

export default function Footer() {
  return (
    <footer className=" text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {/* Left Side: CTA and Contact */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <FooterCTA />
          <FooterContact />
        </div>

        {/* Center: Services */}
        <FooterServices />

        {/* Right Side: Links */}
        <FooterLinks />
      </div>

      {/* Bottom Bar */}
      <FooterBottomBar />
    </footer>
  );
}
