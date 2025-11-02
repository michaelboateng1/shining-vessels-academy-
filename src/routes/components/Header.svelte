<script>
	import { onMount } from 'svelte';
	import NavBar from './NavBar.svelte';
	import SchoolLogo from '$lib/assets/images/310428482_545284817602681_4675978038248228164_n.jpg';

	let scrolled = $state(false);

	onMount(() => {
		scrolled = window.scrollY > 50;
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="glass-bg justify-betwee fixed z-30 flex w-full transition-all duration-300 {scrolled
		? 'glass-bg shadow-lg'
		: 'remove-glass'}"
>
	<div class=" hidden sm:block absolute top-13 lg:top-5 left-10 lg:left-16 h-auto w-[60px] lg:w-[80px] overflow-hidden rounded-full">
		<a href="/"><img src={SchoolLogo} alt="School Logo" /></a>
	</div>

	<div class="ml-auto w-full lg:w-auto grid justify-items-end">
		<section class="flex items-center w-full lg:w-auto justify-end">
			<div class="flex items-center w-full lg:w-auto lg:justify-around justify-between gap-10 bg-[#04095d] lg:pr-3 text-white">
				<div class="text-md hidden sm:flex items-center justify-evenly font-bold text-white">
					<a
						href="/testimonials"
						class="flex items-center justify-around gap-2 bg-[#fb8961] px-3 py-2"
					>
						<i class="fa-solid fa-users-line text-xl"></i>
						<span>Testimonials</span>
					</a>
					<a href="/faq" class="ml-5 flex items-center justify-around gap-2 px-3 py-2">
						<i class="fa-solid fa-house-chimney text-xl"></i>
						<span>FAQs</span>
					</a>
					<a href="/calender" class="ml-5 flex items-center justify-around gap-2 px-3 py-2">
						<i class="fa-solid fa-calendar-days text-xl"></i>
						<span>Calender</span>
					</a>
				</div>

				<div class="flex items-center justify-between py-2 sm:py-0 px-4 gap-8 text-sm font-semibold">
					<a href="tel:+23345324242">+23345324242</a>
					<a href="mailto:example@gmail.com">example@gmail.com</a>
				</div>
			</div>
		</section>
		<NavBar {scrolled} />
		<section class="sm:hidden flex justify-between items-center w-full py-3 px-5">
			<div class="h-auto w-[50px] overflow-hidden rounded-full">
				<a href="/"><img src={SchoolLogo} alt="School Logo" class="w-full h-full object-cover" /></a>
			</div>

			<div class="w-[40px] h-[40px] flex justify-center items-center">
				<div class="w-full h-[4px] rounded-lg bg-[#fb8961] relative before:w-full before:h-[4px] before:rounded-lg before:bg-[#fb8961] before:block before:absolute before:-top-3 before:left-0 after:w-full after:h-[4px]  after:rounded-lg after:bg-[#fb8961] after:block after:absolute after:-bottom-3 after:left-0 "></div>
			</div>
		</section>
	</div>
</header>

<!-- 2xl:top-16 2xl:left-1/2 2xl:container 2xl:mx-auto 2xl:-translate-1/2 2xl:transform -->

<style>
	.glass-bg {
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}

	.remove-glass {
		background: transparent;
		box-shadow: none;
		backdrop-filter: none;
		-webkit-backdrop-filter: none;
		border: none;
	}
</style>
