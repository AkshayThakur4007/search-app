import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <>
      <h2>
        The product id is {productId} and reviewid is {reviewId}
      </h2>
    </>
  );
};

export default Review;
