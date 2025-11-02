<script>
	import InfoCard from './InfoCard.svelte';

	export let cards;
</script>

{#each cards as card, i}
	<InfoCard title={card.title} description={card.description} image={card.image} flip={card.flip} />
{/each}
