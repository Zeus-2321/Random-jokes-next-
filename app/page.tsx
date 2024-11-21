import Image from 'next/image';

export default async function Home() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Chuck Norris Joke</h1>
        <p className="text-gray-700 text-lg italic">{joke.value}</p>
      </div>
    </main>
  );
}
