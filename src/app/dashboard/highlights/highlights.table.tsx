import {
  ColumnType,
  PageEvent,
  TableAdapter,
  TableColumn,
} from "@/components/table/models/table.model";
import { HighlightsModel } from "@/app/dashboard/highlights/highlights.model";
import { FetchDataFn } from "@/components/table/models/table-fetch-data-fn.model";

export default class HighlightsTable extends TableAdapter<HighlightsModel> {
  paginatorConfig = {
    onPageChange: (pageEvent: PageEvent) => {
      this._fetchDataFn({
        page: pageEvent.pageIndex,
        size: pageEvent.pageSize,
      });
    },
  };
  constructor(
    private _fetchDataFn: FetchDataFn,
    private _handleBookRemove: (id: string) => void,
  ) {
    super();
  }
  createColumns(): TableColumn<HighlightsModel>[] {
    return [
      {
        key: "row",
        label: "ردیف",
        type: ColumnType.ROW_NUMBER,
      },
      {
        key: "image",
        label: "عکس کتاب",
        type: ColumnType.IMAGE,
        value: (element) => element.image,
      },
      {
        key: "name",
        label: "نام کتاب",
        type: ColumnType.TEXT,
        value: (element) => element.name,
      },
      {
        key: "author",
        label: "نویسنده",
        type: ColumnType.TEXT,
        value: (element) => element.author,
      },
      {
        key: "count",
        label: "تعداد",
        type: ColumnType.NUMBER,
        value: (element) => element.count,
      },
      {
        key: "actions",
        label: "",
        type: ColumnType.ACTIONS,
        actions: {
          delete: {
            onClick: (element) => this._handleBookRemove(element.id),
            text: "حذف",
          },
        },
      },
    ];
  }
}
