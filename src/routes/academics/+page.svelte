<script>
	import Heading from '../components/Heading.svelte';
	import Academics from '../components/Academics.svelte';

	const message ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore adipisci veritatis, ullam perspiciatis debitis excepturi ipsum dolores error maiores perferendis.';
</script>

<main>
	<Heading {message}>
		<h1 class="mb-4 text-3xl sm:text-5xl font-bold" data-aos="fade-in">
			About <span class="text-[#fb8961]">SVA</span> Academics
		</h1>
	</Heading>
	<Academics />
</main>
