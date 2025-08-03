import { useRef, useState, useEffect } from "react";

const recentWinData = [
  {
    number: "0721****32",
    amount: "KSH 1,500",
    image: "./assets/aviator.webp",
  },
  {
    number: "0723****45",
    amount: "KSH 12,000",
    image: "./assets/blood-burst.webp",
  },
  {
    number: "0734****56",
    amount: "KSH 20,000",
    image: "./assets/crash-1917.webp",
  },
  {
    number: "0745****67",
    amount: "KSH 5,000",
    image: "./assets/crash-ghostly.webp",
  },
  {
    number: "0756****78",
    amount: "KSH 8,000",
    image: "./assets/crash-royale.webp",
  },
  {
    number: "0767****89",
    amount: "KSH 13,000",
    image: "./assets/crash-witch.webp",
  },
  { number: "0778****90", amount: "KSH 1,000", image: "./assets/KENO.webp" },
  {
    number: "0789****01",
    amount: "KSH 60,000",
    image: "./assets/STARLINE.webp",
  },
  {
    number: "0790****12",
    amount: "KSH 90,000",
    image: "./assets/diamond-mine.webp",
  },
  {
    number: "0701****23",
    amount: "KSH 110,000",
    image: "./assets/aviator.webp",
  },
  {
    number: "0712****34",
    amount: "KSH 140,000",
    image: "./assets/find-the-stone.webp",
  },
  {
    number: "0723****45",
    amount: "KSH 160,000",
    image: "./assets/magic-aladdin.webp",
  },
  {
    number: "0734****56",
    amount: "KSH 170,000",
    image: "./assets/spinny-winny.webp",
  },
  {
    number: "0745****67",
    amount: "KSH 110,000",
    image: "./assets/tossboss.webp",
  },
  {
    number: "0756****78",
    amount: "KSH 90,000",
    image: "./assets/aqua-keno.webp",
  },
  {
    number: "0767****89",
    amount: "KSH 150,000",
    image: "./assets/magic-aladdin.webp",
  },
  {
    number: "0778****90",
    amount: "KSH 130,000",
    image: "./assets/STARLINE.webp",
  },
  {
    number: "0789****01",
    amount: "KSH 120,000",
    image: "./assets/crash-royale.webp",
  },
  {
    number: "0790****12",
    amount: "KSH 100,000",
    image: "./assets/aviator.webp",
  },
  {
    number: "0701****23",
    amount: "KSH 110,000",
    image: "./assets/crash-1917.webp",
  },
  {
    number: "0712****34",
    amount: "KSH 150,000",
    image: "./assets/spinny-winny.webp",
  },
  {
    number: "0723****45",
    amount: "KSH 140,000",
    image: "./assets/diamond-mine.webp",
  },
  {
    number: "0734****56",
    amount: "KSH 80,000",
    image: "./assets/blood-burst.webp",
  },
  {
    number: "0745****67",
    amount: "KSH 130,000",
    image: "./assets/spinny-winny.webp",
  },
  { number: "0756****78", amount: "KSH 100,000", image: "./assets/KENO.webp" },
  {
    number: "0767****89",
    amount: "KSH 160,000",
    image: "./assets/STARLINE.webp",
  },
  {
    number: "0778****90",
    amount: "KSH 90,000",
    image: "./assets/crash-1917.webp",
  },
  {
    number: "0789****01",
    amount: "KSH 120,000",
    image: "./assets/aviator.webp",
  },
  {
    number: "0790****12",
    amount: "KSH 110,000",
    image: "./assets/magic-aladdin.webp",
  },
  {
    number: "0701****23",
    amount: "KSH 140,000",
    image: "./assets/spinny-winny.webp",
  },
  {
    number: "0712****34",
    amount: "KSH 130,000",
    image: "./assets/crash-1917.webp",
  },
  {
    number: "0723****45",
    amount: "KSH 100,000",
    image: "./assets/crash-ghostly.webp",
  },
  {
    number: "0734****56",
    amount: "KSH 80,000",
    image: "./assets/crash-royale.webp",
  },
  { number: "0745****67", amount: "KSH 90,000", image: "./assets/KENO.webp" },
  {
    number: "0756****78",
    amount: "KSH 120,000",
    image: "./assets/STARLINE.webp",
  },
  {
    number: "0767****89",
    amount: "KSH 150,000",
    image: "./assets/crash-1917.webp",
  },
];

function RecentWins() {
  const recentWins = recentWinData;
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 1;
  const leftPosition = useRef(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      leftPosition.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const scroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!isPaused && scrollContainer) {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (leftPosition.current >= maxScroll) {
        // Smooth reset to start
        leftPosition.current = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        leftPosition.current += scrollSpeed;
        scrollContainer.scrollLeft = leftPosition.current;
      }
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(scroll, 10);
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div className="px-2 pb-2 relative">
      <h5 className="text-textGrey mt-2 text-sm md:text-base font-semibold relative inline-block pl-4">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3">
          <span className="absolute inset-0 bg-[#FF6D00] rounded-full animate-ping opacity-75 duration-1000"></span>
          <span className="absolute inset-0 bg-[#FF6D00] rounded-full glow-dot"></span>
        </span>
        Recent Big Wins
      </h5>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-1 gap-1 no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onScroll={handleScroll}
        style={{ whiteSpace: "nowrap" }}
      >
        {recentWins.map((win, index) => (
          <div
            key={`${win.number}-${index}`}
            className="flex-shrink-0 flex flex-col items-center px-1 transition-transform"
          >
            <img
              src={win.image}
              alt="winner"
              className="h-24 w-[80px] rounded-lg object-cover border border-gray-100 shadow-sm"
            />
            <p className="text-textGrey font-semibold text-[10px] mt-1 truncate w-full text-center">
              {win.number}
            </p>
            <p className="text-primary text-[12px] font-semibold truncate w-full text-center">
              {win.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentWins;
