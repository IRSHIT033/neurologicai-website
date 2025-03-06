"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const logos = [
  "/globus-medical-logo.svg",
  "/hoppr-logo.svg",
  "/prismforce-logo.svg",
  "/trace-logo.svg",
  "/ust-logo.svg",
  "/pentatonic-logo.svg",
  "/fxpay-logo.svg",
];

const PartnerSection = () => {
  return <InfiniteMovingCards items={[...logos, ...logos]} />;
};

export default PartnerSection;
