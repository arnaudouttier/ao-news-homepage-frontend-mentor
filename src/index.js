const siteNavigationMobile = document.querySelector('.site-navigation.mobile');
const buttonNavToggle = document.querySelectorAll('button.nav-toggle');
let sideBarOpen = true;

// Toggle site navigatino menu

// hide site navigation when click outside
document.addEventListener('click', event => {

    console.log(sideBarOpen);

    buttonNavToggle.forEach(navToggleButton => {
        if (navToggleButton.contains(event.target)) {
            siteNavigationMobile.classList.toggle('active');
        }
    });

    if (sideBarOpen) {
        if (!siteNavigationMobile.contains(event.target)) {
            siteNavigationMobile.classList.remove('active');
        }
        sideBarOpen = false;
    }
    else {
        sideBarOpen = true;
    }
})
