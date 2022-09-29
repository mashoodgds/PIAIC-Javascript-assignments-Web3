const locations = ["Japan", "America", "Turkey", "Iran", "China"];
console.log("Orignal Array");
console.log(locations);
let sortedLocation = [];
for (var i = 0; i < locations.length; i++) {
  sortedLocation.push(locations[i]);
}
console.log("Sorted Array");
console.log(sortedLocation.sort());
console.log("Orignal Array");
console.log(locations);
console.log("printing in reverse alphabetic order");

console.log(sortedLocation.reverse());
console.log("Orignal Array");
console.log(locations);
console.log(" reversed Orignal Array");
console.log(locations.reverse());
console.log("back to Orignal Array");
console.log(locations.reverse());
console.log("Orignal to alphabetic");
console.log(locations.sort());
console.log("Orignal to reverse alphabetic order");
console.log(locations.reverse());
