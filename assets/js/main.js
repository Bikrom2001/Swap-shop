(function ($) {

	"use strict";
	$('.owl-men-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$('.owl-women-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	$('.owl-kid-item').owlCarousel({
		items: 5,
		loop: true,
		dots: true,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	/**
 * Open and close the search form.
 */
	const searchOpen = document.querySelector('.js-search-open');
	const searchClose = document.querySelector('.js-search-close');
	const searchWrap = document.querySelector(".js-search-form-wrap");

	searchOpen.addEventListener("click", (e) => {
		e.preventDefault();
		searchWrap.classList.add("active");
	});

	searchClose.addEventListener("click", (e) => {
		e.preventDefault();
		searchWrap.classList.remove("active");
	});


	/**
 * Initiate glightbox 
 */
	const glightbox = GLightbox({
		selector: '.glightbox'
	});


	/**
* Initiate gallery lightbox 
*/
	const galleryLightbox = GLightbox({
		selector: '.gallery-lightbox'
	});





	// For Header Slider start
	/**
   * Easy selector helper function
   */
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}



	/**
   * Hero carousel indicators
   */
	let heroCarouselIndicators = select("#hero-carousel-indicators")
	let heroCarouselItems = select('#heroCarousel .carousel-item', true)

	heroCarouselItems.forEach((item, index) => {
		(index === 0) ?
			heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
			heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
	});
	// For Header Slider end


})(window.jQuery);


(function () {
	"use strict";

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
			if (all) {
				selectEl.forEach(e => e.addEventListener(type, listener))
			} else {
				selectEl.addEventListener(type, listener)
			}
		}
	}

	/**
	 * Easy on scroll event listener 
	 */
	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	}

	/**
	 * Navbar links active state on scroll
	 */
	let navbarlinks = select('#navbar .scrollto', true)
	const navbarlinksActive = () => {
		let position = window.scrollY + 200
		navbarlinks.forEach(navbarlink => {
			if (!navbarlink.hash) return
			let section = select(navbarlink.hash)
			if (!section) return
			if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
				navbarlink.classList.add('active')
			} else {
				navbarlink.classList.remove('active')
			}
		})
	}
	window.addEventListener('load', navbarlinksActive)
	onscroll(document, navbarlinksActive)




	/**
     * Mobile nav toggle
     */
  
	 const mobileNavToogleButton = document.querySelector('.mobile-nav-toggle');
  
	 if (mobileNavToogleButton) {
	   mobileNavToogleButton.addEventListener('click', function(event) {
		 event.preventDefault();
		 mobileNavToogle();
	   });
	 }
   
	 function mobileNavToogle() {
	   document.querySelector('body').classList.toggle('mobile-nav-active');
	   mobileNavToogleButton.classList.toggle('bi-list');
	   mobileNavToogleButton.classList.toggle('bi-x');
	 }
   
	 /**
	  * Hide mobile nav on same-page/hash links
	  */
	 document.querySelectorAll('#navbar a').forEach(navbarlink => {
   
	   if (!navbarlink.hash) return;
   
	   let section = document.querySelector(navbarlink.hash);
	   if (!section) return;
   
	   navbarlink.addEventListener('click', () => {
		 if (document.querySelector('.mobile-nav-active')) {
		   mobileNavToogle();
		 }
	   });
	 });
   
	 /**
	  * Toggle mobile nav dropdowns
	  */
	 const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
   
	 navDropdowns.forEach(el => {
	   el.addEventListener('click', function(event) {
		 if (document.querySelector('.mobile-nav-active')) {
		   event.preventDefault();
		   this.classList.toggle('active');
		   this.nextElementSibling.classList.toggle('dropdown-active');
   
		   let dropDownIndicator = this.querySelector('.dropdown-indicator');
		   dropDownIndicator.classList.toggle('bi-chevron-up');
		   dropDownIndicator.classList.toggle('bi-chevron-down');
		 }
	   })
	 });






	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
		let header = select('#header')
		let offset = header.offsetHeight

		let elementPos = select(el).offsetTop
		window.scrollTo({
			top: elementPos - offset,
			behavior: 'smooth'
		})
	}

	/**
	 * Toggle .header-scrolled class to #header when page is scrolled
	 */
	let selectHeader = select('#header')
	if (selectHeader) {
		const headerScrolled = () => {
			if (window.scrollY > 100) {
				selectHeader.classList.add('header-scrolled')
			} else {
				selectHeader.classList.remove('header-scrolled')
			}
		}
		window.addEventListener('load', headerScrolled)
		onscroll(document, headerScrolled)
	}

	/**
	 * Back to top button
	 */
	let backtotop = select('.back-to-top')
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add('active')
			} else {
				backtotop.classList.remove('active')
			}
		}
		window.addEventListener('load', toggleBacktotop)
		onscroll(document, toggleBacktotop)
	}

	

	/**
	 * Scrool with ofset on links with a class name .scrollto
	 */
	on('click', '.scrollto', function (e) {
		if (select(this.hash)) {
			e.preventDefault()

			let navbar = select('#navbar')
			if (navbar.classList.contains('navbar-mobile')) {
				navbar.classList.remove('navbar-mobile')
				let navbarToggle = select('.mobile-nav-toggle')
				navbarToggle.classList.toggle('bi-list')
				navbarToggle.classList.toggle('bi-x')
			}
			scrollto(this.hash)
		}
	}, true)

	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener('load', () => {
		if (window.location.hash) {
			if (select(window.location.hash)) {
				scrollto(window.location.hash)
			}
		}
	});

	/**
	 * Preloader
	 */
	let preloader = select('#preloader');
	if (preloader) {
		window.addEventListener('load', () => {
			preloader.remove()
		});
	}



	/**
	 * Skills animation
	 */
	let skilsContent = select('.skills-content');
	if (skilsContent) {
		new Waypoint({
			element: skilsContent,
			offset: '80%',
			handler: function (direction) {
				let progress = select('.progress .progress-bar', true);
				progress.forEach((el) => {
					el.style.width = el.getAttribute('aria-valuenow') + '%'
				});
			}
		})
	}



	/**
   * Countdown timer
   */
	let countdown = select('.countdown');
	const output = countdown.innerHTML;

	const countDownDate = function () {
		let timeleft = new Date(countdown.getAttribute('data-count')).getTime() - new Date().getTime();

		let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
		let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

		countdown.innerHTML = output.replace('%d', days).replace('%h', hours).replace('%m', minutes).replace('%s', seconds);
	}
	countDownDate();
	setInterval(countDownDate, 1000);


})()




