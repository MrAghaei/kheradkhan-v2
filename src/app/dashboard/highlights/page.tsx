"use client";
import { useEffect, useState } from "react";
import HighlightsTable from "@/app/dashboard/highlights/highlights.table";
import { PageableModel, PageModel } from "@/models/page.model";
import SearchBox from "@/components/main/SearchBox";
import { Table } from "@/components/table/Table";
import { ConfirmDialog } from "@/components/dialogs/ConfirmDialog";
import { FavoritesModel } from "@/app/dashboard/favorites/favorites.model";

function Page() {
  //region hooks
  const [table] = useState(
    () =>
      new HighlightsTable(fetchHighlightsDataHandler, handleClickBookRemove),
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      await fetchHighlightsDataHandler({ page: 1, size: 1 });
    };
    loadData();
  }, []);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  //endregion

  //region functions
  async function fetchHighlightsData(
    page: number,
    size: number,
  ): Promise<PageModel<FavoritesModel>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          content: [
            {
              id: "1",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "2",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "3",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "5",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "6",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "7",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "8",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "9",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "10",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "11",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "12",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "13",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
            {
              id: "14",
              image: "/book2Image.png",
              author: "فیودور داستایفسکی",
              name: "جنایت و مکافات",
              count: 3,
            },
          ],
          totalElements: 100,
          totalPages: 10,
          size,
          number: page,
        });
      }, 500);
    });
  }
  async function fetchHighlightsDataHandler(
    pageable: PageableModel,
  ): Promise<void> {
    console.log(pageable);
    setIsLoading(true);
    const data = await fetchHighlightsData(0, 10);
    table.data = data;
    setIsLoading(false);
  }
  function handleClickBookRemove(id: string): void {
    setIsDeleteDialogOpen(true);
    setSelectedId(id);
  }
  //endregion
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">هایلایت ها</h2>
        <SearchBox />
      </div>
      <Table adapter={table} loading={isLoading} />
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
