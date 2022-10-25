const slider = document.querySelector('.slider'),
      active = document.querySelector('#active'),
      line1 = document.querySelector('#line1'),  
      line2 = document.querySelector('#line2'),  
      line3 = document.querySelector('#line3'),  
      line4 = document.querySelector('#line4');

line1.addEventListener('click',() => {
    slider.style.transform = 'translateX(0)'
    active.style.top = 0
})

line2.addEventListener('click',() => {
    slider.style.transform = 'translateX(-25%)'
    active.style.top = 80 + 'px'
})

line3.addEventListener('click',() => {
    slider.style.transform = 'translateX(-50%)'
    active.style.top = "160px"
})

line4.addEventListener('click',() => {
    slider.style.transform = 'translateX(-75%)'
    active.style.top = "240px"
})