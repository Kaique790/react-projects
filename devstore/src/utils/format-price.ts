export function formatPrice(price: number, cents: boolean) {
  const formated = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: cents ? 2 : 0,
    minimumFractionDigits: cents ? 2 : 0,
  });

  return formated;
}
