const socialMediaLink = document.getElementById('socialMediaLink');
const dropdownMenu = document.getElementById('dropdownMenu');

let dropdownVisible = false;

function toggleDropdown() {
    dropdownVisible = !dropdownVisible; // Toggle visibility
    dropdownMenu.style.display = dropdownVisible ? 'block' : 'none';
}

socialMediaLink.addEventListener('click', toggleDropdown);

// Close dropdown if clicking outside of it
document.addEventListener('click', (event) => {
    if (!socialMediaLink.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownVisible = false;
        dropdownMenu.style.display = 'none';
    }
});
 
function toggleMenu() {
    const sidebar = document.querySelector('.mobile-header');
    const hamburger = document.querySelector('.hamburger');
    const cancel = document.querySelector('.cancel');

    if (sidebar.style.right === '0%') {
        sidebar.style.right = '-100%';
        hamburger.style.display = 'block';
        cancel.style.display = 'none';
    } else {
        sidebar.style.right = '0%';
        hamburger.style.display = 'none';
        cancel.style.display = 'block';
    }
}