let image = document.getElementById('resume_pdf')
let html = document.querySelector('body')

let modal_bool = false

let modal = document.createElement('div')
let html_part = document.getElementById('resume')
let modal_resume = document.createElement('img')
modal_resume.src = image.src
let close_button = document.createElement('div')

close_button.innerHTML = 'X'
close_button.classList.add('neon_title', 'tilt')
modal.append(modal_resume)
modal.append(close_button)

close_button.style.position = 'fixed'
close_button.style.top = '1%'
close_button.style.right = '1%'
close_button.style.fontSize = '30px'
close_button.style.cursor = 'pointer'

modal_resume.style.width = '35%'
modal_resume.style.position = 'fixed'
modal_resume.style.top = '50%'
modal_resume.style.left = '50%'
modal_resume.style.transform = 'translate(-50%, -50%)'

modal.style.height = html.clientHeight + "px"
modal.style.width = "100vw"
modal.style.position = 'absolute'
modal.style.left = 0
modal.style.top = 0
modal.style.zIndex = 3
modal.style.background = 'rgba(0, 0, 0, 0.8)'
html_part.append(modal)

modal.style.display = 'none'
modal_resume.style.display = 'none'
close_button.style.display = 'none'

html.style.overflowX = 'auto'
html.style.overflowY = 'auto'

function displayModal() {
    modal_bool = !modal_bool
    console.log(modal_bool)

    if(modal_bool){
    modal.style.display = 'block'
    modal_resume.style.display = 'block'
    close_button.style.display = 'block'

    html.style.overflowX = 'hidden'
    html.style.overflowY = 'hidden'
    }
    else {
        modal.style.display = 'none'
        modal_resume.style.display = 'none'
        close_button.style.display = 'none'

        html.style.overflowX = 'auto'
        html.style.overflowY = 'auto'
    }
}

close_button.addEventListener('click', displayModal)
image.addEventListener('click', displayModal)