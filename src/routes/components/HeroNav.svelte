<script>
	import HeroNavCard from './HeroNavCard.svelte';
	import ShapeDesign from './shapeDesign.svelte';

	const cardList = [
		{
			title: 'Academics',
			icon: 'fa-solid fa-book sm:pt-10 pt-5 text-5xl sm:text-6xl text-[#04095d]',
		},
		{
			title: 'Academics',
			icon: 'fa-solid fa-book sm:pt-10 pt-5 text-5xl sm:text-6xl text-[#04095d]',
		},
		{
			title: 'Academics',
			icon: 'fa-solid fa-book sm:pt-10 pt-5 text-5xl sm:text-6xl text-[#04095d]',
		}
	];
</script>


<div class=" flex flex-wrap w-full items-center justify-center sm:justify-evenly gap-10 mt-20">
	{#each cardList as card, i}
	<HeroNavCard {i}>
		<i class={card.icon}></i>
		<p class="sm:py-10 sm:text-2xl text-xl py-5 font-semibold text-[#04095d]">{card.title}</p>
	</HeroNavCard>
	{/each}
</div>
<ShapeDesign />
