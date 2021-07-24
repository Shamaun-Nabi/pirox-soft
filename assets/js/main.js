function contactClicked() {
	location.href = "index.html#contact";
}
function contactClicked2() {
	location.href = "#contact";
}
// AOS INIT
AOS.init();

// Window on Scroll
const navbar = document.querySelector(".navbar-light");
window.onscroll = () => {
	navScroll();
	bttBtnScroll();
};
//----------------------------- BACK TO TOP ----------------------------
const mybutton = document.getElementById("backtotopBtn");
function bttBtnScroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
function backTotopClicked() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
//----------------------------- BACK TO TOP ----------------------------

//--------------------------- Navbar Scroll ----------------------------
function navScroll() {
	if (window.scrollY > 100) {
		navbar.classList.add("nav-scrolled");
		document.getElementById("logo").style.width = "100px";
	} else {
		navbar.classList.remove("nav-scrolled");
		document.getElementById("logo").style.width = "180px";
	}
}
//--------------------------- Navbar Scroll ----------------------------

//----------------------------- SWIPER ----------------------------

function initParadoxWay() {
	"use strict";

	if ($(".testimonials-carousel").length > 0) {
		var j2 = new Swiper(".testimonials-carousel .swiper-container", {
			preloadImages: false,
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			grabCursor: true,
			mousewheel: false,
			centeredSlides: true,
			pagination: {
				el: ".tc-pagination",
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: ".listing-carousel-button-next",
				prevEl: ".listing-carousel-button-prev",
			},
			breakpoints: {
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	// bubbles -----------------

	setInterval(function () {
		var size = randomValue(sArray);
		$(".bubbles").append(
			'<div class="individual-bubble" style="left: ' +
				randomValue(bArray) +
				"px; width: " +
				size +
				"px; height:" +
				size +
				'px;"></div>'
		);
		$(".individual-bubble").animate(
			{
				bottom: "100%",
				opacity: "-=0.7",
			},
			4000,
			function () {
				$(this).remove();
			}
		);
	}, 350);
}

//   Init All ------------------
$(document).ready(function () {
	initParadoxWay();
});
//----------------------------- SWIPER ----------------------------
// test................./
