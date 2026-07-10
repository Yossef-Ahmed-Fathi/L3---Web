let cart = {
  store: "Tech Mark",
  totalItems: 0,
  discount: false,
  addItem() {
    console.log(
      "Adding Item to The Cart" +
        this.store +
        ". Total Items : " +
        this.totalItems,
    );
  },
};
cart.addItem();
cart.deliveryFee = 15;
cart.totalItems = 3;
delete cart.discount;

let key = "store";

console.log(cart[key]);
console.log(cart);
