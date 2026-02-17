import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
 const targetDate = new Date("2026-01-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "26",
    hours: "11",
    minutes: "34",
    seconds: "56",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center">
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HRS", value: timeLeft.hours },
        { label: "MINS", value: timeLeft.minutes },
        { label: "SECS", value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white/20 backdrop-blur-sm px-6 py-5 text-center "
        >
          <h2 className="text-4xl font-semibold text-white">{item.value}</h2>
          <p className="text-sm text-white tracking-wide mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
