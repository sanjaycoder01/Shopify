import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
const ProductRating = ({ rating }) => {
  const starNumber = rating.rate;

  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
        />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon key={i} className="stroke-[#F1B61F] h-[20px]" />
      ))}
    </div>
  );
};

export default ProductRating;
