import React from "react";
import TagBadge from "@/components/tags/TagBadge";

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
            <div key={index}>
              <TagBadge tag={tag} />
            </div>
          ))}
        </div>

        <div className="flex">{buttons.map((button) => button)}</div>
      </div>
    </div>
  );
}

export default HighlightCard;
