"use client"; // ✅ Add this at the top

import useDeviceType from "@/hooks/device-check";
import FooterLarge from "./ui/footer";
import FooterMobile from "@/components/footerMobile/footerMobile";

export default function Footer() {
  const device = useDeviceType();

  if (device === "lg" || device === "md") {
    return <FooterLarge />;
  } else {
    return <FooterMobile />;
  }
}
