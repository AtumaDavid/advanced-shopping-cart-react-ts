import React from "react";
import { Navbar as NavBar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBar sticky="top" className="bg-white shadow-sm mb-4">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <div>
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
              onClick={openCart}
            >
              <HiShoppingCart />
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          </div>
        )}
      </Container>
    </NavBar>
  );
}
