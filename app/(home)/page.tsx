import Auth from "@/components/auth-provider";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center">
        <Link href='/editor'>Go to editor</Link>
        <Link href='/post'>Go to post</Link>
        <Auth/>
    </main>
  );
}
