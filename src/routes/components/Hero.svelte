<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	// import heroVideo from '$lib/assets/videos/19 PRESENTATION OF CERTIFICATE SVA 2024 GRADUATION1.mp4';
	import HeroNav from './HeroNav.svelte';

	// let videoContainer;

	onMount(() => {
		// const video = document.createElement('video');
		// video.src = heroVideo;
		// video.autoplay = false;
		// video.loop = true;
		// video.muted = true;
		// video.disablePictureInPicture = true;
		// video.className = 'absolute h-full w-full object-cover';
		// videoContainer.appendChild(video);

		const tl = gsap.timeline({
			defaults: { ease: 'power3.out' },
			onComplete: () => {
				// video.play();
			}
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
			)
			.from(
				'.hero-description',
				{
					y: 50,
					opacity: 0,
					duration: 0.8
				},
				'-=0.4'
			)
			.from(
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
	<!-- <div bind:this={videoContainer} class="video-container"></div> -->
	<div class="overlay absolute z-10 h-full w-full"></div>
	<div
		class="absolute z-10 flex h-full w-[100ch] flex-col justify-center space-y-5 pl-20 text-white"
	>
		<h2 class="hero-heading-1 custom-text-shadow mt-24 text-5xl font-bold text-white">
			<span class="hero-word inline-block italic">Ready</span>
			<span class="hero-word inline-block italic">to</span>
			<span class="hero-word inline-block italic">start</span>
			<span class="hero-word inline-block italic">your</span>
			<span class="hero-word inline-block italic">journey</span>
			<span class="hero-word inline-block italic">at</span>
		</h2>
		<h1 class="hero-heading-2 custom-text-shadow text-5xl font-bold text-[#fb8961]">
			Shining Vessels?
		</h1>
		<p class="hero-description text-md font-semibold">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse perspiciatis exercitationem
			nulla animi ipsum perferendis incidunt qui quia cumque, dicta sit hic tempora labore vero
			libero fuga eveniet totam vitae.
		</p>
		<div class=" mt-5 flex items-center justify-start gap-4 text-md font-bold text-white">
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
		background: linear-gradient(
			to bottom,
			hsla(0, 9%, 0%, 0.5),
			hsla(0, 9%, 0%, 0.5)
		);
	}

	h1{
		font-style: oblique;
	}

	section {
		background: url('../../lib/assets/images/schoolImage1.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
	}

	.custom-text-shadow {
		/* text-shadow: 2px 2px 4px #fb8961; */
	}
</style>
