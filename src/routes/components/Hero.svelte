<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import HeroNav from './HeroNav.svelte';

	import { heroSlideImages } from '$lib/';

	const slideImages = heroSlideImages;

	let currentSlideImage = $state(0);

	const interval = setInterval(() => {
		currentSlideImage = (currentSlideImage + 1) % slideImages.length;
	}, 4050);

	onMount(() => {
		const tl = gsap.timeline({
			defaults: { ease: 'power3.out' },
			onComplete: () => {}
		});

		tl.from('.hero-word', {
			scale: 0,
			opacity: 0,
			duration: 0.6,
			delay: 0.3,
			ease: 'back.out(1.7)',
			stagger: 0.1
		})
			.from(
				'.hero-heading-2',
				{
					y: 100,
					opacity: 0,
					duration: 1
				},
				'-=0.6'
			).from(
				'.hero-button',
				{
					y: 30,
					opacity: 0,
					duration: 0.6,
					stagger: 0.2
				},
				'-=0.4'
			);
	});
</script>

<section class="relative h-screen w-full">
	{#each slideImages as slide, i}
		<img
			src={slide.image}
			alt={slide.text}
			class="obeject-cover absolute top-0 left-0 h-full w-full transition-opacity duration-1000 {i ===
			currentSlideImage
				? 'z-10 opacity-100'
				: 'z-0 opacity-0'}"
		/>
	{/each}
	<div class="overlay absolute z-10 h-full w-full"></div>
	<div
		class="absolute z-10 container mx-auto flex h-full flex-col justify-center space-y-5 px-5 text-center text-white sm:w-[100ch] sm:px-10 sm:text-left lg:pl-20"
	>
		<h2
			class="hero-heading-1 custom-text-shadow text-3xl font-bold text-white sm:mt-24 sm:text-5xl"
		>
			<span class="hero-word inline-block italic">Ready</span>
			<span class="hero-word inline-block italic">to</span>
			<span class="hero-word inline-block italic">start</span>
			<span class="hero-word inline-block italic">your</span>
			<span class="hero-word inline-block italic">journey</span>
			<span class="hero-word inline-block italic">at</span>
		</h2>
		<h1 class="hero-heading-2 custom-text-shadow text-3xl font-bold text-[#fb8961] sm:text-5xl">
			Shining Vessels?
		</h1>
		<p class="text-md font-semibold">
			Empowering young minds with knowledge, character, and creativity.
		</p>

		<div
			class=" text-md mt-5 flex items-center justify-center gap-4 font-bold text-white sm:justify-start"
		>
			<a href="/admission" class="hero-button rounded-md bg-[#fb8961] px-6 py-2 capitalize"
				>Join us</a
			>
			<a href="/contact" class="hero-button rounded-md bg-[#04095d] px-6 py-2 capitalize"
				>Reach out</a
			>
		</div>
	</div>
</section>
<HeroNav />

<style>
	.overlay {
		background: linear-gradient(to bottom, hsla(0, 9%, 0%, 0.5), hsla(0, 9%, 0%, 0.5));
	}

	h1 {
		font-style: oblique;
	}

	section {
		/* background: url('../../lib/assets/images/schoolImage1.jpg'); */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
	}

	.custom-text-shadow {
		/* text-shadow: 2px 2px 4px #fb8961; */
	}
</style>
