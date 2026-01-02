# Typescript

**TypeScript** เป็นส่วนขยายของ **JavaScript** ที่เพิ่มคุณสมบัติพิเศษ เช่น การกำหนดประเภทข้อมูลแบบคงที่ **(static typing)**, อินเทอร์เฟซ **(interfaces)**, **(enum)** และอื่นๆ โดยพื้นฐานแล้ว TypeScript คือ JavaScript ที่มีไวยากรณ์เพิ่มเติมสำหรับการกำหนดประเภทข้อมูล ทำให้เป็นเครื่องมือที่มีประสิทธิภาพสำหรับการสร้างแอปพลิเคชันที่ปรับขนาดได้และบำรุงรักษาได้ง่าย

## 1. Simple-type

```bash

# Explicit ระบุ type ตรงๆ
let firstName: string = "Ronnarit"

# Implicit ไม่ระบุ type
let lastname = "Rabrong"

```

## 2. Special-Type

```bash

# :unknown ใส่ type ไปก่อนค่อยมากำหนดทีหลัง
let array: unknown = []
array = {}

# :nerver ไม่มี type
let x: never = "John"

# :undefined ไม่มี type ใช่กับ undefined เท่านั้น
let y: undefined = undefined

# :null ไม่มี type ใช่กับ null เท่านั้น
let z: null = null

```

## 3. Array

```bash

let names: string[] = ["tae", "BB"]
let number: number[] = [1, 2, 3, 4]

# array of object
# at type object
let person: object[] = [
  {
    id: 1,
    firstname: "Ronnarit",
    lastname: "Rabrong",
    age: 24
  },
  {
    id: 1,
    firstname: "Ronnarit",
    lastname: "Rabrong",
    age: 24
  }
]

### OR ### 
# at interface
interface person {
  id: number,
  firstname: string,
  lastname: string,
  age: number
}

const person: person[] = [
  {
    id: 1,
    firstname: "Ronnarit",
    lastname: "Rabrong",
    age: 24
  },
  {
    id: 1,
    firstname: "Ronnarit",
    lastname: "Rabrong",
    age: 24
  }
]

```

## 4. Object

``` bash

const car: {type: string, model: string, year: number} = {
  type: "Honda",
  model: "Civic",
  year: 2023
}

### OR ###

interface car {
  type: string, 
  model: string, 
  year: number
}

const car: car = {
  type: "Honda",
  model: "Civic",
  year: 2023
}

```

## 5. readonly

```Bash

# readonly ไม่สามารถเปลี่ยนค่าได้
const namesReadOnly: readonly string[] = []
namesReadOnly.push("ronnarit")

```

## 6.tuple

```Bash

# tuple
# กำหนด type ให้กับ Index แต่ละตัว หรือ pre define
let Tuple:[number, boolean, string] = [10, true, "typescript is great"]
let [myNumber, myboolean, myString] = Tuple

# กำหนด type ให้กับ property แต่ละตัว หรือ pre define
const car: {type: string, model: string, year: number} = {
  type: "Honda",
  model: "Civic",
  year: 2023
}

```

## 7. Enum

```Bash

# typescript enum
# enum แบบตัวเลข
enum Employees {
  Id,         #0
  FirstName,  #1
  LastName,   #2
  Age,        #3
  Postion     #4
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

```

## 8. Type Ailases

```Bash

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

```

## 9. inteface

```Bash

# กำหนดให้กับ odject
interface Rectangle {
  width: number,
  height: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
}

interface ColorRectangle extends Rectangle{
  color: string
}

const colorRectangle: ColorRectangle = {
  height: 20,
  width: 10,
  color: "red"
}

```

## 10. unique

``` Bash

# unique typescript ใส่ type ได้มากกว่า 1 type
function statusCode(code: string | number){
  console.log(`My status code is ${code}`)
}

statusCode(404)
statusCode("404")

```

## 11. function

``` bash

// return number เสมอ
function getTime(): number{
  return new Date().getTime();
}

// ไม่ return ค่า
function preintHello(): void {
  console.log('Hello!')
}

preintHello()
console.log(getTime())

// กำหนด type ให้กับ parameter
function multiply(a: number, b: number, c:number = 0){
  return a * b + c
}

console.log(multiply(2, 5))

// กำหนด type ให้กับ parameter ที่เป็น odject
function divide ({divided, divisor} : {divided: number, divisor: number}){
  return divided / divisor
}

console.log(divide({divided: 2, divisor: 45}))

// กำหนด type ให้กับ parameter ที่เป็น array
function add(...arr: number[]){
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue,0)
}

console.log(add(2,3,4))

```

## 12. classes

``` Bash

class Person {
  private name: string

  public constructor(name: string){
    this.name = name
  }

  public getName(): string{
    return this.name
  }
}

const person = new Person("ronnarit")
console.log(person.getName())

```
