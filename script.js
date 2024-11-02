// script.js

document.querySelector('.cta').addEventListener('click', () => {
    alert('Getting Started!');
});
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle visibility
});
<script>
    // Toggle menu on mobile
    document.querySelector('.nav-toggle').addEventListener('click', () = {
        document.querySelector('.nav-links').classList.toggle('active')
    });
</script>
