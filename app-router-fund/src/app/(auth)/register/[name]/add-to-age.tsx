"use client";

import { useState } from "react";

export function AddToAge() {
  const [age, setAge] = useState(1);

  function handleAddAge() {
    setAge((age) => age + 1);
  }

  return (
    <div>
      Sua idade: {age}
      <button
        className="border-black border-2 px-2 rounded-md block"
        onClick={handleAddAge}
      >
        Adicionar
      </button>
    </div>
  );
}
