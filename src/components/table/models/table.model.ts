import { PageModel } from "@/models/page.model";

export interface PageEvent {
  pageIndex: number;
  pageSize: number;
}

export interface PaginatorConfig {
  onPageChange: (pageEvent: PageEvent) => void;
}

export enum ColumnType {
  TEXT = "TEXT",
  NUMBER = "NUMBER",
  BADGE = "BADGE",
  ROW_NUMBER = "ROW_NUMBER",
  ACTIONS = "ACTIONS",
}

export interface TableColumn<T> {
  key: string;
  label: string;
  type: ColumnType;
  value?: (element: T, index?: number) => any;
  actions?: {
    [key: string]: {
      text?: string;
      onClick?: (element: T) => void;
    };
  };
  className?: string | ((element: T) => string);
}

export abstract class TableAdapter<T> {
  paginatorConfig?: PaginatorConfig;
  data?: PageModel<T> | null;

  abstract createColumns(): TableColumn<T>[];
}
