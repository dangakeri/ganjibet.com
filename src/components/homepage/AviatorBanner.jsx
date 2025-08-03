import { useState, useEffect } from "react";

export default function AviatorBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) setVisible(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-bgBody text-white text-sm sm:hidden px-4 py-2 flex items-center justify-between shadow-md">
      <style>
        {`
          @keyframes textPulseOut {
            0% {
              transform: scale(1) translateY(0);
            }
            50% {
              transform: scale(1.08) translateY(-2px);
            }
            100% {
              transform: scale(1) translateY(0);
            }
          }

          .animate-text-pulse {
            animation: textPulseOut 1.5s ease-in-out infinite;
          }
        `}
      </style>

      <div className="flex-1 font-semibold animate-text-pulse">
        <span className="text-primary text-[12px]">CLAIM</span> UPTO{" "}
        <span className="text-primary text-[12px]">2,500,000/=</span>{" "}
        <span className="text-white text-[12px]">AVIATOR</span>{" "}
        <span className="text-primary text-[12px]">RAINS</span> DAILY !!!
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-primary text-xl font-bold focus:outline-none"
        aria-label="Dismiss banner"
      >
        &times;
      </button>
    </div>
  );
}
