// typescript enum
// enum แบบตัวเลข
enum Employees {
  Id,
  FirstName,
  LastName,
  Age,
  Postion
}

enum StatusCode {
  NotFonud = 404,
  Success = 200,
  Accept = 202,
  BadRequest = 400
}

// enum แบบข้อความ
enum Carlist {
  firstCar = "Honda",
  secondCar = "Toyota",
  thirdCar = "Nissan",
  fourthCar = "BMW"
}

console.log(Employees)
console.log(StatusCode)
console.log(Carlist)