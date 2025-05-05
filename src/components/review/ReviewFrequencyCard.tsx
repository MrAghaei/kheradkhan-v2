"use client";
import React, { useState, FC } from "react";

export interface ReviewOptions {
  text: string;
  isActive: boolean;
}

interface ReviewFrequencyCardProps {
  options: ReviewOptions[];
  /** Initial active tab (defaults to first) */
  initialIndex?: number;
  /** Notified when user switches tabs */
  onChange?: (newIndex: number) => void;
}

const ReviewFrequencyCard: FC<ReviewFrequencyCardProps> = ({
  options,
  initialIndex = 2,
  onChange,
}) => {
  //region hooks
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  //endregion

  //region functions
  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };
  //endregion

  return (
    <div
      role="group"
      aria-label="Review frequency options"
      className="flex justify-between gap-0 mx-auto shadow bg-white text-text1 text-2xl rounded-3xl h-14 w-4/5"
    >
      {options.map((opt, i) => {
        const isFirst = i === 0;
        const isLast = i === options.length - 1;

        const baseClasses = "w-full h-full py-2 transition-all duration-200";
        const activeClass = activeIndex === i ? "bg-primary200" : "";
        const roundedClass = isFirst
          ? "rounded-r-3xl"
          : isLast
            ? "rounded-l-3xl"
            : "rounded-none";

        return (
          <div
            key={i}
            className={`flex items-center justify-center w-1/5 border-r ${
              i === 0 ? "first:border-r-0" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => handleClick(i)}
              className={`${baseClasses} ${roundedClass} ${activeClass}`}
            >
              {opt.text}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewFrequencyCard;
