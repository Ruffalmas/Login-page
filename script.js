document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnpopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    // Toggle to registration view
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    // Toggle to login view
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    // Show popup
    btnpopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    // Close popup
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
});
