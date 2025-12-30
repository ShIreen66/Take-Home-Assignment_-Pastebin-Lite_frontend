import { useState } from "react";
import { createPaste } from "../api";

export default function CreatePaste() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setResult("");

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    try {
      const res = await createPaste({
        content,
        ttl_seconds: ttl ? Number(ttl) : undefined,
        max_views: views ? Number(views) : undefined
      });

      setResult(res.url);
      setContent("");
      setTtl("");
      setViews("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-xl w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Pastebin Lite</h1>

        <textarea
          className="w-full p-3 text-black rounded mb-3"
          rows="6"
          placeholder="Enter paste content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex gap-3 mb-3">
          <input
            type="number"
            placeholder="TTL (seconds)"
            className="w-1/2 p-2 rounded text-black"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Views"
            className="w-1/2 p-2 rounded text-black"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded font-semibold"
        >
          Create Paste
        </button>

        {result && (
          <p className="mt-4 break-all">
            Share URL:{" "}
            <a href={result} className="text-blue-400 underline">
              {result}
            </a>
          </p>
        )}

        {error && <p className="mt-3 text-red-400">{error}</p>}
      </div>
    </div>
  );
}
