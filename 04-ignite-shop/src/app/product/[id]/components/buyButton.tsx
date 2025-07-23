"use client";

import axios from "axios";
import { useState } from "react";

export function BuyButton({ priceId }: { priceId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleBuyProduct() {
    setLoading(true);

    try {
      const response = await axios.post("/api/checkout", {
        priceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch {
      alert("Falha ao redirecionar para o checkout!");
    } finally {
      setLoading(true);
    }
  }

  return (
    <button disabled={loading} onClick={handleBuyProduct}>
      {loading ? "Redirecionando" : "Comprar agora"}
    </button>
  );
}
