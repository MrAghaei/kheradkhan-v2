"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Convert Western numbers to Persian/Farsi numbers
function toPersianNumber(num: number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[Number.parseInt(digit)]);
}

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalPages,
  initialPage = 1,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [displayMode, setDisplayMode] = useState<"start" | "middle" | "end">(
    "start",
  );

  // Update display mode when current page changes
  useEffect(() => {
    if (currentPage <= 3) {
      setDisplayMode("start");
    } else if (currentPage >= totalPages - 2) {
      setDisplayMode("end");
    } else {
      setDisplayMode("middle");
    }

    // Call the onPageChange callback
    onPageChange?.(currentPage);
  }, [currentPage, totalPages, onPageChange]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (displayMode === "start") {
      // Show first 3 pages
      for (let i = 1; i <= Math.min(3, totalPages); i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === i ? "text-teal-500 font-medium" : "text-gray-600"
            }`}
          >
            {toPersianNumber(i)}
          </button>,
        );
      }

      // Show ellipsis and last page if total pages > 3
      if (totalPages > 3) {
        pages.push(
          <span
            key="ellipsis"
            className="w-8 h-8 flex items-center justify-center text-gray-600"
          >
            ...
          </span>,
        );
        pages.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === totalPages
                ? "text-teal-500 font-medium"
                : "text-gray-600"
            }`}
          >
            {toPersianNumber(totalPages)}
          </button>,
        );
      }
    } else if (displayMode === "middle") {
      // Show first page
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600"
        >
          {toPersianNumber(1)}
        </button>,
      );

      // Show ellipsis if current page > 3
      pages.push(
        <span
          key="ellipsis1"
          className="w-8 h-8 flex items-center justify-center text-gray-600"
        >
          ...
        </span>,
      );

      // Show current page and adjacent pages
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === i ? "text-teal-500 font-medium" : "text-gray-600"
            }`}
          >
            {toPersianNumber(i)}
          </button>,
        );
      }

      // Show ellipsis and last page
      pages.push(
        <span
          key="ellipsis2"
          className="w-8 h-8 flex items-center justify-center text-gray-600"
        >
          ...
        </span>,
      );
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600"
        >
          {toPersianNumber(totalPages)}
        </button>,
      );
    } else if (displayMode === "end") {
      // Show first page
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600"
        >
          {toPersianNumber(1)}
        </button>,
      );

      // Show ellipsis
      pages.push(
        <span
          key="ellipsis"
          className="w-8 h-8 flex items-center justify-center text-gray-600"
        >
          ...
        </span>,
      );

      // Show last 3 pages
      for (let i = Math.max(totalPages - 2, 2); i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === i ? "text-teal-500 font-medium" : "text-gray-600"
            }`}
          >
            {toPersianNumber(i)}
          </button>,
        );
      }
    }

    return pages;
  };

  return (
    <div
      className="flex items-center justify-center mt-10  rounded-lg p-2 self-end"
      dir="rtl"
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm disabled:opacity-50"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="flex items-center mx-4 space-x-5 rtl:space-x-reverse">
        {renderPageNumbers()}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm disabled:opacity-50"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}
