<script>
	import Heading from '../components/Heading.svelte';
	import AboutInfo from '../components/AboutInfo.svelte';
	import AboutOurAdmission from '../components/AboutOurAdmission.svelte';

	import backgroundImage from '$lib/assets/images/playGround2.jpg';

	const message =
		'Begin your child\'s journey into the world of technology at Shining Vessels Academy. Our admission process is designed to help you discover how our innovative programs in Coding, Abacus Training, and Robotics can unlock your child\'s full potential. Join our community of young innovators today!';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Admission
		</h1>
	</Heading>
	<AboutOurAdmission />
</main>
