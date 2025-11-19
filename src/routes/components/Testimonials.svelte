<script>
	import TestimonialCard from './TestimonialCard.svelte';
	import image1 from '$lib/assets/images/Testimonials/pexels-juanpphotoandvideo-1139743.jpg';
	import image2 from '$lib/assets/images/Testimonials/pexels-moose-photos-170195-1036622(1).jpg';
	import image3 from '$lib/assets/images/Testimonials/pexels-olly-834863.jpg';

	const testimonies = [
		{
			img: image1,
			alt: 'David Thompson',
			name: 'David Thompson',
			role: 'Parent of 12-year-old student',
			text: 'My son\'s confidence in math has skyrocketed since starting the Abacus program at Shining Vessels Academy. The teaching methods are engaging and effective. He now excels in school and enjoys problem-solving challenges.'
		},
		{
			img: image2,
			alt: 'Sarah Martinez',
			name: 'Sarah Martinez',
			role: 'Software Developer, Tech Innovations',
			text: 'The coding program at Shining Vessels Academy gave me the perfect foundation to pursue a career in technology. The instructors are patient and knowledgeable, making complex concepts easy to understand. I\'m now working as a software developer!'
		},
		{
			img: image3,
			alt: 'Michael Chen',
			name: 'Michael Chen',
			role: 'High School Student',
			text: 'The Robotics program is amazing! I learned how to build and program robots from scratch. It sparked my interest in engineering and helped me win first place in a regional science competition.'
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



