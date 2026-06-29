function openWhatsApp() {
    window.location.href = "https://wa.me/521XXXXXXXXXX"; // 替换你的号码
}

function toggleFaq(el) {
    const content = el.querySelector('.content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 触摸滑动优化
const carousel = document.getElementById('carousel');
let isDown = false; let startX; let scrollLeft;
carousel.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; });
carousel.addEventListener('mouseleave', () => { isDown = false; });
carousel.addEventListener('mouseup', () => { isDown = false; });
carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    carousel.scrollLeft = scrollLeft - (x - startX) * 2;
});