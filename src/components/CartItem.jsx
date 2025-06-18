import React from "react";
import styled from "styled-components";

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <ItemWrapper>
      <Image src={item.image} alt={item.name} />
      <Info>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <QuantityControl>
          <button onClick={() => onUpdateQty(item.id, item.quantity - 1)} disabled={item.quantity === 1}>−</button>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              onUpdateQty(item.id, Math.max(1, parseInt(e.target.value || 1)))
            }
          />
          <button onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
        </QuantityControl>
      </Info>
      <button onClick={() => onRemove(item.id)} style={{ color: "red" }}>
        ❌
      </button>
    </ItemWrapper>
  );
}

/* STYLES */
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const Info = styled.div`
  flex: 1;
`;
const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 50px;
    padding: 0.3rem;
    text-align: center;
  }
`;
