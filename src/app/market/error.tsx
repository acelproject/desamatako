"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Upsss! ada yang salah saat memuat data.</h1>
      <button onClick={() => reset}>try again</button>
    </div>
  );
}
