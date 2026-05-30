"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = () => {
    router.push(`/?search=${search}`);
  };

  return (
    <div className="flex gap-4 mb-8">
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-full"
      />

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}