import { useState, useEffect } from "react";

const useDeviceType = (): "sm" | "md" | "lg" => {
  const getDeviceType = (width = window.innerWidth) =>
    width < 768 ? "sm" : width < 1024 ? "md" : "lg";

  const [deviceType, setDeviceType] = useState<"sm" | "md" | "lg">(() =>
    getDeviceType()
  );

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
