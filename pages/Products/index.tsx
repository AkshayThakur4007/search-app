import Link from "next/link";
import React from "react";

const Products = () => {
  const id = "1";
  return (
    <>
      <Link href={`Products/${[id]}`}>
        <h3>Product 1</h3>
      </Link>

      <h3>Product 2</h3>
      <h3>Product 3</h3>
    </>
  );
};

export default Products;
