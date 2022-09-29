function make_great_magicians(magicians) {
  var greatMagicians = [];
  for (var i = 0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + " The great");
    console.log(greatMagicians[i]);
  }
}
var magi = ["harry houdini", "david blaine", "teller"];
make_great_magicians(magi);
