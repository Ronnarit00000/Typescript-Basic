// Type Ailases
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear,
  type: CarType,
  nodel: CarModel
}

const carYear: CarYear = 2023;
const carType: CarType = "Honda";
const carModel: CarModel = "Civic"

const carEV: Car = {
  year: 2023,
  type: "Honda",
  nodel: "Civic"
}
