import {
  ColumnType,
  PageEvent,
  TableAdapter,
  TableColumn,
} from "@/components/table/models/table.model";
import { FetchDataFn } from "@/components/table/models/table-fetch-data-fn.model";
import { TagsModel } from "@/app/dashboard/tags/tags.model";

export default class TagsTable extends TableAdapter<TagsModel> {
  paginatorConfig = {
    onPageChange: (pageEvent: PageEvent) => {
      this._fetchDataFn({
        page: pageEvent.pageIndex,
        size: pageEvent.pageSize,
      });
    },
  };
  constructor(private _fetchDataFn: FetchDataFn) {
    super();
  }

  createColumns(): TableColumn<TagsModel>[] {
    return [
      {
        key: "row",
        label: "ردیف",
        type: ColumnType.ROW_NUMBER,
      },
      {
        key: "tagName",
        label: "برچسب",
        type: ColumnType.BADGE,
        value: (element) => element.tag,
      },
      {
        key: "count",
        label: "تعداد",
        type: ColumnType.NUMBER,
        value: (element) => element.count,
      },
      {
        key: "date",
        label: "آخرین تاریخ",
        type: ColumnType.NUMBER,
        value: (element) => 1,
      },
      {
        key: "actions",
        label: "ssss",
        type: ColumnType.ACTIONS,
        actions: {
          edit: {
            onClick: (element) => console.log("Edit", element.id),
            text: "تغییر برچسب",
          },
          delete: {
            onClick: (element) => console.log("Delete", element.id),
            text: "حذف",
          },
        },
      },
    ];
  }
}
