var animals = ["cat", "dog", "hamster"];

for (var i = 0; i < animals.length; i++) {
  console.log(`"${animals[i]} will make a great pet!`);
}

for (var i = 0; i < animals.length; i++) {
  if (animals[i] === "cat") {
    console.log(`"cats are  so cute`);
  } else if (animals[i] === "dog") {
    console.log(`"Dogs are  so Loyal`);
  } else {
    console.log(`"${animals[i]} will make a great pet!`);
  }
}
