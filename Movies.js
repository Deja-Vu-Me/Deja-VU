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

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12; // Convert to 12-hour format
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hrs').innerText = displayHours;
    document.getElementById('mins').innerText = displayMinutes;
    document.getElementById('secs').innerText = displaySeconds;
    document.getElementById('ampm').innerText = ampm;

    // Update the circle stroke based on time (example for seconds)
    const secondDegrees = ((seconds / 60) * 360) + 90; // 90 to offset the starting position
    document.getElementById('ss').style.transform = `rotate(${secondDegrees}deg)`;
    
    // Similarly, you can update hours and minutes as needed
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the time immediately