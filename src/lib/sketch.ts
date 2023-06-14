import p5Types from 'p5'

let canvasParent: Element
let parentStyle: CSSStyleDeclaration
let canvasWidth: number, canvasHeight: number
let x: number, y: number, size: number, xSpeed: number, ySpeed: number

const setup = (p5: p5Types, canvasParentRef: Element) => {
  // Find the parent Element's size to create a Canvas that size
  canvasParent = canvasParentRef
  if (canvasParentRef.parentElement) {
    parentStyle = getComputedStyle(canvasParentRef.parentElement)
  } else {
    parentStyle = getComputedStyle(canvasParentRef)
  }
  canvasWidth = parseInt(parentStyle.width)
  canvasHeight = parseInt(parentStyle.height)
  p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef)

  // Coordinates, size and speed don't depend on the canvas's size
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

  // Canvas size only matters for one frame
  const thisX = canvasWidth * x
  const thisY = canvasHeight * y
  const thisSize = canvasWidth * size
  p5.ellipse(thisX, thisY, thisSize, thisSize)

  // Move the ellipse
  x += xSpeed
  y += ySpeed

  // Make the ellipse rebound
  if (thisX > canvasWidth - thisSize / 2) xSpeed = -1 / 256
  if (thisX < thisSize / 2) xSpeed = 1 / 256
  if (thisY > canvasHeight - thisSize / 2) ySpeed = -1 / 256
  if (thisY < thisSize / 2) ySpeed = 1 / 256
}

// Keep canvas and its content responsive across window resizes
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
}

export { setup, draw, windowResized }
