// Create CartItem type, cart array, and calculateTotal function

// Your code here 👇

type CartItem = {
  productId: number;
  name: string;
  quantity: number;
  price: number;
};

const cart: CartItem[] = [
  {
    productId: 1,
    name: "Laptop",
    quantity: 1,
    price: 999
  },
  {
    productId: 2,
    name: "Mouse",
    quantity: 2,
    price: 25
  }
];

function calculateTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

console.log(calculateTotal(cart));