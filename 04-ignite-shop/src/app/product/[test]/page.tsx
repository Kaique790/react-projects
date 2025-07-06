"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();

  return <h1>Produto: {params.test}</h1>;
}
