const siteNavigationMobile = document.querySelector('.site-navigation.mobile');
const buttonNavToggle = document.querySelectorAll('button.nav-toggle');
let sideBarOpen = true;


// Toggle site navigatino menu
if (buttonNavToggle.length) {
    buttonNavToggle.forEach(navToggleButton => {
        console.log(navToggleButton);
        navToggleButton.addEventListener('click', () => {
            siteNavigationMobile.classList.toggle('active');
        })
    });
}

// collapse site navigation when click outside
document.addEventListener('click', event => {

    console.log(sideBarOpen);

    if (!sideBarOpen) {
        if (!siteNavigationMobile.contains(event.target)) {
            siteNavigationMobile.classList.remove('active');
        }
        sideBarOpen = true;
    }
    else {
        sideBarOpen = false;
    }
})
