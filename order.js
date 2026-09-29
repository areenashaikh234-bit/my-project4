// Simple Food Delivery App

const menu = [
  { id: 1, name: "Burger", price: 120 },
  { id: 2, name: "Pizza", price: 250 },
  { id: 3, name: "Biryani", price: 200 },
  { id: 4, name: "Cold Drink", price: 40 },
];

const cart = [];

function showMenu() {
  console.log("\n--- Menu ---");
  menu.forEach(function (item) {
    console.log(item.id + ". " + item.name + " - Rs." + item.price);
  });
}

function addToCart(id, qty) {
  const item = menu.find(function (m) {
    return m.id === id;
  });
  if (!item) {
    console.log("Item not found");
    return;
  }
  cart.push({ name: item.name, price: item.price, qty: qty });
  console.log("Added: " + qty + " x " + item.name);
}

function getTotal() {
  let total = 0;
  cart.forEach(function (c) {
    total += c.price * c.qty;
  });
  return total;
}

function showBill() {
  console.log("\n--- Your Order ---");
  cart.forEach(function (c) {
    console.log(c.name + " x" + c.qty + " = Rs." + c.price * c.qty);
  });
  const total = getTotal();
  const delivery = total > 300 ? 0 : 30;
  console.log("Delivery fee: Rs." + delivery);
  console.log("Total: Rs." + (total + delivery));
}

function placeOrder(address) {
  console.log("\nOrder placed! Delivering to: " + address);
  console.log("Estimated time: 30 minutes");
}

showMenu();
addToCart(1, 2);
addToCart(4, 2);
addToCart(2, 1);
showBill();
placeOrder("College Hostel, Room 12");