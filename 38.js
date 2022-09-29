function describe_city(city, detail = "is good") {
  msg = `${city} is ${detail} `;

  console.log(msg);
}

describe_city("Karachi");
describe_city("Islamabad");
describe_city("punta", "is not a good a city");
