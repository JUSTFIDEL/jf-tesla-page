const navbar1 = document.querySelector('[data-navbar]')
const navbarToggle = document.querySelector('[data-nav-toggler]')
const navbarToggle2 = document.querySelector('[data-nav-toggler2]')
const navbarToggleX = document.querySelector('[data-navx-toggler]')
const navbarToggleX2 = document.querySelector('[data-navx-toggler2]')

// navbar1.addEventListener('click', () => {
// 	navbar1.classList.toggle('active')
// })

navbarToggle.addEventListener('click', () => {
	navbar1.classList.toggle('active')
})

navbarToggleX.addEventListener('click', () => {
	navbar1.classList.toggle('active')
	navbar1.classList.add('hidden')
})

navbarToggle2.addEventListener('click', () => {
	navbar1.classList.toggle('active')
})

navbarToggleX2.addEventListener('click', () => {
	navbar1.classList.toggle('active')
	navbar1.classList.add('hidden')
	navbarToggle2.classList.remove('hidden')
	navbarToggle2.classList.remove('hidden')
})
