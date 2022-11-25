const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 3

for(let i = 0; i<rows *3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)

}

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr(){
    return Math.floor(Math.random()*99)+300
}

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
     nav.forEach(nav_el => nav_el.classList.remove('visible'))
 })

 