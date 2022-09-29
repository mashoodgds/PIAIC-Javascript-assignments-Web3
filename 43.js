function show_magicians(magicians) {
  for (var i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great_magicians(magicians) {
  var greatMagicians = [];
  for (var i = 0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + " The great");
  }
  return greatMagicians;
}

var magicians = ["Harry Houdini", "David Blaine", "Teller"];
show_magicians(magicians);

console.log("\nGreat magicians:");
great_magicians = make_great_magicians(magicians);
show_magicians(great_magicians);

console.log("\nOriginal magicians:");
show_magicians(magicians);
