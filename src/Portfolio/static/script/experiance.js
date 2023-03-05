let sg = document.getElementById('sg')
let mohca = document.getElementById('mohca')

window.addEventListener('scroll', () => {
     sg_co = sg.getBoundingClientRect()
     if (sg_co.top < window.innerHeight * 0.5){
        sg.style.marginLeft = "0"
        sg.style.opacity = 1
        sg.style.transition = ".5s"
     }
     else {
        sg.style.opacity = 0
        sg.style.marginLeft = "-10%"
     }
})

window.addEventListener('scroll', () => {
     mohca_co = mohca.getBoundingClientRect()
     if (mohca_co.top < window.innerHeight * 0.5){
        mohca.style.marginRight = "0"
        mohca.style.opacity = 1
        mohca.style.transition = ".5s"
     }
     else {
        mohca.style.opacity = 0
        mohca.style.marginRight = "-10%"
     }
})