document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().slice(-12, -4);
        document.getElementById('utc-time').textContent = utcTime;
        
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        document.getElementById('current-day').textContent = currentDay;
    }

    updateTime();
    setInterval(updateTime, 1000);

    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('change', () => {
        document.body.setAttribute('data-theme', modeToggle.checked ? 'dark' : 'light');
    });
});
