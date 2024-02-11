"use client";
import React from "react";

const AddToCart = () => {
  const handleclick = () => {
    console.log("click");
  };

  return (
    <div>
      <button
        className="btn btn-primary mt-3"
        onClick={handleclick}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
