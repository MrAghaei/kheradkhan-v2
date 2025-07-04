"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { PageableModel, PageModel } from "@/models/page.model";
import { Table } from "@/components/table/Table";
import SearchBox from "@/components/main/SearchBox";
import { FavoritesModel } from "@/app/dashboard/favorites/favorites.model";
import FavoritesTable from "@/app/dashboard/favorites/favorites.table";
import { ConfirmDialog } from "@/components/dialogs/ConfirmDialog";

function Page() {
  //region functions
  const fetchFavoritesDataHandler = useCallback(
    async (pageable: PageableModel): Promise<void> => {
      console.log("Loading page:", pageable);
      setIsLoading(true);
      const data = await fetchFavoriteBooks(0, 10);
      if (tableRef.current) {
        tableRef.current.data = data;
      }

      setIsLoading(false);
    },
    [],
  );

  const handleClickBookRemove = useCallback((id: string): void => {
    setIsDialogOpen(true);
    setSelectedId(id);
  }, []);

  //endregion

  //region hooks
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const tableRef = useRef<FavoritesTable>(null);

  useEffect(() => {
    tableRef.current = new FavoritesTable(
      fetchFavoritesDataHandler,
      handleClickBookRemove,
    );
    fetchFavoritesDataHandler({ page: 1, size: 1 });
  }, [fetchFavoritesDataHandler, handleClickBookRemove]);

  //endregion
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">علاقه مندی ها</h2>
        <SearchBox />
      </div>
      {tableRef.current && (
        <Table adapter={tableRef.current} loading={isLoading} />
      )}

      <ConfirmDialog
        title={"حذف کتاب"}
        message={"آیا از حذف کتاب مطمئن هستید؟"}
        open={isDeleteDialogOpen}
        onOpenChange={() => setIsDialogOpen(false)}
        onConfirm={async () => {
          if (!selectedId) return;
          console.log("deleted id:", selectedId);
        }}
      />
    </div>
  );
}

async function fetchFavoriteBooks(
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
export default Page;
