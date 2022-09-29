function describe_city(city, country = "Pakistan") {
  msg = `${city}, ${country} `;

  console.log(msg);
}

describe_city("Karachi");
describe_city("Islamabad");
describe_city("punta", "Chille");
