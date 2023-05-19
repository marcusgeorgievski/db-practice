"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

interface Props {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // Loading state pending?
  const [isFetching, setIsFetching] = useState(false); // Are we waiting for server to respond
  const isMutating = isFetching || isPending; // Combine these two

  const follow = async () => {
    setIsFetching(true);

    const res = await fetch("/api/follow", {
      method: "POST",
      body: JSON.stringify(targetUserId),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfollow = async () => {
    setIsFetching(true);

    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: "DELETE",
    });
    console.log("\n\n\nTEST here");

    setIsFetching(false);

    console.log(res);

    startTransition(() => {
      router.refresh();
    });
  };

  useTransition;
  if (isFollowing) {
    return (
      <button
        onClick={unfollow}
        className="px-2 font-semibold border border-red-500 rounded text-slate-600 bg-slate-200"
      >
        {!isMutating ? `Unfollow` : "..."}
      </button>
    );
  } else {
    return (
      <button
        onClick={follow}
        className="px-2 font-semibold border border-green-500 rounded text-slate-600 bg-slate-200"
      >
        {!isMutating ? `Follow` : "..."}
      </button>
    );
  }
}
