import Button from "@/components/main/Button";
import { Download } from "lucide-react";
import BookCard, { BookCardDataType } from "@/components/books/BookCard";
import Pagination from "@/components/main/Pagination";

function Page() {
  //region data
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
    {
      id: 11,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 12,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 13,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 14,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
    {
      id: 15,
      name: "مرغ دریایی",
      author: "ریچارد باخ",
      image: "/bookImage.png",
      rating: 4.4,
    },
  ] as (BookCardDataType & { id: number })[];
  //endregion
  return (
    <div className="flex flex-col container mx-auto mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">کتابخانه من</h2>
        <Button
          text={"بارگذاری کتاب"}
          type={"secondary"}
          leftIcon={<Download />}
        />
      </div>
      {/*Content*/}
      <div className="grid grid-rows-3 grid-cols-5 gap-y-10 pt-10 gap-x-4">
        {bookData.map((data) => (
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
  );
}

export default Page;
