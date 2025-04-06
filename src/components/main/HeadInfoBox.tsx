import Image from "next/image";
import React from "react";

type HeadInfoBoxDataType = {
  image: string;
  title: string;
  secondTitle?: string;
  text: string;
  type: "author" | "book";
  buttons?: React.ReactNode[];
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
};

function HeadInfoBox({
  image,
  title,
  secondTitle,
  text,
  buttons,
  type,
  rightIcon,
  leftIcon,
}: HeadInfoBoxDataType) {
  return (
    <div className="h-96" dir="rtl">
      <div className="flex py-6 bg-white drop-shadow container mx-auto mt-12 rounded-xl relative overflow-hidden">
        <div
          className={`flex flex-col items-center gap-10 justify-between ${text ? "w-1/3" : ""}  px-3`}
        >
          <Image
            className={`${type === "author" ? "rounded-full" : ""}`}
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
        <div className="">
          <p className="text-sm text-text2 leading-10 px-10">
            {text || "بیوگرافی ای برای این نویسنده تعریف نشده است."}{" "}
          </p>
          <div className="flex">
            {rightIcon}
            {buttons?.map((button) => button)}
            {leftIcon}
          </div>
        </div>
        <Image
          className="absolute -top-96 blur-2xl opacity-25 pointer-events-none"
          src={image}
          alt={title}
          width={3000}
          height={3000}
        />
      </div>
    </div>
  );
}

export default HeadInfoBox;
