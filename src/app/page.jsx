'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [albumId, setAlbumId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/album/" + albumId);
  }

  return (
    <div>
      <h1>Search by album id</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Album id:
          <input type="text" onChange={(e) => setAlbumId(e.target.value)} value={albumId} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}