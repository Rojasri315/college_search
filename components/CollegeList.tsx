"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CollegeList({
  colleges,
}: {
  colleges: any[];
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  const toggleCollege = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const handleCompare = () => {
    if (selected.length < 2) return;

    const query = selected
      .map((id) => `id=${id}`)
      .join("&");

    router.push(`/compare?${query}`);
  };

  return (
    <>
      <div className="mb-6">
        <button
          onClick={handleCompare}
          disabled={selected.length < 2}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Compare Selected ({selected.length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="border rounded-xl p-4 shadow"
          >
            <input
              type="checkbox"
              checked={selected.includes(college.id)}
              onChange={() => toggleCollege(college.id)}
              className="mb-3"
            />

            <Link href={`/college/${college.id}`}>
              <img
                src={college.imageUrl}
                alt={college.name}
                className="h-48 w-full object-cover rounded-lg"
              />

              <h2 className="text-xl font-semibold mt-4">
                {college.name}
              </h2>

              <p>{college.location}</p>
              <p>Fees: ₹{college.fees}</p>
              <p>Rating: ⭐ {college.rating}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}