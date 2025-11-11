<script>
	import AcademicsCard from './AcademicsCard.svelte';
	import Heading from './Heading.svelte';

	import { academics } from '$lib';

</script>

<main>
	<div class="grid w-full grid-cols-1 sm:grid-cols-2 lggrid-cols-3 gap-8 px-10 py-20">
		{#each academics as academic }
			<AcademicsCard image={academic.image} title={academic.title} body={academic.body} />
		{/each}
	</div>
</main>
