"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function submit() {
    const q = query.trim();
    if (!q) return;

    router.push(`/search?query=${encodeURIComponent(q)}`);
  }

  return (
    <div className="flex gap-2">
      <input
        className="w-full rounded-md border px-3 py-2"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button
        onClick={submit}
        className="rounded-md bg-primary px-4 py-2 text-white"
      >
        Search
      </button>
    </div>
  );
}
