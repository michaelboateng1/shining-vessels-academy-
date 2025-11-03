<script>
	import Calender from '../components/Calender.svelte';
	import Heading from '../components/Heading.svelte';

	import backgroundImage from '$lib/assets/images/classRoom3.jpg';

	const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class=" mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Events
		</h1>
	</Heading>
	<Calender />
</main>
