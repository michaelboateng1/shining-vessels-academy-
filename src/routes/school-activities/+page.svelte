<script>
	import WhoWeAre from '../components/WhoWeAre.svelte';
	import Heading from '../components/Heading.svelte';
	import WhereYouBelong from '../components/WhereYouBelong.svelte';
	import ShapeDesign from '../components/shapeDesign.svelte';
	import Activities from '../components/Activities.svelte';

	import backgroundImage from '$lib/assets/images/entertainment2.jpg';

	import { schoolActivities } from '$lib';

	const message =
		'Explore our dynamic range of activities designed to nurture young minds in technology and cognitive development. From coding challenges to abacus competitions and robotics workshops, our programs foster creativity, critical thinking, and problem-solving skills in a fun, engaging environment.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Activities
		</h1>
	</Heading>
	<WhoWeAre />
	<WhereYouBelong />
	<ShapeDesign />
	<div class="container mx-auto grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-10 mt-60">
		{#each schoolActivities as activity, i}
			<Activities {activity} {i} />
		{/each}
	</div>
</main>
