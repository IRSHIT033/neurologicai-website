"use client";
import FooterCTA from "./footer-cta";
import FooterContact from "./footer-contact";
import FooterServices from "./footer-service";
import FooterLinks from "./footer-link";
import FooterBottomBar from "./footer-bottom-bar";
import useDeviceType from "@/hooks/device-check";
import FooterMobile from "./footerMobile";

export default function Footer() {
  const device = useDeviceType();
  if (device === "sm" || device === "md") return <FooterMobile />;
  else
    return (
      <footer className=" text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-24">
          {/* Left Side: CTA and Contact */}
          <div className="col-span-2 flex flex-col justify-between gap-30">
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
