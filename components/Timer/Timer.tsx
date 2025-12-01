"use client"
import { useEffect, useState } from 'react';

interface TimerProps {
  endTime?: Date;
}

export const Timer = ({ endTime = new Date('2025-12-23T10:00:00+05:00') }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const TOTAL_DAYS = 50;

  useEffect(() => {
    const endTimeMs = endTime.getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endTimeMs - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime.getTime()]);

  const getPercentage = (value: number, max: number) => {
    return (value / max) * 100;
  };

  const TimeUnit = ({ value, unit, max }: { value: number; unit: string; max: number }) => {
    const percentage = getPercentage(value, max);
    const strokeDasharray = 2 * Math.PI * 110;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
      <div className="relative flex flex-col items-center">
        <svg className="absolute w-72 h-72" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="144"
            cy="144"
            r="110"
            stroke="#D1D5DB"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="144"
            cy="144"
            r="110"
            stroke="#4394D0"
            strokeWidth="6"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div className="flex text-neutral-800 flex-col items-center justify-center size-72">
          <span className="text-8xl">{value.toString().padStart(2, '0')}</span>
          <span className="text-base uppercase tracking-wider">{unit}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#E6E6E6] px-40 py-10">
      <div className="flex justify-between items-center">
        <img 
          src="/assets/conferenceLogo.png" 
          alt="Conference Logo" 
          className=""
        />
        <TimeUnit value={timeLeft.days} unit="days" max={TOTAL_DAYS} />
        <TimeUnit value={timeLeft.hours} unit="hours" max={24} />
        <TimeUnit value={timeLeft.minutes} unit="minutes" max={60} />
        <TimeUnit value={timeLeft.seconds} unit="seconds" max={60} />
      </div>
    </div>
  );
};
