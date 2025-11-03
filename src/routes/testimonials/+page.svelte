<script>
	import Heading from '../components/Heading.svelte';
	import Testimonials from '../components/Testimonials.svelte';

	import backgroundImage from '$lib/assets/images/studentsPlaying2.jpg';

	const message =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore adipisci veritatis, ullam perspiciatis debitis excepturi ipsum dolores error maiores perferendis.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-5xl font-bold" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Testimonials
		</h1>
	</Heading>
	<Testimonials />
</main>
