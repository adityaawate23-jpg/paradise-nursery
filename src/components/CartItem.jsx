function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>

      <button>+</button>
      <button>-</button>
      <button>Delete</button>
    </div>
  );
}

export default CartItem;
