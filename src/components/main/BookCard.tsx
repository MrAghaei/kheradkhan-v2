import Image from "next/image";

export type BookCardDataType = {
  image: string;
  name: string;
  author: string;
  rating: number;
};
function BookCard({ name, author, rating, image }: BookCardDataType) {
  //format English number to Persian and replace / with .
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const formatToPersian = (num: number) =>
    num.toString().replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  const ratingString = rating.toFixed(1).replace(".", ".");
  const persianRating = formatToPersian(parseFloat(ratingString));

  return (
    <div className="flex flex-col gap-3 cursor-pointer items-center w-full border-r-[0.4px] first:border-r-0 [&:nth-child(6)]:border-r-0 border-secondary50">
      <Image src={image} alt={name} width={120} height={150} />
      <div className="flex gap-16">
        <div className="flex flex-col items-start">
          <p className="text-base text-text1">{name}</p>
          <p className=" text-text2 text-xs">{author}</p>
        </div>

        <p className="flex items-center self-start gap-1 text-text1 text-xs">
          <Image
            src={"/starIcon.svg"}
            alt={"star icon"}
            width={12}
            height={12}
          />
          {persianRating}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
