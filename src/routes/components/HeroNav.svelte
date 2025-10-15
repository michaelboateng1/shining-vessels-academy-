<script>
	import HeroNavCard from './HeroNavCard.svelte';
	import ShapeDesign from './shapeDesign.svelte';

	const cardList = [
		{
			title: 'Academics',
			icon: 'fa-solid fa-book pt-10 text-6xl text-[#04095d]',
		},
		{
			title: 'Academics',
			icon: 'fa-solid fa-book pt-10 text-6xl text-[#04095d]',
		},
		{
			title: 'Academics',
			icon: 'fa-solid fa-book pt-10 text-6xl text-[#04095d]',
		}
	];
</script>


<div class=" flex h-[200px] h-[400px] items-center justify-evenly py-20">
	{#each cardList as card, i}
	<HeroNavCard {i}>
		<i class={card.icon}></i>
		<p class="py-10 text-2xl font-semibold text-[#04095d]">{card.title}</p>
	</HeroNavCard>
	{/each}
</div>
<ShapeDesign />
