// unique typescript ใส่ type ได้มากกว่า 1 type
function statusCode(code: string | number){
  console.log(`My status code is ${code}`)
}

statusCode(404)
statusCode("404")