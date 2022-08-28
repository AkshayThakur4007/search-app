import React from "react";

import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();

  const productid = router.query.productId;
  return <div>ProductDetails For Product {productid}</div>;
};

export default ProductDetails;
