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
    const angle = (percentage / 100) * 360;

    return (
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-52 xl:h-52">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full border-4 sm:border-[6px] md:border-8 border-gray-300"></div>
          
          {/* Progress circle */}
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4394D0"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - percentage / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          
          {/* Value display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-neutral-800 leading-none">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-wide text-neutral-600 mt-0.5 sm:mt-1">
              {unit}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#E6E6E6] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-8 md:py-10 lg:py-12">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-6 max-w-7xl mx-auto">
        {/* Logo - centered on mobile, left on desktop */}
        <div className="flex-shrink-0">
          <img 
            src="/assets/conferenceLogo.png" 
            alt="Conference Logo" 
            className="w-40 sm:w-52 md:w-60 lg:w-56 xl:w-72 h-auto"
          />
        </div>
        
        {/* Timer units - 2x2 grid on mobile, horizontal on tablet+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-10 w-full lg:w-auto justify-items-center">
          <TimeUnit value={timeLeft.days} unit="days" max={TOTAL_DAYS} />
          <TimeUnit value={timeLeft.hours} unit="hours" max={24} />
          <TimeUnit value={timeLeft.minutes} unit="minutes" max={60} />
          <TimeUnit value={timeLeft.seconds} unit="seconds" max={60} />
        </div>
      </div>
    </div>
  );
};
