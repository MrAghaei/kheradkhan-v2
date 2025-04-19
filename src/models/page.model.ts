export interface PageableModel {
  size?: number;
  page?: number;
}

export interface PageModel<T> {
  content: T[];
  totalElements?: number;
  totalPages?: number;
  size?: number;
  number?: number;
}
