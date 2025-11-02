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

	const scrollUp = () => {
		scrollPosition = (scrollPosition + 1) % testimonies.length;
	};
	const scrollDown = () => {
		scrollPosition = (scrollPosition - 1 + testimonies.length) % testimonies.length;
	};
</script>

<section class="relative container mx-auto mt-30 h-screen hidden sm:block">
	<div class="flex h-full flex-col gap-10">
		<div class="relative h-auto w-full">
			{#each testimonies as testimony, i }
				<TestimonialCard {testimony} {scrollUp} {scrollDown} {scrollPosition} {i} />
			{/each}
		</div>
	</div>
</section>



