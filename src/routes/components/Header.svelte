<script>
	import { onMount } from 'svelte';
	import NavBar from './NavBar.svelte';
	import SchoolLogo from '$lib/assets/images/310428482_545284817602681_4675978038248228164_n.jpg';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="glass-bg justify-betwee fixed z-20 flex w-full transition-all duration-300 {scrolled ? 'glass-bg shadow-lg' : 'remove-glass'}">
	<div class=" absolute top-5 left-16 h-auto w-[80px] overflow-hidden rounded-full">
		<a href="/"><img src={SchoolLogo} alt="School Logo" /></a>
	</div>

	<div class="ml-auto grid justify-items-end">
		<section class="flex items-center justify-end">
			<div class="flex items-center justify-around gap-10 bg-[#04095d] pr-3 text-white">
				<div class="flex items-center justify-evenly text-md font-bold text-white">
					<a href="/testimonial" class="flex items-center justify-around gap-2 bg-[#fb8961] px-3 py-2">
						<i class="fa-solid fa-users-line text-xl"></i>
						<span>Testimonials</span>
					</a>
					<a href="/" class="ml-5 flex items-center justify-around gap-2 px-3 py-2">
						<i class="fa-solid fa-house-chimney text-xl"></i>
						<span>FAQs</span>
					</a>
					<a href="/calender" class="ml-5 flex items-center justify-around gap-2 px-3 py-2">
						<i class="fa-solid fa-calendar-days text-xl"></i>
						<span>Calender</span>
					</a>
				</div>

				<div class="flex items-center justify-between gap-8 text-sm font-semibold">
					<a href="tel:+23345324242">+23345324242</a>
					<a href="mailto:example@gmail.com">example@gmail.com</a>
				</div>
			</div>
		</section>
		<NavBar {scrolled} />
	</div>
</header>

<!-- 2xl:top-16 2xl:left-1/2 2xl:container 2xl:mx-auto 2xl:-translate-1/2 2xl:transform -->

<style>

	.glass-bg{
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	.remove-glass{
		background: transparent;
		box-shadow: none;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		border: none;
	}
</style>