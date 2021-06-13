$(".clients__slider").slick({
	centerMode: true,
	centerPadding: "0px",
	slidesToShow: 3,
	dots: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
});
$(".doctors__cards-page").slick({
	slidesToShow: 1,
	dots: true,
	adaptiveHeight: true,
	centerPadding: "40px",
	arrows: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
});
$(".blog__slider-page").slick({
	slidesToShow: 1,
	dots: true,
	adaptiveHeight: true,
	centerPadding: "40px",
	arrows: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "40px",
				slidesToShow: 1,
			},
		},
	],
});
