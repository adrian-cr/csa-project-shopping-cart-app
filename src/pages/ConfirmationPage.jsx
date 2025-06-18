import React from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default function ConfirmationPage() {
  const location = useLocation();
  const name = location.state?.name || "Customer";

  return (
    <Wrapper>
      <h1>Thank You, {name}!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Go back to shopping</Link>
    </Wrapper>
  );
}
