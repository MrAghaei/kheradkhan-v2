"use client";
import { useEffect, useState } from "react";
import TagsTable from "@/app/dashboard/tags/tags.table";
import { PageableModel, PageModel } from "@/models/page.model";
import { TagsModel } from "@/app/dashboard/tags/tags.model";
import { Table } from "@/components/table/Table";
import Button from "@/components/main/Button";
import { Plus } from "lucide-react";
import { DeleteDialog } from "@/components/dialogs/DeleteDialog";

function Page() {
  //region hooks
  const [table] = useState(
    () => new TagsTable(fetchTagsDataHandler, handleClickBookRemove),
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      await fetchTagsDataHandler({ page: 1, size: 1 });
    };
    loadData();
  }, []);

  const [isDeleteDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  //endregion

  //region functions

  async function fetchTagsDataHandler(pageable: PageableModel): Promise<void> {
    console.log(pageable);
    setIsLoading(true);
    const data = await fetchPaymentGateways(0, 10);
    table.data = data;
    console.log(table.data);
    setIsLoading(false);
  }

  function handleClickBookRemove(id: string): void {
    setIsDialogOpen(true);
    setSelectedId(id);
  }
  //endregion
  return (
    <div className="container mx-auto flex flex-col gap-10 mt-12" dir="rtl">
      <div className="flex justify-between pb-5 border-b border-primary">
        <h2 className="text-secondary text-4xl">برجسب ها</h2>
        <Button text={"افزودن برچسب"} type={"secondary"} leftIcon={<Plus />} />
      </div>
      <Table adapter={table} loading={isLoading} />
      <DeleteDialog
        title={"حذف برچسب"}
        message={"آیا از حذف برچسب مطمئن هستید؟"}
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

async function fetchPaymentGateways(
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
