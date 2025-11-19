<script>
	import Heading from '../components/Heading.svelte';
	import Testimonials from '../components/Testimonials.svelte';

	import backgroundImage from '$lib/assets/images/studentsPlaying2.jpg';

	const message =
		'Discover what parents and students are saying about their transformative experiences with our Coding, Abacus, and Robotics programs. These testimonials showcase the real impact of our innovative approach to technology education.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-5xl font-bold" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Testimonials
		</h1>
	</Heading>
	<Testimonials />
</main>
