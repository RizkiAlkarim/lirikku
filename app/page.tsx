import Link from "next/link";

export default function Home() {
  const date = new Date().getTime()
  const deadline = new Date("Jun 7, 2024 23:59:00").getTime()
  const distance = deadline - date
  const hour = 24 * 60 * 60 * 1000
  const remain = Math.floor(distance/hour)
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <p  className="text-6xl">Hello, h-
      <span className=" text-red-600">{`${remain} `}</span>
      :)</p>
      <Link className="text-2xl underline" href={"/post"}>go to post &gt;</Link>
    </main>
  );
}
