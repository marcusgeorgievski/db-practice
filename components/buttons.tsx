"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex gap-2">
        <Link href={`/dashboard`}>
          <Image
            src={session.user?.image ?? "mememan.webp"}
            width={28}
            height={28}
            alt=""
            className="rounded-full"
          />
        </Link>
        <div className="flex flex-col items-start">
          <h3 className="text-xs">{session.user?.name}</h3>
          <SignOutButton />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="px-1 text-sm font-light border border-blue-800 rounded"
    >
      Sign In
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="text-xs font-light text-slate-300"
    >
      Sign Out
    </button>
  );
}
