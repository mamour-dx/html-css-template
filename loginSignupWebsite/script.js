const main_class = document.querySelector('.container');
const signup_link = document.querySelector('.signup-link');
const login_link = document.querySelector('.login-link');
const login_popup_btn = document.querySelector('.login-popup-btn');
const icon_close = document.querySelector('.icon-close');


signup_link.addEventListener('click', ()=>{
    main_class.classList.add('sign-up');
});

login_link.addEventListener('click', ()=>{
    main_class.classList.remove('sign-up');
});

login_popup_btn.addEventListener('click', ()=>{
    main_class.classList.add('display-popup');
});

icon_close.addEventListener('click', ()=>{
    main_class.classList.remove('display-popup');
});