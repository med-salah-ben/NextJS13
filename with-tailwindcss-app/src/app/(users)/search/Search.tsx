//to use client component
"use client";
// like navigation => redirect in reactjs
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter The Search term"
        onChange={(e) => setSearch(e.target.value)}
        className="border border-black "
      />
      <button type="submit" className="btn px-5 py-1 bg-blue-500 text-white m-1 rounded-md">
        Search
      </button>
    </form>
  );
};

export default Search;
