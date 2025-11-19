<script>
	import Heading from '../components/Heading.svelte';
	import FAQ from '../components/FAQ.svelte';

	import backgroundImage from '$lib/assets/images/studentsInClass2.jpg';

	import { faqs } from '$lib';

	const message =
		'Find answers to common questions about our programs in Coding, Abacus Training, and Robotics. If you can\'t find what you\'re looking for, feel free to contact us directly.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			Questions About <span class="text-[#fb8961]">SAV</span>
		</h1>
	</Heading>
	<FAQ {faqs} />
</main>
