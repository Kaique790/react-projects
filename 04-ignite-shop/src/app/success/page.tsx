import { stripe } from "@/lib/stripe";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  return (
    <>
      <h1>
        Compra efetuada <span>{sessionId}</span> <br />
        Seu Nome 😀:
      </h1>
      <p>{session.customer_details?.name}</p>
    </>
  );
}
