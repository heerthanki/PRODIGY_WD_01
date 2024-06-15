//responsive landing page
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const sideNavBar = document.querySelector('.sideNavigationBar');
    const closeButton = document.querySelector('.closeButton');

    // Toggle side navigation bar when menu icon is clicked
    menuIcon.addEventListener('click', function() {
        sideNavBar.classList.toggle('open');
    });

    // Close side navigation bar when close button is clicked
    closeButton.addEventListener('click', function() {
        sideNavBar.classList.remove('open');
    });
});
