"use client";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchBox() {
  //region hooks
  const [query, setQuery] = useState("");
  //endregion
  return (
    <div className="relative max-w-md">
      <div className="relative flex items-center border-b border-text2 pb-1">
        <Search className="h-5 w-5 text-text2 absolute right-1" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجو"
          className="w-full pl-10 pr-8 py-1 bg-transparent placeholder-text2 text-sm outline-none text-right"
          dir="rtl"
        />
      </div>
    </div>
  );
}

export default SearchBox;
