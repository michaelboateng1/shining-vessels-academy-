<script>
	import Heading from '../components/Heading.svelte';
	import AboutInfo from '../components/AboutInfo.svelte';
	import AboutOurAdmission from '../components/AboutOurAdmission.svelte';

	import backgroundImage from '$lib/assets/images/playGround2.jpg';

	const message =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum itaque iusto quasi in molestiae dolores, ullam expedita? Hic, ullam sint. Maxime tenetur quibusdam aspernatur eos id corporis commodi animi!';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Admission
		</h1>
	</Heading>
	<AboutOurAdmission />
</main>
