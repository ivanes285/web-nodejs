document.querySelector('.menu-btn').addEventListener('click',()=>{
document.querySelector('.nav-menu').classList.toggle('show');/*la clase toggle pone o quita la palabra show  */

})

ScrollReveal().reveal('showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
