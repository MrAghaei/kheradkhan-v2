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
      className="flex justify-between gap-5 mx-auto shadow bg-white text-text1 text-2xl rounded-3xl h-14 w-4/5"
    >
      {options.map((opt, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-1/5 border-l last:border-l-0 px-5"
        >
          <button
            type="button"
            onClick={() => handleClick(i)}
            className={`rounded-3xl px-3 py-2 transition-all duration-200 ${
              activeIndex === i ? "bg-primary200" : "hover:bg-gray-100"
            }`}
          >
            {opt.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReviewFrequencyCard;
