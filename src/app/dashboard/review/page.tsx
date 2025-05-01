import ReviewCard from "@/components/review/ReviewCard";
import ReviewFrequencyCard, {
  ReviewOptions,
} from "@/components/review/ReviewFrequencyCard";
import Image from "next/image";

function Page() {
  //region data
  const frequencyOptions: ReviewOptions[] = [
    { text: "هیچوقت", isActive: false },
    { text: "گاهی اوقات", isActive: false },
    { text: "متوسط", isActive: false },
    { text: "اغلب اوقات", isActive: false },
    { text: "بیشتر اوقات", isActive: false },
  ];

  //endregion
  return (
    <div
      className="container mx-auto flex flex-col gap-10 mt-12 mb-40"
      dir="rtl"
    >
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-2xl">مرور روزانه</h2>
      </div>
      <div className="flex">
        <ReviewFrequencyCard options={frequencyOptions} />
        <button className="flex justify-center shadow bg-white rounded-full w-12 h-12">
          <Image
            src={"/leftArrow.svg"}
            alt={"arrow icon"}
            height={18}
            width={9}
          />
        </button>
      </div>

      <ReviewCard
        image={"/book2Image.png"}
        title={"مغازه خودکشی"}
        text={
          "بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات، با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید."
        }
        tagName={"رمان"}
      />
    </div>
  );
}

export default Page;
