"use client";

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { Redirect } from "next";

import React from "react";
import Link from "next/link";

type Props = {};

export default function Dashboard({}: Props) {
  // const session = getServerSession();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <p>
        You must be logged in...{" "}
        <Link href="/" className="text-blue-600">
          Go back home
        </Link>
      </p>
    );
  } else {
    return (
      <div>
        <p>User: </p>
      </div>
    );
  }
}
