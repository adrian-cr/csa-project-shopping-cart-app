import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const location = useLocation();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderBar>
      <h2>🛒 ShopEasy</h2>
      <Nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
          Cart
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </Link>
        <Link to="/checkout" className={location.pathname === "/checkout" ? "active" : ""}>
          Checkout
        </Link>
      </Nav>
    </HeaderBar>
  );
}

const HeaderBar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background-color: #24292f;
  color: white;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &.active {
      text-decoration: underline;
    }
  }
`;
const CartBadge = styled.span`
  background: tomato;
  color: white;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 50%;
  margin-left: 0.3rem;
`;
