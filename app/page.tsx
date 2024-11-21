import Image from 'next/image';

export default async function Home() {

  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className='my-4'>Random Chuck Norris Jokes</h1>
      <div key={joke.id}>
        <p>{joke.value}</p>
      </div>
    </main>
  );
}
