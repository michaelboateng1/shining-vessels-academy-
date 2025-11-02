<script>
	import Heading from '../components/Heading.svelte';
	import AboutInfo from '../components/AboutInfo.svelte';
	import AboutOurAdmission from '../components/AboutOurAdmission.svelte';

	const message =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum itaque iusto quasi in molestiae dolores, ullam expedita? Hic, ullam sint. Maxime tenetur quibusdam aspernatur eos id corporis commodi animi!';
</script>

<main>
	<Heading {message}>
		<h1 class="mb-4 text-3xl sm:text-5xl font-bold" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Admission
		</h1>
	</Heading>
	 <AboutOurAdmission />
</main>
