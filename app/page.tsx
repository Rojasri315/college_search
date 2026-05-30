// 
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import CollegeList from "@/components/CollegeList";
import { cookies } from "next/headers";

async function getColleges(search: string) {
  const res = await fetch(
    `http://localhost:3000/api/colleges?search=${search}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch colleges");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;

  const search = params.search || "";

  const colleges = await getColleges(search);

  const cookieStore = await cookies();
  const token = cookieStore.get("token");
 return (
  <div className="p-10">
    <h1 className="text-3xl font-bold mb-6">
      College Discovery Platform
    </h1>

    {!token ? (
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Sign Up
        </Link>
      </div>
    ) : (
      <>
        <SearchBar />
        <CollegeList colleges={colleges} />
      </>
    )}
  </div>
);
}