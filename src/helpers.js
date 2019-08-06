// Function accepts array of product objects currently in cart
// returns total price of all items in cart
// set to two decimal places and return a number

export function calculateCartTotalPrice(cartArr) {
  let total = 0;
  for (let item of cartArr) {
    total += item.price;
  }
  return Number(total.toFixed(2));
}

// let cartArr = [
//   {
//     "name": "tv",
//     "price": 219.99,
//     "description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
//     "image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
//   },
//   {
//     "name": "microwave",
//     "price": 100.00,
//     "description": "Heat your food with the power of SCIENCE!",
//     "image_url": "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
//   },
// ]

// calculateCartTotalPrice(cartArr);