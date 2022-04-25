const pizzaToppings = ["cheese", "sausage", "pepperoni", "mushrooms"];
for (let name of pizzaToppings) {
  console.log(name);
}
function greetCustomer(size, crust, toppings) {
  return `Welcome to Pizza Ranch, our toppings are ${pizzaToppings}!`;
}
console.log(greetCustomer(name));

function getPizzaOrder(size, crust, toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} ... coming up!`);
}
getPizzaOrder("large", "thick", "cheese, sausage, and mushrooms");
getPizzaOrder.length;

function preparePizza([size, crust, toppings]) {
  const pizza = {
    size: "large",
    crust: "thin",
    topping: ["mushroom", "cheese", "bell pepper"]
  }
  return `cooking ${pizza}`;
};
console.log(preparePizza);

function servePizza({pizza}) {
  console.log(
    `Order up! Here's your ${size} ${crust} crust pizza with ${toppings} ... Enjoy!`
  );
}
servePizza();

function getPizzaStatus(...callback) {
  const size = prompt("Please enter your pizza size: ");
  const crust = prompt("Please enter your crust flavor: ");
  const toppings = prompt("Please select your toppings: ");
  alert(callback[2](size, crust, toppings));
  alert(callback[1](size, crust, toppings));
  alert(callback[0](size, crust, toppings));
}