const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closeIcon = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
});

closeIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// Closes the menu in mobile resolution when press the login button
btnPopup.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        document.getElementById('menu-check').checked = false;
    }
    wrapper.classList.add('active-popup');
});

