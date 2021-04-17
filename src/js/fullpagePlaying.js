if (window.screen.availWidth >= 575) {
	let slider = document.getElementById('slider');
	let fill = document.querySelector('.bar .fill');
	function fillw() {
		fill.style.width = slider.value + '%';
	}
	slider.addEventListener('input', fillw);
}

$('.fullpage-player-slider').owlCarousel({
	loop: false,
	margin: 10,
	nav: false,
	items: 1,
});