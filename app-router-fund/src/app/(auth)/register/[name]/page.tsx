import React from "react";

interface RegisterProps {
  params: {
    name: string;
  };
}

export default function Register({ params }: RegisterProps) {
  return (
    <div>
      vamos te registrar como <span className="font-bold">{params.name}</span>
    </div>
  );
}
