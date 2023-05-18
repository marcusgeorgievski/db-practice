"use client";
import { useEffect } from "react";

type Props = {};

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-2 font-semibold text-blue-600 bg-transparent bg-blue-100 border rounded border-blue-600/50 hover:bg-blue-600/10"
      >
        Try again
      </button>
    </div>
  );
}
