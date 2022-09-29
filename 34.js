var pizzas = ["pepperoni", "hawaiian", "veggie"];
// # Print the names of all the pizzas.
// for pizza in favorite_pizzas:
//     print(pizza)

// print("\n")

// # Print a sentence about each pizza.
// for pizza in favorite_pizzas:
//     print("I really love " + pizza + " pizza!")

// print("\nI really love pizza!")

for (var i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

for (var i = 0; i < pizzas.length; i++) {
  console.log(`I really love  ${pizzas[i]}pizza!`);
}
console.log(`I really love pizza!`);
