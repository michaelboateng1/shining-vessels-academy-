<script>
	import Heading from '../components/Heading.svelte';
	import Testimonials from '../components/Testimonials.svelte';

	const message =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore adipisci veritatis, ullam perspiciatis debitis excepturi ipsum dolores error maiores perferendis.';
</script>

<main>
	<Heading {message}>
		<h1 class="mb-4 text-5xl font-bold" data-aos="fade-in">
			About <span class="text-[#fb8961]">SVA</span> Academics
		</h1>
	</Heading>
	<Testimonials />
</main>
