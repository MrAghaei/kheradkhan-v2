import HeadInfoBox from "@/components/main/HeadInfoBox";
import Button from "@/components/main/Button";
import SearchBox from "@/components/main/SearchBox";
import BookCard, { BookCardDataType } from "@/components/main/BookCard";
import Pagination from "@/components/main/Pagination";

function Page() {
  //region data
  const authorData = {
    name: "ریچارد باخ",
    bio: "ریچارد دیوید باخ، زاده ی 23 ژوئن 1936، نویسنده ی آمریکایی است.باخ در اوک پارک ایالت ایلینوی به دنیا آمد و در سال 1955 به کالج دولتی لانگ بیچ رفت. او از همان دوران کودکی عاشق پرواز بود و اولین بار در پانزده سالگی پرواز با هواپیما را تجربه کرد.باخ به عنوان خلبان جنگنده به گارد ملی نیوجرسی پیوست و بعد از آن، در شغل هایی چون نویسنده ی فنی شرکت هوایی داگلاس و دبیر مجله ی Flying مشغول به کار شد.اکثر کتاب های باخ به گونه ای با پرواز مرتبط هستند، از داستان های اولیه ی او گرفته که تماما به پرواز با هواپیما می پردازند، تا آثار بعدی او که از پرواز به عنوان استعاره ای فلسفی بهره می جویند.",
    image: "/authorImage.png",
  };
  const bookData = [
    {
      id: 1,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 2,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 3,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 4,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 5,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 6,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 7,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 8,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 9,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 10,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
  ] as (BookCardDataType & { id: number })[];
  //endregion
  return (
    <>
      <HeadInfoBox
        title={authorData.name}
        type={"author"}
        text={authorData.bio}
        image={authorData.image}
        secondTitle={"متن تست"}
      />
      {/*Books*/}
      <div className="flex flex-col container mx-auto" dir="rtl">
        {/*Heading*/}
        <div className="flex justify-between border-b-[0.5px] border-primary pb-4">
          <h2 className="text-secondary text-2xl">
            {" "}
            کتاب های {authorData.name}
          </h2>
          <SearchBox />
        </div>
        {/*Content*/}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 pt-10  gap-x-4">
          {bookData.slice(0, 5).map((data) => (
            <BookCard
              key={data.id}
              image={data.image}
              name={data.name}
              author={data.author}
              rating={data.rating}
            />
          ))}

          {/* Border between rows - reduced spacing */}
          <div className="col-span-1 md:col-span-5 border-b-[0.4px] border-secondary50"></div>

          {bookData.slice(5, 10).map((data) => (
            <BookCard
              key={data.id}
              image={data.image}
              name={data.name}
              author={data.author}
              rating={data.rating}
            />
          ))}
        </div>
        <div className="self-end">
          <Pagination totalPages={5} initialPage={1} />
        </div>
      </div>
    </>
  );
}

export default Page;
