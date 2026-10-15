import React from "react";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Banana",
    },
    {
      id: 3,
      name: "Coconut",
    },
  ];
  return (
    <div className="bg-gray-300 dark:bg-gray-800 flex flex-col gap-8 justify-center p-4 rounded-md">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          {product.name}
        </Link>
      ))}
    </div>
  );
};

export default Products;
