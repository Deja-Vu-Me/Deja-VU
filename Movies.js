const toggle_btn = document.querySelector('.toggle_btn');
const toggle_btnIcon = document.querySelector('.toggle_btnIcon');
const dropdown_menu = document.querySelector('.dropdown_menu');

toggle_btn.onclick = function() {
    dropdown_menu.classList.toggle('open');
    const isOpen = dropdown_menu.classList.contains('open');

    toggle_btnIcon.className = isOpen
        ? 'fa-solid fa-xmark toggle_btnIcon' // X icon when open
        : 'fa-solid fa-bars toggle_btnIcon'; // Bars icon when closed
};

