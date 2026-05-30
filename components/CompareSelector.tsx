"use client";

import { useState } from "react";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  avgPackage: number;
};

export default function CompareSelector({
  colleges,
}: {
  colleges: College[];
}) {
  const [collegeA, setCollegeA] = useState("");
  const [collegeB, setCollegeB] = useState("");

  const first = colleges.find((c) => c.id === collegeA);
  const second = colleges.find((c) => c.id === collegeB);

  return (
    <div>
      <div className="flex gap-4 mb-8">
        <select
          className="border p-3 rounded"
          value={collegeA}
          onChange={(e) => setCollegeA(e.target.value)}
        >
          <option value="">Select College A</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded"
          value={collegeB}
          onChange={(e) => setCollegeB(e.target.value)}
        >
          <option value="">Select College B</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {first && second && (
        <table className="w-full border">
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">
                Attribute
              </td>
              <td className="border p-3">
                {first.name}
              </td>
              <td className="border p-3">
                {second.name}
              </td>
            </tr>

            <tr>
              <td className="border p-3">Location</td>
              <td className="border p-3">{first.location}</td>
              <td className="border p-3">{second.location}</td>
            </tr>

            <tr>
              <td className="border p-3">Fees</td>
              <td className="border p-3">₹{first.fees}</td>
              <td className="border p-3">₹{second.fees}</td>
            </tr>

            <tr>
              <td className="border p-3">Rating</td>
              <td className="border p-3">⭐ {first.rating}</td>
              <td className="border p-3">⭐ {second.rating}</td>
            </tr>

            <tr>
              <td className="border p-3">Placements</td>
              <td className="border p-3">₹{first.avgPackage}</td>
              <td className="border p-3">₹{second.avgPackage}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}