const point = [10, 25, -34]

const x = point[0]
const y = point[1]
const z = point[2]

console.log(`From an array old way: index 0=${x},index 1=${y}, index 2=${z}`)

const [x1, y1, z1] = point
console.log(`From an array new way: index 0=${x1},index 1=${y1}, index 2=${z1}`)

console.log('------------------------')
const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
}

const typeOld = gemstone.type
const colorOld = gemstone.color
const caratOld = gemstone.carat
console.log(`From gemstone object old way: type=${typeOld}, color=${colorOld}, carat=${caratOld}`)

const { type, color, carat } = gemstone
console.log(`From gemstone object new way: type=${type}, color=${color}, carat=${carat}`)

/**
 * you can extract data from arrays and objects into distinct variables using **destructuring.**
 */
console.log('------------------------')
const circle = {
  radius: 10,
  color: 'orange',
  getArea: function () {
    return Math.PI * this.radius * this.radius
  },
  getCircumference: function () {
    return 2 * Math.PI * this.radius
  }
}

let { radius, getArea, getCircumference } = circle
console.log(radius)
console.log(getArea())
console.log(getCircumference())
console.log(circle.getArea())
