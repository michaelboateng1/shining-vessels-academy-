<script>
	import Heading from '../components/Heading.svelte';
	import Academics from '../components/Academics.svelte';

	import backgroundImage from '$lib/assets/images/schoolWall.jpg';

	const message =
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore adipisci veritatis, ullam perspiciatis debitis excepturi ipsum dolores error maiores perferendis.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			About <span class="text-[#fb8961]">SVA</span> Academics
		</h1>
	</Heading>
	<Academics />
</main>
