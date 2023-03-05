let progress_bar = document.getElementById('progress_bar')
let status_bar = document.getElementById('status_bar')

window.addEventListener('scroll', () => {
    let value = progress_bar.getBoundingClientRect()

    status_bar.style.backgroundColor = "#e55039"
    status_bar.style.width = '23px'
    if (value.top < value.height && (value.height - value.top) <= value.height + 1200){
        status_bar.style.height = (value.height - value.top) - 1200 + 'px'
    }
    if ((value.height - value.top) - 300 < 20){
        status_bar.style.backgroundColor = 'transparent'
    }

})

let cnfdi = document.getElementById('cnfdi')
cnfdi.style.opacity = 0

window.addEventListener('scroll', () => {
     cnfdi_co = cnfdi.getBoundingClientRect()
     console.log(window.innerHeight * 0.5)
     if (cnfdi_co.top < window.innerHeight * 0.5){
        cnfdi.style.top = "-85%"
        cnfdi.style.opacity = 1
        cnfdi.style.transition = ".5s"
     }
     else {
        cnfdi.style.opacity = 0
        cnfdi.style.top = "-80%"
     }
})

let csharp = document.getElementById('udemy_csharp')
csharp.style.opacity = 0

window.addEventListener('scroll', () => {
     csharp_co = csharp.getBoundingClientRect()
     console.log(window.innerHeight * 0.5)
     if (csharp_co.top < window.innerHeight * 0.5){
        csharp.style.opacity = 1
        csharp.style.transition = ".5s"
        csharp.style.top = '-80%'
     }
     else {
        csharp.style.opacity = 0
        csharp.style.top = '-75%'
     }
})

let python = document.getElementById('udemy_python')
python.style.opacity = 0

window.addEventListener('scroll', () => {
     python_co = python.getBoundingClientRect()
     if (python_co.top < window.innerHeight * 0.5){
        python.style.opacity = 1
        python.style.transition = ".5s"
        python.style.top = '-75%'
     }
     else {
        python.style.opacity = 0
        python.style.top = '-70%'
     }
})

let django = document.getElementById('udemy_django')
django.style.opacity = 0

window.addEventListener('scroll', () => {
     django_co = django.getBoundingClientRect()
     if (django_co.top < window.innerHeight * 0.5){
        django.style.opacity = 1
        django.style.transition = ".5s"
        django.style.top = '-70%'
     }
     else {
        django.style.opacity = 0
        django.style.top = '-65%'
     }
})

let aws = document.getElementById('udemy_aws')
aws.style.opacity = 0

window.addEventListener('scroll', () => {
     aws_co = aws.getBoundingClientRect()
     if (aws_co.top < window.innerHeight * 0.5){
        aws.style.opacity = 1
        aws.style.transition = ".5s"
        aws.style.top = '-65%'
     }
     else {
        aws.style.opacity = 0
        aws.style.top = '-60%'
     }
})


