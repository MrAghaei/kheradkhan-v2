import Image from "next/image";

function HeadInfoBox() {
  return (
    <div className="h-96" dir="rtl">
      <div className="flex py-6 bg-white drop-shadow container mx-auto mt-12 rounded-xl relative overflow-hidden">
        <div className="flex flex-col items-center gap-10 justify-between w-1/2 px-3">
          <Image
            className="rounded-full"
            src={"/authorImage.png"}
            alt={"author image"}
            width={130}
            height={130}
          />
          <p className="text-text1 text-sm">ریچارد باخ</p>
        </div>
        <p className="text-sm text-text2 leading-10 px-10">
          ریچارد دیوید باخ، زاده ی 23 ژوئن 1936، نویسنده ی آمریکایی است.باخ در
          اوک پارک ایالت ایلینوی به دنیا آمد و در سال 1955 به کالج دولتی لانگ
          بیچ رفت. او از همان دوران کودکی عاشق پرواز بود و اولین بار در پانزده
          سالگی پرواز با هواپیما را تجربه کرد.باخ به عنوان خلبان جنگنده به گارد
          ملی نیوجرسی پیوست و بعد از آن، در شغل هایی چون نویسنده ی فنی شرکت
          هوایی داگلاس و دبیر مجله ی Flying مشغول به کار شد.اکثر کتاب های باخ به
          گونه ای با پرواز مرتبط هستند، از داستان های اولیه ی او گرفته که تماما
          به پرواز با هواپیما می پردازند، تا آثار بعدی او که از پرواز به عنوان
          استعاره ای فلسفی بهره می جویند.
        </p>
        <Image
          className="absolute -top-96 blur-2xl opacity-25"
          src={"/authorImage.png"}
          alt={"author image"}
          width={3000}
          height={3000}
        />
      </div>
    </div>
  );
}

export default HeadInfoBox;
