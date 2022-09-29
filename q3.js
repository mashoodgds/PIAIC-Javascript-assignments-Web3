// Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase

var user = "Mashood hussain";

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(user.toLowerCase());
console.log(user.toUpperCase());
console.log(titleCase(user));
