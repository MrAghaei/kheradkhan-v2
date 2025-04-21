import Image from "next/image";
import React from "react";
import TagBadge from "@/components/tags/TagBadge";
import Button from "@/components/main/Button";

type HeadInfoBoxDataType = {
  image: string;
  title: string;
  secondTitle?: string;
  text: string;
  tagName: string;
};

function TagInfoCard({
  image,
  title,
  secondTitle,
  text,
  tagName,
}: HeadInfoBoxDataType) {
  return (
    <div dir="rtl">
      <div className="flex py-6 bg-white drop-shadow container mx-auto rounded-xl overflow-hidden">
        <div className="flex flex-col items-center gap-5 w-1/3 px-3">
          <Image
            className="rounded"
            src={image}
            alt={title}
            width={130}
            height={130}
          />
          <div className="flex flex-col items-center gap-1">
            <p className="text-text1 text-sm">{title}</p>
            <p className="text-xs text-text2">{secondTitle}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between px-10">
          <p className="text-xl text-text2 leading-10 ">{text}</p>
          <div className="flex items-center justify-between">
            <TagBadge tag={tagName} />
            <div className="flex">
              <Button
                key={"1"}
                text={""}
                type={"secondary"}
                leftIcon={
                  <Image
                    src={"/tagIcon.svg"}
                    alt={"tag icon"}
                    width={24}
                    height={24}
                  />
                }
              />
              <Button
                key={"2"}
                text={""}
                type={"secondary"}
                leftIcon={
                  <Image
                    src={"/reviewIcon.svg"}
                    alt={"review icon"}
                    width={24}
                    height={24}
                  />
                }
              />
              <Button
                key={"3"}
                text={""}
                type={"secondary"}
                leftIcon={
                  <Image
                    src={"/favoriteIcon.svg"}
                    alt={"favorites icon"}
                    width={24}
                    height={24}
                  />
                }
              />
              <Button
                key={"4"}
                text={""}
                type={"secondary"}
                leftIcon={
                  <Image
                    src={"/highlightIcon.svg"}
                    alt={"highlight icon"}
                    width={24}
                    height={24}
                  />
                }
              />
              <Button
                key={"5"}
                text={""}
                type={"secondary"}
                leftIcon={
                  <Image
                    src={"/shareIcon.svg"}
                    alt={"share icon"}
                    width={24}
                    height={24}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TagInfoCard;
