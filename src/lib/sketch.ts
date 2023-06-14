import p5Types from 'p5'

let canvasWidth: number
let canvasHeight: number
let canvasParent: Element
let parentStyle: CSSStyleDeclaration
let x: number, y: number, size: number, xSpeed: number, ySpeed: number

const setup = (p5: p5Types, canvasParentRef: Element) => {
  canvasParent = canvasParentRef
  if (canvasParentRef.parentElement) {
    parentStyle = getComputedStyle(canvasParentRef.parentElement)
  } else {
    parentStyle = getComputedStyle(canvasParentRef)
  }
  canvasWidth = parseInt(parentStyle.width)
  canvasHeight = parseInt(parentStyle.height)
  p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef)

  x = 2 / 3
  y = 1 / 2
  size = 1 / 8
  xSpeed = -1 / 256
  ySpeed = -1 / 256
  p5.noStroke()
  p5.fill(255, 160, 40)
}

const draw = (p5: p5Types) => {
  p5.background(192, 255, 255)
  const thisX = canvasWidth * x
  const thisY = canvasHeight * y
  const thisSize = canvasWidth * size
  p5.ellipse(thisX, thisY, thisSize, thisSize)
  // console.log(x, y, thisX, thisY, size, thisSize)
  x += xSpeed
  y += ySpeed
  if (thisX > canvasWidth - thisSize / 2) xSpeed = -1 / 256
  if (thisX < thisSize / 2) xSpeed = 1 / 256
  if (thisY > canvasHeight - thisSize / 2) ySpeed = -1 / 256
  if (thisY < thisSize / 2) ySpeed = 1 / 256
}

const windowResized = (p5: p5Types) => {
  let parentStyle: CSSStyleDeclaration
  if (canvasParent.parentElement) {
    parentStyle = getComputedStyle(canvasParent.parentElement)
  } else {
    parentStyle = getComputedStyle(canvasParent)
  }
  canvasWidth = parseInt(parentStyle.width)
  canvasHeight = parseInt(parentStyle.height)
  p5.resizeCanvas(canvasWidth, canvasHeight)
  console.log('parentStyle', parentStyle.width, parentStyle.height)
  console.log('resizeCanvas', canvasWidth, canvasHeight)
}

export { setup, draw, windowResized }
