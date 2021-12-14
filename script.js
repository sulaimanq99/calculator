const display = document.getElementById('d')
const num = Array.from(document.getElementsByClassName('num'))
const operations = Array.from(document.getElementsByClassName('operation'))
const equals = document.getElementById('equal')
const sign = document.getElementById('sign')
const clear = document.getElementById('clear')
const decimal = document.getElementById('decimal')
const backspace = document.getElementById('backspace')

let opType = ''
let n1 = NaN
let n2 = NaN
let operatorSelected = false
let decimalSelected = false
display.textContent = ''




num.forEach(num => num.addEventListener('click', numSelect))

operations.forEach(operations => operations.addEventListener('click', opSelect))

equals.addEventListener('click', operate)

sign.addEventListener('click', changeSign)

clear.addEventListener('click', reset)

decimal.addEventListener('click', decimalSelect)

backspace.addEventListener('click', bSpace)



window.addEventListener('keydown', numSelectKB)


function numSelect(e) {
  console.log(e)
  console.log(e.target.innerHTML)
  console.log("id "+e.target.id)
    if (display.textContent.length>11){

    }
    else if (operatorSelected == false){
      display.textContent = display.textContent +  e.target.innerHTML
      display.value = parseFloat(display.textContent)
      n1 = display.value
      console.log(display.textContent.length)
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

function numSelectKB(e){
  console.log(e.key)
    if (e.key == 'Enter'){
      operate()
    }
    else if (e.key == 'Backspace'){
      bSpace()
    }
    else if (display.textContent.length>11 || !('1234567890.'.includes(e.key))) {
        console.log('invalid key')
    }
    else if (e.key == '.'){
      decimalSelectKB(e)
    }
    else if (operatorSelected == false){
      display.textContent = display.textContent +  e.key
      display.value = parseFloat(display.textContent)
      n1 = display.value
      console.log(display.textContent.length)
      console.log("n1: "+n1)
    }

    else if (display.value == undefined){
      console.log(e.key)
      display.textContent = e.key
      display.value = parseFloat(display.textContent)
      n2 = display.value
      console.log("n2: "+n2)
    
    }
    else {
      console.log("display value" + display.value)
      display.textContent = display.textContent +  e.key
      display.value = parseFloat(display.textContent)
      n2 = display.value
      console.log("n2: "+n2)
    }
}

function opSelect(e){
  if (operatorSelected == false){
    operatorSelected = true
    console.log(e.target.id)
    display.value = undefined
    opType = e.target.id
    }

 /* else {
    console.log('operate selected')
    console.log(e.target.id)
    display.value = undefined
    operate()
    operatorSelected = true
    opType = e.target.id
  }*/
}

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
  n2 = undefined
  display.textContent = result
}

function updateResult(result) {
  console.log('result ' + result)
  n1 = result
  n2 = undefined
  display.textContent = result
}

function reset(){
  n1 = NaN
  n2 = NaN
  operatorSelected = false
  decimalSelected = false
  display.value = undefined
  display.textContent = ''
}

function decimalSelect(e){
  if (operatorSelected == false && !(display.textContent.includes('.'))){
    display.textContent = display.textContent +  e.key
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
  else if (display.value &&  !(display.textContent.includes('.'))) {
    display.textContent = display.textContent +  e.target.innerHTML
    display.value = parseFloat(display.textContent)
    n2 = display.value
    console.log("n2: "+n2)
  }

}

function decimalSelectKB(e){
  console.log('dbkb run')
  if (operatorSelected == false && !(display.textContent.includes('.'))){
    display.textContent = display.textContent +  e.key
    display.value = parseFloat(display.textContent)
    n1 = display.value
    console.log("n1: "+n1)
  }

  else if (display.value == undefined){
    console.log(e.target.innerHTML)
    display.textContent = e.key
    display.value = parseFloat(display.textContent)
    n2 = display.value
    console.log("n2: "+n2)
  
  }
  else if (display.value &&  !(display.textContent.includes('.'))) {
    display.textContent = display.textContent +  e.key
    display.value = parseFloat(display.textContent)
    n2 = display.value
    console.log("n2: "+n2)
  }
}

function bSpace(e){
  if (operatorSelected == false){
    display.textContent = display.textContent.substring(0, display.textContent.length-1)
    display.value = parseFloat(display.textContent)
    n1 = display.value
    console.log(display.textContent.length)
    console.log("n1: "+n1)
  }

  else if (display.value == undefined){
    display.textContent = display.textContent.substring(0, display.textContent.length-1)
    display.value = parseFloat(display.textContent)
    n2 = display.value
    console.log("n2: "+n2)
  
  }
  else {
    console.log("display value" + display.value)
    display.textContent = display.textContent.substring(0, display.textContent.length-1)
    display.value = parseFloat(display.textContent)
    n2 = display.value
    console.log("n2: "+n2)
  }
  
}











