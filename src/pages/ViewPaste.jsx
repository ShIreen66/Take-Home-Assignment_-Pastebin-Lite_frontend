import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPaste } from "../api";

export default function ViewPaste() {
  const { id } = useParams();
  const [paste, setPaste] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPaste(id)
      .then(setPaste)
      .catch(() => setError("Paste not found or expired"));
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-red-400">
        {error}
      </div>
    );
  }

  if (!paste) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <pre className="bg-gray-800 p-4 rounded whitespace-pre-wrap">
        {paste.content}
      </pre>
    </div>
  );
}
