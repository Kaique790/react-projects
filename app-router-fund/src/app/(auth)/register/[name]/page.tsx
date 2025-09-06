import React from "react";
import { AddToAge } from "./add-to-age";

interface RegisterProps {
  params: {
    name: string;
  };
}

export default async function Register({ params }: RegisterProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      vamos te registrar como <span className="font-bold">{params.name}</span>
      <AddToAge />
    </div>
  );
}
