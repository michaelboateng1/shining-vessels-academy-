<script>
	import Heading from '../components/Heading.svelte';
	import Academics from '../components/Academics.svelte';

	import backgroundImage from '$lib/assets/images/schoolWall.jpg';

	const message =
		'At Shining Vessels Academy, we offer a cutting-edge curriculum focused on Coding, Abacus Training, and Robotics. Our innovative programs are designed to develop critical thinking, problem-solving, and technical skills that prepare students for the digital future.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			About <span class="text-[#fb8961]">SVA</span> Academics
		</h1>
	</Heading>
	<Academics />
</main>
