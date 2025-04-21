"use client";
import Button from "@/components/main/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import TagInfoCard from "@/components/tags/TagInfoCard";
import Pagination from "@/components/main/Pagination";

function Page() {
  //region mock data
  const tagData = [
    {
      id: 1,
      image: "/book2Image.png",
      title: "یا این یا آن",
      secondTitle: "سورن کیرگکور",
      text: "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.",
      tagName: "فلسفه",
    },
    {
      id: 1,
      image: "/book2Image.png",
      title: "یا این یا آن",
      secondTitle: "سورن کیرگکور",
      text: "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.",
      tagName: "فلسفه",
    },
    {
      id: 1,
      image: "/book2Image.png",
      title: "یا این یا آن",
      secondTitle: "سورن کیرگکور",
      text: "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.",
      tagName: "فلسفه",
    },
  ];
  //endregion
  //region hooks
  const navigate = useRouter();
  //endregion

  //region functions
  function handleNavigation(navigateTo: string): void {
    navigate.push(navigateTo);
  }
  //endregion
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">برجسب ها</h2>
        <Button
          onClick={() => handleNavigation("/dashboard/tags")}
          type={"dashboard"}
          leftIcon={<ChevronLeft />}
        />
      </div>
      <div className="flex flex-col gap-8">
        {tagData.map((data, index) => (
          <TagInfoCard
            key={index}
            image={data.image}
            title={data.title}
            secondTitle={data.secondTitle}
            text={data.text}
            tagName={data.tagName}
          />
        ))}
      </div>
      <Pagination totalPages={12} initialPage={1} />
    </div>
  );
}

export default Page;
