export const addItemToCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find((item) => cartItem.id === item.id);
  if (existingCartItem) {
    return cartItems.map((item) =>
      cartItem.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...cartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => cartItemToRemove.id === item.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((item) =>
      cartItemToRemove.id === item.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
