"use client";

import { useState, useEffect } from "react";
interface Joke {
  value: string;
}

export default function Home() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch an initial joke when the page loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Chuck Norris Joke</h1>
        {loading ? (
          <p className="text-gray-500 italic">Loading...</p>
        ) : (
          <p className="text-gray-700 text-lg italic">{joke?.value || "Loading joke..."}</p>
        )}
        <button
          onClick={fetchJoke}
          className="mt-6 bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300"
        >
          Next Joke
        </button>
      </div>
    </main>
  );
}
