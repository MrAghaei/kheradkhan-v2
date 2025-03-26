import Image from "next/image";

function Footer() {
  return (
    <div className="container mx-auto mt-24 flex flex-col bg-white" dir="rtl">
      <div className="flex justify-between items-center border-b border-b-secondary50 pt-10 pb-16">
        {/*main*/}
        <div className="flex flex-col gap-5 w-1/6">
          <Image src={"/mainLogo.png"} alt={"logo"} width={72} height={72} />
          <p className="text-secondary text-sm">
            &#34;کتابخانه‌ای هوشمند برای ذهن شما ، جایی که بهترین ایده‌ها همیشه
            همراهتان هستند.&#34;
          </p>
        </div>
        {/*social*/}
        <div className="flex flex-col gap-4">
          <p className="text-secondary text-base">خردخوان را دنبال کنید</p>
          <div className="flex gap-8">
            <Image
              src={"/insta.svg"}
              alt={"insta logo"}
              width={43}
              height={43}
            />
            <Image
              src={"/twitter.svg"}
              alt={"insta logo"}
              width={43}
              height={43}
            />
            <Image
              src={"/linkedin.svg"}
              alt={"insta logo"}
              width={43}
              height={43}
            />
          </div>
        </div>
        {/*app*/}
        <div className="flex flex-col gap-4">
          <p className="text-secondary text-base">دانلود اپلیکیشن خردخوان</p>
          <div className="flex gap-3">
            <Image
              src={"/androidAppDownload.png"}
              alt={"android app"}
              width={124}
              height={38}
            />
            <Image
              src={"/iOSAppDownload.png"}
              alt={"iOS app"}
              width={124}
              height={38}
            />
          </div>
        </div>
      </div>

      <div className="flex py-8 items-center justify-between">
        <div className="flex gap-2">
          <p className="text-secondary text-base">Bytepute Team</p>
          <Image
            className="rounded-full"
            src={"/bytepute.png"}
            alt={"bytepute logo"}
            width={26}
            height={26}
          />
        </div>
        <p className="text-secondary text-xs ">Design by @Donya Mehrzad</p>
      </div>
    </div>
  );
}

export default Footer;
