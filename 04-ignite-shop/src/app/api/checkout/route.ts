import { stripe } from "@/lib/stripe";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const priceId = body.priceId;

  if (!priceId) {
    return NextResponse.json({
      status: 400,
      error: "Price not found",
    });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return NextResponse.json(
    { checkoutUrl: checkoutSession.url },
    { status: 201 }
  );
}
