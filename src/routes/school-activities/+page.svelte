<script>
	import WhoWeAre from '../components/WhoWeAre.svelte';
	import Heading from '../components/Heading.svelte';
	import WhereYouBelong from '../components/WhereYouBelong.svelte';
	import ShapeDesign from '../components/shapeDesign.svelte';
	import Activities from '../components/Activities.svelte';

	import backgroundImage from '$lib/assets/images/entertainment2.jpg';

	import { schoolActivities } from '$lib';

	const message =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum atque quisquam voluptatibus possimus illo, autem minus earum eligendi nulla veritatis.';
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
	<div class="container mx-auto grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
		{#each schoolActivities as activity}
			<Activities {activity} />
		{/each}
	</div>
</main>
