const num = Array.from(document.getElementsByClassName('num'))
const display = document.getElementById('d')
const divide = document.getElementById('divide')

const n1 = parseInt(display.textContent)

num.forEach(num => num.addEventListener('click', clicker ))




function clicker (e) {
    console.log(e.target.innerHTML)
    display.textContent = display.textContent +  e.target.innerHTML
    const n1 = parseInt(display.textContent)
    console.log(n1)
  }



