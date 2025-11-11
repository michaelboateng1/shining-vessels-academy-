<script>
	import { fade } from 'svelte/transition';

	const { faqs } = $props();

	let current = $state(null);

	const toggleFaq = (i) => {
		current = i !== current ? i : null;
	};
</script>

<section class="mt-20">
	<h2 class="customShadow mb-10 sm:mb-[3rem] text-center text-3xl sm:text-[2.5rem] font-bold text-[#04095d] capitalize">
		Questions & Answers
	</h2>

	<div class="container mx-auto grid px-10 sm:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay={200}>
		{#each faqs as faq, i}
			<div class={i === current ? 'rounded-lg shadow-sm' : ''}>
				<div
					onclick={() => toggleFaq(i)}
					tabindex="0"
					role="button"
					onkeydown={() => toggleFaq}
					class=" rounded-t-lg border-l-4 border-[#ccc] bg-[#04095d] p-5 text-lg text-white transition-all duration-100 {i !==
					current
						? 'rounded-lg shadow-sm'
						: ''}"
				>
					<div class="flex items-center justify-between">
						<h1>{faq.question}</h1>
						<div class="ml-4 transition-transform duration-300 {i === current ? 'rotate-45' : ''}">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
							</svg>
						</div>
					</div>
				</div>
				<p
					class=" max-h-0 bg-[#ccc] px-10 text-[#04095d] transition-all duration-300 {i === current
						? 'max-h-full rounded-b-lg py-5'
						: 'max-h-0 overflow-hidden py-0 '}"
				>
					{faq.answer}
				</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.customShadow {
		text-shadow: 1px 1px 2px #fb8961;
	}
</style>
