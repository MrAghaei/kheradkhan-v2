import HeadInfoBox from "@/components/main/HeadInfoBox";
import Button from "@/components/main/Button";
import Image from "next/image";
import { MessageSquareQuote, Plus } from "lucide-react";

function Page() {
  //region data
  const bookData = {
    image: "/book2Image.png",
    name: "یا این یا آن",
    author: "سورن کیرکگور",
    text: "ریچارد دیوید باخ، زاده ی 23 ژوئن 1936، نویسنده ی آمریکایی است.باخ در اوک پارک ایالت ایلینوی به دنیا آمد و در سال 1955 به کالج دولتی لانگ بیچ رفت. او از همان دوران کودکی عاشق پرواز بود و اولین بار در پانزده سالگی پرواز با هواپیما را تجربه کرد.باخ به عنوان خلبان جنگنده به گارد ملی نیوجرسی پیوست و بعد از آن، در شغل هایی چون نویسنده ی فنی شرکت هوایی داگلاس و دبیر مجله ی Flying مشغول به کار شد.اکثر کتاب های باخ به گونه ای با پرواز مرتبط هستند، از داستان های اولیه ی او گرفته که تماما به پرواز با هواپیما می پردازند، تا آثار بعدی او که از پرواز به عنوان استعاره ای فلسفی بهره می جویند.",
  };
  //endregion
  return (
    <div className="flex flex-col">
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
            leftIcon={<MessageSquareQuote strokeWidth={1.2} />}
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
    </div>
  );
}

export default Page;
