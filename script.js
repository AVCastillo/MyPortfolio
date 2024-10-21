// JavaScript to open and close the drawer
const drawer = document.getElementById('drawer');
const drawerToggle = document.getElementById('drawerToggle');
const closeDrawer = document.getElementById('closeDrawer');

// Open the drawer
drawerToggle.addEventListener('click', () => {
    drawer.classList.add('open');
});

// Close the drawer
closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('open');
});