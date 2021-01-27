const card = document.querySelector('.card')
const box = document.querySelector('.box')

box.addEventListener('mousemove', (e) =>
{
    let xAxis  = (window.innerWidth / 2 - e.pageX)/25
    let yAxis  = (window.innerHeight / 2 - e.pageY)/25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(yAxis)
})

box.addEventListener('mouseleave', (e) => {
    card.style.transform = 'rotateY(0 deg) rotateX(0 deg)'
})