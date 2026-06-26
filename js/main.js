document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.menu_button')
	const menu = document.querySelector('.menu')
	// const myCarousel = document.querySelector('.about_me__photos')
	// const carousel = new bootstrap.Carousel(myCarousel)

	// carousel.to(2)

	if (toggle && menu) {
		toggle.addEventListener('click', function () {
			this.classList.toggle('menu-toggle--active')
			menu.classList.toggle('menu--open')
		})

		menu.querySelectorAll('.menu__link').forEach((link) => {
			link.addEventListener('click', function () {
				toggle.classList.remove('menu-toggle--active')
				menu.classList.remove('menu--open')
			})
		})

		document.addEventListener('click', function (event) {
			if (!header.contains(event.target)) {
				toggle.classList.remove('menu-toggle--active')
				menu.classList.remove('menu--open')
			}
		})
	}
})
