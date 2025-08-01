import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const GameWinnerMarquee = () => {
  const [announcements, setAnnouncements] = useState([]);

  const gameNames = [
    "Easter Plinko",
    "Mines",
    "Goal",
    "Dice",
    "Aviator",
    "Candy Blitz",
    "Fish Eye",
    "Chilli Heat",
    "Cubes",
    "Aztec Twist",
    "Animal Madness",
    "Fire Toad",
    "Beast Below",
    "Benny the Beer",
    "Hotline",
    "Keno",
  ];

  const generateRandomAnnouncements = (count = 5) => {
    return Array.from({ length: count }, () => {
      const baseNumber = Math.floor(7000 + Math.random() * 1000);
      return {
        winner: baseNumber,
        amount: Math.floor(Math.random() * 5000) + 100,
        game: gameNames[Math.floor(Math.random() * gameNames.length)],
      };
    });
  };

  useEffect(() => {
    const updateAnnouncements = () => {
      setAnnouncements(generateRandomAnnouncements(5));
    };

    updateAnnouncements();
    const interval = setInterval(updateAnnouncements, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Marquee className="text-textGrey text-[1.2rem] py-2 italic" pauseOnHover>
      {announcements.map((announcement, index) => {
        // Convert number to string and pad with leading zero
        const winnerStr = announcement.winner.toString().padStart(5, "0");

        return (
          <div key={index} className="mx-4 inline-block">
            <span className="bg-gradient-to-r from-secondary to-bgBody p-2 text-white text-xs rounded">
              🔔 Congratulations!{" "}
              <span className="font-bold text-primary">
                {winnerStr.slice(0, 3)}****
                {winnerStr.slice(-2)}
              </span>{" "}
              won Ksh.{" "}
              <span className="font-bold text-primary">
                {announcement.amount.toLocaleString()}
              </span>{" "}
              in the game:{" "}
              <span className="font-bold text-primary">
                {announcement.game}
              </span>
            </span>
          </div>
        );
      })}
    </Marquee>
  );
};

export default GameWinnerMarquee;
