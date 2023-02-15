"use client";
import { useEffect } from "react";
interface ErrorType {
  error: string;
  reset(): HTMLFormElement;
}
export default function Error({
  error,
  reset,
}: {
  error: ErrorType;
  reset: any;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10 ">
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
