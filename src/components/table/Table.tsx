// components/Table/Table.tsx
import React from "react";
import {
  ColumnType,
  TableAdapter,
  TableColumn,
} from "@/components/table/models/table.model";

interface TableProps<T> {
  adapter: TableAdapter<T>;
  loading?: boolean;
  className?: string;
}

export function Table<T>({ adapter, loading, className = "" }: TableProps<T>) {
  const columns = adapter.createColumns();
  const data = adapter.data;

  const renderCell = (column: TableColumn<T>, element: T, index: number) => {
    switch (column.type) {
      case ColumnType.TEXT:
        return <span>{column.value?.(element, index) ?? ""}</span>;
      case ColumnType.NUMBER:
        return <span>{column.value?.(element, index) ?? 0}</span>;
      case ColumnType.BADGE:
        const badgeValue = column.value?.(element, index);
        return (
          <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
            {badgeValue}
          </span>
        );
      case ColumnType.ROW_NUMBER:
        return <span>{index + 1}</span>;
      case ColumnType.ACTIONS:
        return (
          <div className="flex space-x-2">
            {column.actions &&
              Object.entries(column.actions).map(([key, action]) => {
                if (action.isVisible && !action.isVisible(element)) return null;
                return (
                  <button
                    key={key}
                    onClick={() => action.onClick?.(element)}
                    className="p-1 rounded hover:bg-gray-100"
                  >
                    {action.icon}
                  </button>
                );
              })}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || data.content.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-red-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.content.map((element, index) => (
            <tr key={index}>
              {columns.map((column) => {
                const tdClassName =
                  typeof column.className === "function"
                    ? column.className(element)
                    : column.className;
                return (
                  <td
                    key={`${column.key}-${index}`}
                    className={`px-6 py-4 whitespace-nowrap ${tdClassName || ""}`}
                  >
                    {renderCell(column, element, index)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {adapter.paginatorConfig && (
        <div className="mt-4 flex justify-between items-center">
          <div>
            Showing {data.number * data.size + 1} to{" "}
            {Math.min((data.number + 1) * data.size, data.totalElements)} of{" "}
            {data.totalElements} entries
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() =>
                adapter.paginatorConfig?.onPageChange({
                  pageIndex: data.number - 1,
                  pageSize: data.size,
                })
              }
              disabled={data.number === 0}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                adapter.paginatorConfig?.onPageChange({
                  pageIndex: data.number + 1,
                  pageSize: data.size,
                })
              }
              disabled={data.number >= data.totalPages - 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
