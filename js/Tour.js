let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')

let formBtn = document.querySelector('#login-btn')
let loginform = document.querySelector('.login-form-container')
let formclose = document.querySelector('#form-close')

loginform.classList.remove('active')

let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

let videobtn = document.querySelectorAll('.vid-btn')

// search
window.onscroll=() =>{
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')

    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})


//login form
formBtn.addEventListener('click',() =>{
    loginform.classList.add('active')
})

formclose.addEventListener('click',() =>{
    loginform.classList.remove('active')
})

//media query header
menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times-rectangle')
    navbar.classList.toggle('active')
})

// video section 1
videobtn.forEach(btn =>{
    btn.addEventListener('click',() =>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src;
    })
})


var swiper = new Swiper(".review-slider" , {
    slidesPerView: 3,
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false
    },
    breakpoints:{
        640:{
            slidesPerview:1
        },
        768:{
            slidesPerview:2
        },
        1024:{
            slidesPerview:3
        }
    }
})


var swiper = new Swiper(".brand-slider" , {
    slidesPerView: 3,
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false
    },
    breakpoints:{
        450:{
            slidesPerview:1
        },
        768:{
            slidesPerview:2
        },
        991:{
            slidesPerview:3
        },
        1200:{
            slidesPerview:4
        }
    }
})