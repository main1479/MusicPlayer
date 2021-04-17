let slider = document.getElementById('slider');
let fill = document.querySelector('.bar .fill');
function fillw() {
	fill.style.width = slider.value + '%';
}
slider.addEventListener('input', fillw);
