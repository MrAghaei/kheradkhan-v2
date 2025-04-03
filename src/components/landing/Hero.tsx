import Image from "next/image";
import Button from "@/components/Button";
import { ChevronLeft } from "lucide-react";
function Hero() {
  return (
    <div className="container relative mx-auto flex justify-between items-center mt-24">
      <div>
        <Image
          className="absolute -left-80 top-0"
          src="/hero.png"
          alt="hero"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col mt-10 gap-8 w-[35%] h-96" dir="rtl">
        <h1 className="text-8xl text-secondary">خرد خوان</h1>
        <p className="relative text-text1 text-3xl">
          &#34;کتابخانه‌ای هوشمند برای ذهن شما ، جایی که بهترین ایده‌ها همیشه
          همراهتان هستند.&#34;
          <Image
            className="absolute top-0 right-24"
            src={"/heroTextEffect.png"}
            alt={"text effect"}
            width={165}
            height={52}
          />
        </p>
        <div className="flex gap-5">
          <Button text={"ثبت نام"} type={"primary"} />
          <Button
            text={"ورود"}
            type={"secondary"}
            rightIcon={<ChevronLeft />}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
