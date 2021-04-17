let slider = document.getElementById('slider');
let fill = document.querySelector('.bar .fill');
function fillw() {
	fill.style.width = slider.value + '%';
}
slider.addEventListener('input', fillw);

// =========================================
// sliders
$('.featured-slider1').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 3,
			nav: false,
		},
		600: {
			items: 6,
			nav: false,
		},
		1000: {
			items: 8,
			nav: true,
		},
	},
});

$('.featured-slider2').owlCarousel({
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
			items: 2,
			nav: true,
		},
	},
});

$('.featured-slider3').owlCarousel({
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
			items: 2,
			nav: true,
		},
	},
});

$('.featured-slider4').owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		600: {
			items: 2,
			nav: false,
		},
		1000: {
			items: 4,
			nav: true,
		},
	},
});


