const siteNavigationMobile = document.querySelector('.site-navigation.mobile');
const buttonNavToggle = document.querySelectorAll('button.nav-toggle');

// Toggle site navigatino menu
if (buttonNavToggle.length) {
    buttonNavToggle.forEach(navToggleButton => {
        console.log(navToggleButton);
        navToggleButton.addEventListener('click', () => {
            siteNavigationMobile.classList.toggle('active');
        })
    });
}

