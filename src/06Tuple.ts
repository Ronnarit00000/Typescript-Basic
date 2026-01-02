// tuple
let Tuple:[number, boolean, string] = [10, true, "typescript is great"]
let [myNumber, myboolean, myString] = Tuple

const car: {type: string, model: string, year: number} = {
  type: "Honda",
  model: "Civic",
  year: 2023
}

console.log(myNumber, myboolean, myString)
console.log(car)