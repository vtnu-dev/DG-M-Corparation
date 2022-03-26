const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const navLinks = document.querySelectorAll('.nav__link')
const scroll = document.querySelector('.scroll')

const handleNav = ()=>{
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    scroll.classList.toggle('scroll-disable');

    navLinks.forEach(navLink =>{
        navLink.addEventListener('click', function () {
            navBtn.classList.remove('is-active');
            navMobile.classList.remove('nav-mobile--active');
            scroll.classList.remove('scroll-disable');
        })
    })

    
}

const handleCurrentYear = () => {
    footerYear.innerText = (new Date).getFullYear();
}

handleCurrentYear();

navBtn.addEventListener('click', handleNav)
















// const handleCurrentYear = () => {
//     const year = (new Date).getFullYear();

//     footerYear.innerText = year;
// }