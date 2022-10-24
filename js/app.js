



function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();




const swiper = new Swiper('.swiper', {
	loop: true,
	speed: 1000,
	mousewheel: {
		eventsTarget: ".swiper",
	},
	direction: "vertical",
	effect: "fade",
	pagination: {
		type: "bullets",
		clickable: true,
		el: ".bullets",	
	},
	navigation: {
		prevEl: ".prev",
		nextEl: ".next",
	},
});





