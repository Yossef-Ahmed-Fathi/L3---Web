function Car(model, pricePerDay, days) {
  this.model = model;
  this.pricePerDay = pricePerDay;
  this.days = days;

  this.showCar = function () {
    console.log(
      `Car: ${this.model}, Price per day: ${this.pricePerDay}, Days: ${this.days}`,
    );
  };
}

Object.defineProperty(Car.prototype, "totalPrice", {
  get: function () {
    return this.pricePerDay * this.days;
  },
  set: function (value) {
    this.days = Math.floor(value / this.pricePerDay);
  },
});

let car1 = new Car("Toyota Camry", 50, 5);
let car2 = new Car("BMW X5", 120, 3);

car1.showCar();
car2.showCar();
console.log("");
console.log(`Car 1 Total Price : ${car1.totalPrice}`);
console.log(`Car 2 Total Price : ${car2.totalPrice}`);

car1.totalPrice = 300;
console.log(`Car 1 Days Updated to ${car1.days}`);
