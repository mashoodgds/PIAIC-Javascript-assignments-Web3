function make_sandwich(items) {
  console.log("\nI'll make you a great sandwich:");

  for (var i = 0; i < items.length; i++) {
    console.log("  ...adding " + items[i]);
  }
  console.log("Your sandwich is ready!");
}
var items = ["beef", "cheese", "letuce", "honey"];
make_sandwich(items);
