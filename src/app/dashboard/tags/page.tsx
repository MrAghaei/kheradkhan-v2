"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import TagsTable from "@/app/dashboard/tags/tags.table";
import { PageableModel, PageModel } from "@/models/page.model";
import { TagsModel } from "@/app/dashboard/tags/tags.model";
import { Table } from "@/components/table/Table";
import Button from "@/components/main/Button";
import { Plus } from "lucide-react";
import { EditTagDialog } from "@/components/dialogs/EditTagDialog";
import { ConfirmDialog } from "@/components/dialogs/ConfirmDialog";

function Page() {
  //region functions
  const fetchTagsDataHandler = useCallback(
    async (pageable: PageableModel): Promise<void> => {
      console.log(pageable);
      setIsLoading(true);
      const data = await fetchTagsData(0, 10);
      if (tableRef.current) {
        tableRef.current.data = data;
      }
      setIsLoading(false);
    },
    [],
  );

  const handleClickTagRemove = useCallback((id: string): void => {
    setIsDialogOpen(true);
    setSelectedId(id);
  }, []);

  const handleClickTagEdit = useCallback(() => setIsEditDialogOpen(true), []);
  //endregion

  //region hooks
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const tableRef = useRef<TagsTable>(null);

  useEffect(() => {
    tableRef.current = new TagsTable(
      fetchTagsDataHandler,
      handleClickTagRemove,
      handleClickTagEdit,
    );
    fetchTagsDataHandler({ page: 1, size: 1 });
  }, [fetchTagsDataHandler, handleClickTagRemove, handleClickTagEdit]);

  //endregion
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">برجسب ها</h2>
        <Button text={"افزودن برچسب"} type={"secondary"} leftIcon={<Plus />} />
      </div>
      {tableRef.current && (
        <Table adapter={tableRef.current} loading={isLoading} />
      )}

      <ConfirmDialog
        title={"حذف برچسب"}
        message={"آیا از حذف برچسب  مطمئن هستید؟"}
        open={isDeleteDialogOpen}
        onOpenChange={() => setIsDialogOpen(false)}
        onConfirm={async () => {
          if (!selectedId) return;
          console.log("deleted id:", selectedId);
        }}
      />
      <EditTagDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onConfirm={() => console.log("confirm edits")}
      />
    </div>
  );
}

async function fetchTagsData(
  page: number,
  size: number,
): Promise<PageModel<TagsModel>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        content: [
          { id: "1", tag: "سیاسی", count: 3, date: new Date() },
          { id: "2", tag: "سیاسی", count: 3, date: new Date() },
          { id: "3", tag: "سیاسی", count: 3, date: new Date() },
          { id: "5", tag: "سیاسی", count: 3, date: new Date() },
          { id: "6", tag: "سیاسی", count: 3, date: new Date() },
          { id: "7", tag: "سیاسی", count: 3, date: new Date() },
          { id: "8", tag: "سیاسی", count: 3, date: new Date() },
          { id: "9", tag: "سیاسی", count: 3, date: new Date() },
          { id: "10", tag: "سیاسی", count: 3, date: new Date() },
          { id: "11", tag: "سیاسی", count: 3, date: new Date() },
          { id: "12", tag: "سیاسی", count: 3, date: new Date() },
          { id: "13", tag: "سیاسی", count: 3, date: new Date() },
          { id: "14", tag: "سیاسی", count: 3, date: new Date() },
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
