import { stripe } from "@/lib/stripe";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: false,
  },
};

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/");
  }

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
