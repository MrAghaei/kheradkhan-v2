import {
  ColumnType,
  PageEvent,
  TableAdapter,
  TableColumn,
} from "@/components/table/models/table.model";
import { FetchDataFn } from "@/models/table-fetch-data-fn.model";
import React from "react";

interface AllTableData {
  id: string;
  businessName: string;
  bankAccount: string;
  createdAt: string;
}

class TagsTable extends TableAdapter<AllTableData> {
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

  createColumns(): TableColumn<AllTableData>[] {
    return [
      {
        key: "id",
        label: "ID",
        type: ColumnType.TEXT,
        value: (element) => element.id,
        className: (element) =>
          element.businessName === "Ali" ? "bg-red-100" : "bg-green-100",
      },
      {
        key: "businessName",
        label: "Business Name",
        type: ColumnType.BADGE,
        value: (element) => element.businessName,
      },
      {
        key: "bankAccount",
        label: "Bank Account",
        type: ColumnType.TEXT,
        value: (element) => element.bankAccount,
      },
      {
        key: "status",
        label: "Status",
        type: ColumnType.BADGE,
        value: () => "Active", // Example badge value
      },
      {
        key: "actions",
        label: "Actions",
        type: ColumnType.ACTIONS,
        actions: {
          edit: {
            isVisible: () => true,
            onClick: (element) => console.log("Edit", element.id),
            icon: <span>✏️</span>,
          },
          delete: {
            isVisible: () => true,
            onClick: (element) => console.log("Delete", element.id),
            icon: <span>🗑</span>,
          },
        },
      },
    ];
  }
}
