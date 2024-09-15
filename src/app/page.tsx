"use client"

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function HomePage() {
  const data = useSession()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <h1>Public</h1>
  );
}
