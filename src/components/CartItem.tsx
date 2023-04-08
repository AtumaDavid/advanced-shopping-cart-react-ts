import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import StoreItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && <span className="text-muted">x{quantity}</span>}
        </div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
}
