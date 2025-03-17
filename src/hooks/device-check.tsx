import { useState, useEffect } from "react";

const useDeviceType = () => {
  const getDeviceType = (width: number) =>
    width < 768 ? "sm" : width < 1024 ? "md" : "lg";

  const [deviceType, setDeviceType] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code runs only on the client

    const handleResize = () => setDeviceType(getDeviceType(window.innerWidth));

    // Set initial state once component mounts
    setDeviceType(getDeviceType(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
