import {
  ColumnType,
  PageEvent,
  TableAdapter,
  TableColumn,
} from "@/components/table/models/table.model";
import { FetchDataFn } from "@/components/table/models/table-fetch-data-fn.model";
import { TagsModel } from "@/app/dashboard/tags/tags.model";
import moment from "moment-jalaali";

export default class TagsTable extends TableAdapter<TagsModel> {
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
    private _handleTagRemove: (id: string) => void,
    private _handleTagEdit: () => void,
  ) {
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
        value: (element) => moment(element.date).format("jYYYY/jMM/jDD"),
      },
      {
        key: "actions",
        label: "",
        type: ColumnType.ACTIONS,
        actions: {
          edit: {
            onClick: (element) => this._handleTagEdit(),
            text: "تغییر برچسب",
          },
          delete: {
            onClick: (element) => this._handleTagRemove(element.id),
            text: "حذف",
          },
        },
      },
    ];
  }
}
