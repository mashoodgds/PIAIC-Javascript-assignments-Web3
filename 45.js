function make_car(manufacturer, model, ...args) {
  var mycar = {
    manufacturer: manufacturer,
    model: model,
  };
  result = { ...mycar, ...args };
  return result;
}

var result = make_car("honda", "688x", (year = 1991), (color = "white"));
console.log(result);
