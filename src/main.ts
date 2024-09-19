import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

const scripts = () => {
	const reveals = document.querySelectorAll('.reveal')
	const revealsObserver = new IntersectionObserver(entries => {
		entries.forEach(({ isIntersecting, target }) => {
			target.classList.toggle('reveal', !isIntersecting)
			target.classList.toggle('revealed', isIntersecting)
		})
	})
	reveals.forEach(element => revealsObserver.observe(element))

	const swiper = new Swiper('.swiper', {
		modules: [Navigation],
		navigation: { nextEl: '.swiper-next', prevEl: '.swiper-prev' },
		loop: true,
		slidesPerView: 2,
		spaceBetween: 16,
	})
}

scripts()

document.addEventListener('astro:after-swap', () => scripts())
