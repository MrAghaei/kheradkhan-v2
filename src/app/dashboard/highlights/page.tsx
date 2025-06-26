"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import HighlightsTable from "@/app/dashboard/highlights/highlights.table";
import { PageableModel, PageModel } from "@/models/page.model";
import SearchBox from "@/components/main/SearchBox";
import { Table } from "@/components/table/Table";
import { ConfirmDialog } from "@/components/dialogs/ConfirmDialog";
import { FavoritesModel } from "@/app/dashboard/favorites/favorites.model";
import { supabase } from "@/lib/supabaseClient";

function Page() {
  //region functions
  // async function fetchHighlightsData(
  //   page: number,
  //   size: number,
  // ): Promise<PageModel<FavoritesModel>> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         content: [
  //           {
  //             id: "1",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "2",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "3",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "5",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "6",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "7",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "8",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "9",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "10",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "11",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "12",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "13",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //           {
  //             id: "14",
  //             image: "/book2Image.png",
  //             author: "فیودور داستایفسکی",
  //             name: "جنایت و مکافات",
  //             count: 3,
  //           },
  //         ],
  //         totalElements: 100,
  //         totalPages: 10,
  //         size,
  //         number: page,
  //       });
  //     }, 500);
  //   });
  // }

  async function fetchHighlightsData(
    page: number,
    size: number,
  ): Promise<PageModel<FavoritesModel>> {
    console.log("Fetching books from Supabase...");

    const {
      data: books,
      error,
      count: totalCount,
    } = await supabase
      .from("books")
      .select("id, title, author", { count: "exact" })
      .range(page * size, (page + 1) * size - 1);

    if (error) {
      console.error("Supabase error (books):", error);
      return {
        content: [],
        totalElements: 0,
        totalPages: 0,
        size,
        number: page,
      };
    }

    if (!books || books.length === 0) {
      console.log("No books found");
      return {
        content: [],
        totalElements: 0,
        totalPages: 0,
        size,
        number: page,
      };
    }

    console.log("Fetched books:", books);

    const content = await Promise.all(
      books.map(async (book) => {
        const { count, error: countError } = await supabase
          .from("highlights")
          .select("*", { count: "exact", head: true })
          .eq("book_id", book.id);

        if (countError) console.error("Highlight count error:", countError);

        return {
          id: book.id,
          name: book.title,
          author: book.author ?? "ناشناخته",
          image: "/book2Image.png",
          count: count ?? 0,
        };
      }),
    );

    console.log("Highlights per book:", content);

    return {
      content,
      totalElements: totalCount ?? 0,
      totalPages: Math.ceil((totalCount ?? 0) / size),
      size,
      number: page,
    };
  }

  const fetchHighlightsDataHandler = useCallback(
    async (pageable: PageableModel): Promise<void> => {
      console.log(pageable);
      setIsLoading(true);
      const data = await fetchHighlightsData(0, 10);
      console.log(data);
      if (tableRef.current) {
        tableRef.current.data = data;
      }
      setIsLoading(false);
    },
    [],
  );
  function handleClickBookRemove(id: string): void {
    setIsDeleteDialogOpen(true);
    setSelectedId(id);
  }
  //endregion

  //region hooks
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const tableRef = useRef<HighlightsTable>(null);

  useEffect(() => {
    tableRef.current = new HighlightsTable(
      fetchHighlightsDataHandler,
      handleClickBookRemove,
    );
    fetchHighlightsDataHandler({ page: 1, size: 1 });
  }, [fetchHighlightsDataHandler]);

  //endregion
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">هایلایت ها</h2>
        <SearchBox />
      </div>
      {tableRef.current && (
        <Table adapter={tableRef.current} loading={isLoading} />
      )}

      <ConfirmDialog
        open={isDeleteDialogOpen}
        onOpenChange={() => setIsDeleteDialogOpen(false)}
        onConfirm={async () => {
          if (!selectedId) return;
          console.log("deleted id", selectedId);
        }}
      />
    </div>
  );
}

export default Page;
