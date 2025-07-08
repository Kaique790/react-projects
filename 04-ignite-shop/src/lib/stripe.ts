import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables");
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-06-30.basil",
  appInfo: {
    name: "Ignite Shop - 04",
  },
});
