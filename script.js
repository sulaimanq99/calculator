const num = Array.from(document.getElementsByClassName('num'))
const display = document.getElementById('d')
const operations = Array.from(document.getElementsByClassName('operation'))
const equals = document.getElementById('equal')
const sign = document.getElementById('sign')
let opType = ''
let n1 = NaN
let n2 = NaN
let operatorSelected = false
let temp = ''


num.forEach(num => num.addEventListener('click', numSelect))

operations.forEach(operations => operations.addEventListener('click', opSelect))

equals.addEventListener('click', operate)

sign.addEventListener('click', changeSign)

function operate() {
  console.log(opType)
  operatorSelected = false
  let result = ''
  if (opType == 'divide'){
    result = n1/n2
  }
  else if (opType == 'times'){
    result = n1*n2
  }
  else if (opType == 'sub'){
    result = n1-n2
  }
  else if (opType == 'add'){
    result = n1+n2
  }
  else if (opType == 'mod' ){
    result = n1%n2
  }
  updateResult(result)
}

function changeSign(e){
  n1 = parseFloat(display.textContent)*-1
  result = n1
  n2 = NaN
  display.textContent = result
}

function updateResult(result) {
  console.log('result')
  n1 = result
  n2 = NaN
  display.textContent = result
}

function opSelect(e){
  operatorSelected = true
  console.log(e.target.id)
  display.value = undefined
  console.log(display.value)
  opType = e.target.id
 
}

function numSelect (e) {
    if (operatorSelected == false){
      display.textContent = display.textContent +  e.target.innerHTML
      display.value = parseFloat(display.textContent)
      n1 = display.value
      console.log("n1: "+n1)
    }

    else if (display.value == undefined){
      console.log(e.target.innerHTML)
      display.textContent = e.target.innerHTML
      display.value = parseFloat(display.textContent)
      n2 = display.value
      console.log("n2: "+n2)
    
    }
    else {
      console.log("display value" + display.value)
      display.textContent = display.textContent +  e.target.innerHTML
      display.value = parseFloat(display.textContent)
      n2 = display.value
      console.log("n2: "+n2)
    }
  }
