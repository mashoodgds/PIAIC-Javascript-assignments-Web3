// Intentional Error: If you haven’t received an array index error
// in one of your programs yet, try to make one happen. Change an
// index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

var cities = ["Tokyo", "Osaka", "Montio caio", "Sao", "London", "Karachi"];
// error occure cuz the 6 elemnet is not exist
// error correction by adding 6 element
cities.push("Mumbai");
var favCity = cities[6];

console.log(favCity);
