import Image from "next/image";
import Button from "@/app/(components)/Button";
import { ChevronLeft } from "lucide-react";

function BigFeature() {
  return (
    <div className="flex flex-col container mx-auto mt-24">
      <div className="flex items-center" dir={"rtl"}>
        <Image
          src={"/highlightImport.png"}
          alt={"highlight import"}
          width={820}
          height={610}
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-text1 text-4xl font-bold">بارگذاری هایلایت</h2>
          <p className="text-text2 text-xl">
            بارگذاری هایلایت کتاب، علاوه بر فراهم کردن امکان سازماندهی اطلاعات،
            با ابزارهای هوشمند مرور و یادآوری، به شما کمک می‌کند تا مطالب را به
            شکل مؤثرتری به خاطر بسپارید. همچنین، قابلیت همگام‌سازی ابری و
            اشتراک‌گذاری محتوا، این امکان را فراهم می‌کند که اطلاعات خود را در
            هر دستگاهی در دسترس داشته باشید و با دیگران به اشتراک بگذارید.
          </p>
          <Button
            text={"بارگذاری هایلایت جدید"}
            type={"secondary"}
            rightIcon={<ChevronLeft />}
          />
        </div>
      </div>
      <div className="flex items-center">
        <Image
          src={"/appImage.png"}
          alt={"app image"}
          width={820}
          height={610}
        />
        <div className="flex flex-col gap-5" dir={"rtl"}>
          <h2 className="text-text1 text-4xl font-bold">
            دانلود اپلیکیشن خــردخــوان برای{" "}
            <span className="text-primary">Android</span> و{" "}
            <span className="text-primary">iOS</span>
          </h2>
          <p className="text-text2 text-xl">
            اپلیکیشن خردخوان٬ تجربه‌ی مطالعه‌ی شما را با امکاناتی مانند جستجوی
            سریع، همگام‌سازی بین دستگاه‌ها و دسته‌بندی شخصی‌سازی‌شده بهبود
            می‌بخشد.
          </p>
          <div className="flex gap-5 mt-10">
            <Image
              src={"/iOSAppDownload.png"}
              alt={"ios download"}
              width={195}
              height={58}
            />
            <Image
              src={"/androidAppDownload.png"}
              alt={"android download"}
              width={195}
              height={58}
            />
            <div className="flex items-center gap-3">
              <Image
                src={"/soonIcon.svg"}
                alt={"soon icon"}
                width={24}
                height={24}
              />
              <p className="text-text2">بزودی</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center" dir={"rtl"}>
        <Image
          src={"/reviewImage.png"}
          alt={"highlight import"}
          width={820}
          height={610}
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-text1 text-4xl font-bold">مرور روزانه</h2>
          <p className="text-text2 text-xl">
            نکات مهمی که هایلایت کرده‌اید را هر روز مرور کنید و به راحتی یادآوری
            کنید. همچنین، نظرات و بازخوردهای خود را روی هر هایلایت ثبت کنید تا
            به تفکر عمیق‌تری دست یابید. این روش به شما کمک می‌کند تا مطالب را
            بهتر درک کنید و به بهبود روند یادگیری و رشد فردی خود ادامه دهید.
          </p>
          <Button
            text={"روزانه مرور کن"}
            type={"secondary"}
            rightIcon={<ChevronLeft />}
          />
        </div>
      </div>
    </div>
  );
}

export default BigFeature;
