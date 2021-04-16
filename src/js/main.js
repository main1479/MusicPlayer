let slider = document.getElementById('slider');
let fill = document.querySelector('.bar .fill');
function fillw() {
	fill.style.width = slider.value + '%';
}
slider.addEventListener('input', fillw);


// =========================================
// sliders

$('.slider1').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 1,
			nav: false,
		},
		1000: {
			items: 1,
			nav: true,
		},
	},
});

$('.slider2').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 1,
			nav: false,
		},
		1000: {
			items: 1,
			nav: true,
		},
	},
});

$('.slider3').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 0,
			nav: false,
		},
		600: {
			items: 0,
			nav: false,
		},
		1000: {
			items: 8,
			nav: true,
		},
	},
});