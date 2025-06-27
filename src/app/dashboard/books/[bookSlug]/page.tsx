"use client";
import HeadInfoBox from "@/components/main/HeadInfoBox";
import Button from "@/components/main/Button";
import Image from "next/image";
import { Plus } from "lucide-react";
import HighlightCard, {
  HighlightCardDataType,
} from "@/components/books/HighlightCard";
import Pagination from "@/components/main/Pagination";
import { AddHighlightDialog } from "@/components/dialogs/AddHighlightDialog";
import { useState } from "react";

function Page() {
  //region data
  const bookData = {
    image: "/book2Image.png",
    name: "یا این یا آن",
    author: "سورن کیرکگور",
    text: "ریچارد دیوید باخ، زاده ی 23 ژوئن 1936، نویسنده ی آمریکایی است.باخ در اوک پارک ایالت ایلینوی به دنیا آمد و در سال 1955 به کالج دولتی لانگ بیچ رفت. او از همان دوران کودکی عاشق پرواز بود و اولین بار در پانزده سالگی پرواز با هواپیما را تجربه کرد.باخ به عنوان خلبان جنگنده به گارد ملی نیوجرسی پیوست و بعد از آن، در شغل هایی چون نویسنده ی فنی شرکت هوایی داگلاس و دبیر مجله ی Flying مشغول به کار شد.اکثر کتاب های باخ به گونه ای با پرواز مرتبط هستند، از داستان های اولیه ی او گرفته که تماما به پرواز با هواپیما می پردازند، تا آثار بعدی او که از پرواز به عنوان استعاره ای فلسفی بهره می جویند.",
  };

  const highlightData: HighlightCardDataType[] = [
    {
      text: "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.",
      tags: ["سیاسی", "علمی"],
      buttons: [
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
        />,
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
        />,
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
        />,
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
        />,
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
        />,
      ],
    },
    {
      text: "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.",
      tags: ["سیاسی", "علمی"],
      buttons: [
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
        />,
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
        />,
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
        />,
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
        />,
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
        />,
      ],
    },
    {
      text: "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.",
      tags: ["سیاسی", "علمی"],
      buttons: [
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
        />,
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
        />,
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
        />,
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
        />,
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
        />,
      ],
    },
  ];
  //endregion

  //region hooks
  const [isAddHighlightDialogOpen, setIsAddHighlightDialogOpen] =
    useState(false);
  //regionend
  return (
    <div className="container mx-auto flex flex-col">
      <HeadInfoBox
        image={bookData.image}
        title={bookData.name}
        text={bookData.text}
        type={"book"}
        secondTitle={bookData.author}
        buttons={[
          <Button
            key={"1"}
            text={"نظر کاربران"}
            type={"secondary"}
            leftIcon={
              <Image
                src={"/userReviewIcon.svg"}
                alt={"user review icon"}
                width={16}
                height={16}
              />
            }
          />,
          <Button
            key={"2"}
            text={"افزودن نظر"}
            type={"secondary"}
            leftIcon={<Plus />}
          />,
          <Button
            key={"3"}
            text={"مرور روزانه"}
            type={"secondary"}
            leftIcon={
              <Image
                className={"fill-link "}
                src={"/reviewIcon.svg"}
                alt={"review icon"}
                width={16}
                height={16}
              />
            }
          />,
        ]}
      />
      <div
        className="flex justify-between items-center pb-4 border-b-[0.5px] border-primary"
        dir="rtl"
      >
        <h2 className="text-secondary text-3xl">هایلایت ها</h2>
      </div>
      {highlightData.map((highlight, index) => (
        <HighlightCard
          key={index}
          text={highlight.text}
          buttons={highlight.buttons}
          tags={highlight.tags}
        />
      ))}
      <AddHighlightDialog
        open={isAddHighlightDialogOpen}
        onOpenChange={setIsAddHighlightDialogOpen}
      />
      <div className="self-start">
        <Pagination totalPages={12} initialPage={1} />
      </div>
    </div>
  );
}

export default Page;
