"use client";
"use client";
import { useState } from "react";
import { createShortURL } from "../../utils/api";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async () => {
    if (!longUrl) return; // if the user didn't write anything do nothing
    try {
      const result = await createShortURL(longUrl); // talk to the backend
      setShortUrl(result.short_url);
    } catch (error) {
      alert("Oops! Something went wrong!");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">📎 URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter long url"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="p-2 border rounded w-88 mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
      >
        Shorten URL
      </button>
      {shortUrl && (
        <div className="mt-6 text-green-600">
          Short Url:{" "}
          <a
            href={shortUrl}
            target="_blank"
            className="underline text-blue-500"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </main>
  );
}
