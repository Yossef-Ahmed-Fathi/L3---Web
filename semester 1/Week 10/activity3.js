let cart = [];

function addItem(name, price) {
  cart.push([name, price]);
  console.log(`Added ${name} to The Cart`);
}

function removeItem() {
  cart.pop();
  console.log("Removed Last Item");
}

function calculateTotal() {
  let total = 0;
  for (let x = 0; x < cart.length; x++) {
    total += cart[x][1];
  }
  console.log(`Total : ${total}$`);
}

function displayCart() {
  console.log("Name | Price");
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i][0] + " | " + cart[i][1] + "$");
  }
}

addItem("Notebook", 5);
addItem("Pen", 2);
addItem("Bag", 20);
removeItem();
displayCart();
calculateTotal();
