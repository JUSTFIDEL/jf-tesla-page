const navbar1 = document.querySelector('[data-navbar]')
const navbarToggle = document.querySelector('[data-nav-toggler]')
const navbarToggleX = document.querySelector('[data-navx-toggler]')
const section = document.querySelector('[data-section]')
const logo = document.querySelector('[data-logo]')

navbarToggle.addEventListener('click', () => {
	navbar1.classList.toggle('active')
	section.classList.toggle('hero-image')
	logo.classList.toggle('hero-image')
})

navbarToggleX.addEventListener('click', () => {
	navbar1.classList.toggle('active')
	section.classList.toggle('hero-image')
	logo.classList.toggle('hero-image')
})
