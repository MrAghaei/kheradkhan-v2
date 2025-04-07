import React from "react";

export type HighlightCardDataType = {
  text: string;
  buttons: React.ReactNode[];
  tags: string[];
};

function HighlightCard({ text, tags, buttons }: HighlightCardDataType) {
  return (
    <div
      className="flex flex-col py-10 px-9 mt-8 gap-16 rounded-xl drop-shadow bg-white"
      dir="rtl"
    >
      <p className="text-text2 text-xl">{text}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          {tags.map((tag, index) => (
            <div
              className="text-text1 text-sm py-1 px-3 bg-primary rounded-2xl"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="flex">{buttons.map((button) => button)}</div>
      </div>
    </div>
  );
}

export default HighlightCard;
