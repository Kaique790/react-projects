import z from "zod";
import data from "../data.json";
import { NextRequest } from "next/server";

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_: NextRequest, { params }: RouteParams) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { slug } = await params;
  const ValidSlug = z.string().parse(slug);

  const product = data.products.find((product) => product.slug === ValidSlug);

  if (!product) {
    return Response.json(
      { message: "Product not found" },
      {
        status: 400,
      },
    );
  }

  return Response.json(product);
}
