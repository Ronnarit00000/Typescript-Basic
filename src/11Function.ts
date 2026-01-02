// function 
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
