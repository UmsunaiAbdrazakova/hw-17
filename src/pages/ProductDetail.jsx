import React from "react";
import { useParams } from "react-router-dom";
import { IPHONE_PRODUCTS } from "./Products";
import "./ProductDetail.css";

export const ProductDetail = () => {
  const params = useParams();
  const product = IPHONE_PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">
          <b>Price: ${product.price}</b>
        </p>
        <p className="product-description">{product.discription}</p>
      </div>
    </div>
  );
};
