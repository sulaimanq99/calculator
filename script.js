const num = Array.from(document.getElementsByClassName('num'))
const display = document.getElementById('d')
const operations = Array.from(document.getElementsByClassName('operation'))
const equals = document.getElementById('equal')
let opType = ''
let n1 = NaN
let n2 = NaN
let operatorSelected = false


num.forEach(num => num.addEventListener('click', numSelect))

operations.forEach(operations => operations.addEventListener('click',opSelect))

equals.addEventListener('click', operate)

function operate() {
  console.log(opType)
  if (opType == 'divide'){
    const result = n1/n2
    console.log('result')
    display.textContent = result
  }
}

function opSelect(e){
  display.textContent = ''
  operatorSelected = true
  console.log(e.target.id)
  opType = e.target.id
  console.log(opType)
}

function numSelect (e) {
    display.textContent = display.textContent +  e.target.innerHTML
    if (operatorSelected == false){
      n1 = parseFloat(display.textContent)
      console.log("n1: "+n1)
    }
    else {
      n2 = parseFloat(display.textContent)
      console.log("n2: "+n2)
    }
  }
