import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "@/components/buttons";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="flex justify-between gap-6 px-4 py-2 bg-blue-600 border-b border-slate-400">
      <Link href="/" className="flex">
        <Image src="/next.svg" width={90} height={40} alt="Logo" />
      </Link>

      <ul className="flex gap-4 font-semibold text-white">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/users">Users</Link>
        </li>

        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
