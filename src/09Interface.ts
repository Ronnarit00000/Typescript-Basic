// interface ใช่กับ odject
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
