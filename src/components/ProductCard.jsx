import React from "react";
import styled from "styled-components";



export default function ProductCard({ product, onAddToCart }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <Price>${product.price.toFixed(2)}</Price>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </Card>
  );
}

/* STYLES */
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
`;
const ProductName = styled.h2`
  font-size: 1.1rem;
`;
const Price = styled.p`
  color: green;
  font-weight: bold;
`;
