"use client";
import React from "react";
import {
  ColumnType,
  TableAdapter,
  TableColumn,
} from "@/components/table/models/table.model";
import Pagination from "@/components/main/Pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import Image from "next/image";

interface TableProps<T> {
  adapter: TableAdapter<T>;
  loading?: boolean;
  className?: string;
}

// Mapping English digits to Persian digits
const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

// Helper to convert any number or string containing digits to Persian
const toPersianNumbers = (input: number | string): string =>
  input.toString().replace(/\d/g, (d) => persianDigits[+d]);

export function Table<T>({ adapter, loading, className = "" }: TableProps<T>) {
  const columns = adapter.createColumns();
  const data = adapter.data;

  //region hooks

  //endregion

  const renderCell = (column: TableColumn<T>, element: T, index: number) => {
    switch (column.type) {
      case ColumnType.IMAGE:
        return (
          <Image
            className="mx-auto"
            src={column.value?.(element)}
            alt={column.value?.(element)}
            width={35}
            height={35}
          />
        );
      case ColumnType.TEXT:
        return <span>{column.value?.(element, index) ?? ""}</span>;
      case ColumnType.NUMBER:
        const numValue = column.value?.(element, index) ?? 0;
        return <span className="text-text1">{toPersianNumbers(numValue)}</span>;
      case ColumnType.BADGE:
        const badgeValue = column.value?.(element, index);
        return (
          <span className="px-3 py-2 rounded text-base bg-secondary0 text-text1">
            {badgeValue}
          </span>
        );
      case ColumnType.ROW_NUMBER:
        return <span>{toPersianNumbers(index + 1)}</span>;
      case ColumnType.ACTIONS:
        return (
          <div className="flex space-x-2">
            {column.actions && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis strokeWidth={1} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {Object.entries(column.actions).map(([key, action]) => (
                    <DropdownMenuItem
                      onClick={() =>
                        setTimeout(() => action.onClick?.(element), 1)
                      }
                      className="cursor-pointer"
                      key={key}
                    >
                      {action.text}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="h-screen">در حال بارگذاری...</div>;
  }

  if (!data || data.content.length === 0) {
    return <div className="h-screen">داده ای یافت نشد!</div>;
  }

  return (
    <div className={`flex flex-col overflow-x-auto drop-shadow ${className}`}>
      <table className="min-w-full divide-y rounded-xl overflow-hidden divide-gray-200">
        <thead className="bg-background2">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-5 text-center font-medium text-text1 text-lg uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.content.map((element, index) => (
            <tr
              className={`${index % 2 === 0 ? "" : "bg-background"}`}
              key={index}
            >
              {columns.map((column) => {
                const tdClassName =
                  typeof column.className === "function"
                    ? column.className(element)
                    : column.className;
                return (
                  <td
                    key={`${column.key}-${index}`}
                    className={`px-6 py-6 text-center whitespace-nowrap ${tdClassName || ""}`}
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
        <div className="self-end">
          <Pagination totalPages={10} />
        </div>
      )}
    </div>
  );
}
