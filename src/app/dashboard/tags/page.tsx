"use client";
import { useEffect, useState } from "react";
import TagsTable from "@/app/dashboard/tags/tags.table";
import { PageableModel, PageModel } from "@/models/page.model";
import { TagsModel } from "@/app/dashboard/tags/tags.model";
import { Table } from "@/components/table/Table";

function Page() {
  //region hooks
  const [table] = useState(() => new TagsTable(fetchTagsDataHandler));
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      await fetchTagsDataHandler({ page: 1, size: 1 });
    };

    loadData();
  }, []);
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
  //endregion
  return (
    <div className="container mx-auto" dir="rtl">
      <Table adapter={table} loading={isLoading} />
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
