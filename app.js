function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

var toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', toggleMode);
