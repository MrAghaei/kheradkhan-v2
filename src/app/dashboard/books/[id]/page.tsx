"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import HeadInfoBox from "@/components/main/HeadInfoBox";
import Button from "@/components/main/Button";
import Image from "next/image";
import { Plus } from "lucide-react";
import HighlightCard from "@/components/books/HighlightCard";
import Pagination from "@/components/main/Pagination";
import { AddHighlightDialog } from "@/components/dialogs/AddHighlightDialog";

function Page() {
  const { id } = useParams(); // book id from URL
  const supabase = createClientComponentClient();
  const [bookData, setBookData] = useState<any>(null);
  const [highlightData, setHighlightData] = useState<any[]>([]);
  const [isAddHighlightDialogOpen, setIsAddHighlightDialogOpen] =
    useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      // Fetch book
      const { data: book, error: bookError } = await supabase
        .from("books")
        .select("*")
        .eq("id", id)
        .single();

      // Fetch highlights
      const { data: highlights, error: highlightError } = await supabase
        .from("highlights")
        .select("*")
        .eq("book_id", id)
        .order("created_at", { ascending: false });

      if (!bookError) setBookData(book);
      if (!highlightError) setHighlightData(highlights);
    };

    fetchData();
  }, [id]);

  if (!bookData)
    return <p className="text-center mt-20">در حال بارگذاری کتاب...</p>;

  return (
    <div className="container mx-auto flex flex-col">
      <HeadInfoBox
        image={bookData.image_url || "/book2Image.png"}
        title={bookData.title}
        text={bookData.description}
        type="book"
        secondTitle={bookData.author}
        buttons={[
          <Button
            key="1"
            text="نظر کاربران"
            type="secondary"
            leftIcon={
              <Image
                src="/userReviewIcon.svg"
                alt="user review icon"
                width={16}
                height={16}
              />
            }
          />,
          <Button
            key="2"
            text="افزودن نظر"
            type="secondary"
            leftIcon={<Plus />}
          />,
          <Button
            key="3"
            text="مرور روزانه"
            type="secondary"
            leftIcon={
              <Image
                src="/reviewIcon.svg"
                alt="review icon"
                width={16}
                height={16}
              />
            }
          />,
        ]}
      />

      <div
        className="flex justify-between items-center pb-4 border-b-[0.5px] border-primary"
        dir="rtl"
      >
        <h2 className="text-secondary text-3xl">هایلایت ها</h2>
      </div>

      {highlightData.length === 0 ? (
        <p className="mt-10 text-center text-muted">
          هنوز هایلایتی برای این کتاب ثبت نشده است.
        </p>
      ) : (
        highlightData.map((highlight, index) => (
          <HighlightCard
            key={highlight.id || index}
            text={highlight.text}
            tags={highlight.tags || []}
            buttons={[] /* Customize your buttons if needed */}
          />
        ))
      )}

      <AddHighlightDialog
        open={isAddHighlightDialogOpen}
        onOpenChange={setIsAddHighlightDialogOpen}
      />

      <div className="self-start">
        <Pagination totalPages={1} initialPage={1} />
      </div>
    </div>
  );
}

export default Page;
