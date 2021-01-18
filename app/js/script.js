const body = document.querySelector('body')
const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', ()=> {
  if (header.classList.contains('open')) {  // Close Hamburger menu
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElems.forEach(element => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    });
  } else {  // Open Hamburger menu
    body.classList.add('noscroll')
    header.classList.add('open')
    fadeElems.forEach(element => {
      element.classList.add('fade-in')
      element.classList.remove('fade-out')
    });
    
  }
})