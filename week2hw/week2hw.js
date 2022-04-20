let pizzaPlace = "Minskys";
let numberOfToppings = 6;

console.log(
  `Here at ${pizzaPlace} we now offer ${numberOfToppings} toppings on our latest creation!`
);

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

if (numberOfToppings < 10) {
  ("Quality, not quantity.");
} else {
  ("A whole lot of pizza.");
}
