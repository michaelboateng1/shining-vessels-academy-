<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let sectionElement;
	let headingElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		setTimeout(() => {
			if (!sectionElement || !headingElement) {
				return;
			}

			const text = headingElement.textContent;
			headingElement.innerHTML = '';
			
			const chars = text.split('').map((char) => {
				const span = document.createElement('span');
				span.textContent = char === ' ' ? '\u00A0' : char;
				span.style.display = 'inline-block';
				return span;
			});

			chars.forEach((char) => headingElement.appendChild(char));

			gsap.set(chars, { opacity: 0, x: -50 });

			ScrollTrigger.create({
				trigger: sectionElement,
				start: 'top 75%',
				once: true,
				onEnter: () => {
					gsap.to(chars, {
						opacity: 1,
						x: 0,
						duration: 0.5,
						stagger: 0.05,
						ease: 'power2.out'
					});
				}
			});
		}, 100);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<section class="mt-20 px-5 flex h-screen w-full flex-col items-center justify-center" bind:this={sectionElement}>
	<h2 class=" sm:text-5xl text-4xl font-bold text-[#04095d]" bind:this={headingElement}>Experience Shining Vessels Academy</h2>
	<div class="mt-10 flex gap-5 sm:gap-30">
		<a
			href="/contact"
			class="rounded-4xl text-nowrap border-2 border-[#fb8961] bg-[#fb8961] sm:px-8 sm:py-2 px-5 py-1 text-md font-semibold text-white capitalize transition-all duration-300 hover:border-[#04095d] hover:bg-[#04095d]"
			>Visit us</a
		>
		<a
			href="/admission"
			class="rounded-4xl text-nowrap border-2 border-white sm:px-8 sm:py-2 px-5 py-1 text-md font-semibold text-white capitalize transition-all duration-300 hover:border-[#04095d] hover:bg-[#04095d] hover:text-white"
			>Apply To SVA</a
		>
	</div>
</section>

<style>
	section {
		background:
			linear-gradient(
				to bottom,
				hsla(237, 92%, 19%, 0.8),
				hsla(0, 0%, 100%, 0.4),
				hsla(237, 92%, 19%, 0.8)
			),
			url('../../lib/assets/images/schoolImage2.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	h2 {
		text-shadow: 1px 1px 2px #fb8961;
	}
</style>
