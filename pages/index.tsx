import type { InferGetStaticPropsType } from "next";
import getALlProducts from "../framework/shopify/products/get-all-products";

export async function getStaticProps() {
  const products = await getALlProducts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{JSON.stringify(products)}</div>;
}
