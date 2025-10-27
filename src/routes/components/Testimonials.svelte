<script>
	import TestimonialCard from './TestimonialCard.svelte';
	import image1 from '$lib/assets/images/Testimonials/pexels-juanpphotoandvideo-1139743.jpg';
	import image2 from '$lib/assets/images/Testimonials/pexels-moose-photos-170195-1036622(1).jpg';
	import image3 from '$lib/assets/images/Testimonials/pexels-olly-834863.jpg';

	const testimonies = [
		{
			img: image1,
			alt: 'Image1',
			text: 'Boateng ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt iure commodi sed! Porro ipsum nisi deleniti consequuntur quisquam nemo delectus minus neque vero magni voluptas explicabo quibusdam, ut, quaerat eveniet inventore molestiae nulla officia? Inventore odit ea dolorem eum quod, expedita, libero quidem facere necessitatibus qui, quasi minima nesciunt?'
		},
		{
			img: image2,
			alt: 'Image1',
			text: 'Hey ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt iure commodi sed! Porro ipsum nisi deleniti consequuntur quisquam nemo delectus minus neque vero magni voluptas explicabo quibusdam, ut, quaerat eveniet inventore molestiae nulla officia? Inventore odit ea dolorem eum quod, expedita, libero quidem facere necessitatibus qui, quasi minima nesciunt?'
		},
		{
			img: image3,
			alt: 'Image1',
			text: 'Michael ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt iure commodi sed! Porro ipsum nisi deleniti consequuntur quisquam nemo delectus minus neque vero magni voluptas explicabo quibusdam, ut, quaerat eveniet inventore molestiae nulla officia? Inventore odit ea dolorem eum quod, expedita, libero quidem facere necessitatibus qui, quasi minima nesciunt?'
		}
	];

	let scrollPosition = $state(0);
	let current = $state(testimonies[0]);

	const changeTestimony = (change) => {
		current = testimonies[change];
	};

	const scrollUp = () => {
		scrollPosition = scrollPosition === 0 ? testimonies.length - 1 : --scrollPosition;
		changeTestimony(scrollPosition);
	};
	const scrollDown = () => {
		scrollPosition = scrollPosition === testimonies.length - 1 ? 0 : ++scrollPosition;
		changeTestimony(scrollPosition);
	};
</script>

<section class="relative container mx-auto mt-30 h-screen">
	<div class="flex h-full flex-col gap-10 overflow-y-scroll">
		<!-- {#each testimonies as testimonial} -->
		<!-- {console.log(current.img)} -->
		<TestimonialCard testimony={current} />
		<!-- {/each} -->
	</div>
	<div
		class="absolute top-1/2 left-0 z-10 flex h-auto w-full translate-y-1/2 items-center justify-between"
	>
	<!-- TODO:Remove Up and Down -->
		<div onclick={() => scrollUp()} class="flex h-10 w-10 items-center justify-center">
			<i
				class="fa-regular fa-circle-up cursor-pointer text-3xl text-[#fb8961] transition-colors duration-300 hover:text-[#04095d]"
				>Up</i
			>
		</div>
		<div onclick={() => scrollDown()} class="flex h-10 w-10 items-center justify-center">
			<i
				class="fa-regular fa-circle-down cursor-pointer text-3xl text-[#fb8961] transition-colors duration-300 hover:text-[#04095d]"
				>Down</i
			>
		</div>
	</div>
</section>
