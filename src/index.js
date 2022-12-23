const siteNavigationMobile = document.querySelector('.site-navigation.mobile');
const buttonNavToggle = document.querySelectorAll('button.nav-toggle');
let sideBarOpen = false;



document.addEventListener('click', event => {

    // Toggle site navigatino menu
    buttonNavToggle.forEach(navToggleButton => {

        if (navToggleButton.contains(event.target))
            siteNavigationMobile.classList.toggle('active');
    });


    // hide site navigation sidebar when click outside on mobile
    if (sideBarOpen) {
        if (!siteNavigationMobile.contains(event.target)) {
            siteNavigationMobile.classList.remove('active');
        }
    }

    sideBarOpen = sideBarOpen ? false : true

})




