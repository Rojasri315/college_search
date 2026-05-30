import { prisma } from "@/lib/prisma";

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string | string[] }>;
}) {
  const params = await searchParams;

  const ids = Array.isArray(params.id)
    ? params.id
    : params.id
    ? [params.id]
    : [];

  const colleges = await prisma.college.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  if (colleges.length < 2) {
    return <div className="p-10">Select at least 2 colleges.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        College Comparison
      </h1>

      <table className="w-full border">
        <tbody>
          <tr>
            <td className="border p-3 font-bold">Attribute</td>
            {colleges.map((college) => (
              <td
                key={college.id}
                className="border p-3 font-bold"
              >
                {college.name}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-3">Location</td>
            {colleges.map((college) => (
              <td key={college.id} className="border p-3">
                {college.location}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-3">Fees</td>
            {colleges.map((college) => (
              <td key={college.id} className="border p-3">
                ₹{college.fees}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-3">Rating</td>
            {colleges.map((college) => (
              <td key={college.id} className="border p-3">
                ⭐ {college.rating}
              </td>
            ))}
          </tr>

          <tr>
            <td className="border p-3">Placements</td>
            {colleges.map((college) => (
              <td key={college.id} className="border p-3">
                {college.placements}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}