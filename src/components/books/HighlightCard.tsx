import React from "react";

export type HighlightCardDataType = {
  text: string;
  buttons: React.ReactNode[];
  tags: string[];
};

function HighlightCard({ text, tags, buttons }: HighlightCardDataType) {
  return (
    <div className="flex flex-col" dir="rtl">
      <p>{text}</p>
      <div className="flex justify-between items-center">
        <div className="flex">
          {tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>

        <div className="flex">{buttons.map((button) => button)}</div>
      </div>
    </div>
  );
}

export default HighlightCard;
