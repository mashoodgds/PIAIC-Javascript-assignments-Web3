var invitions = ["Ail", "hamza", "honey", "basit", "junaid"];
//replace  guest
invitions[2] = "Faraz";
//add new guest at the begning of the list
invitions.unshift("Azam");
//add new guest at the end of the list
invitions.push("Babar");
console.log(`Found Bigger table `);

for (var i = 0; i < invitions.length; i++) {
  console.log(`Hey ${invitions[i]} you are invited to dinner`);
}
console.log(`Only avialble space for 2 person`);

for (var i = 0; i < invitions.length; i++) {
  console.log(`Sorry  ${invitions[i]} Sorry we are cancleing your invitation`);
  invitions.splice(1, i);
}

for (var i = 0; i < invitions.length; i++) {
  console.log(`${invitions[i]} you are still invited to dinner`);
}
