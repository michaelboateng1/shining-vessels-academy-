<script>
	const { faqs } = $props();

	let current = $state(null);

	const toggleFaq = (i) => {
		current = i !== current ? i : null;
	};
</script>

<section class="mt-20">
	<h2 class="customShadow mb-[3rem] text-center text-[2.5rem] font-bold text-[#04095d] capitalize">
		Questions & Answers
	</h2>

	<div class="container mx-auto grid grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay={200}>
		{#each faqs as faq, i}
			<div class={i === current ? 'rounded-lg shadow-sm' : ''}>
				<div
					onclick={() => toggleFaq(i)}
					class=" rounded-t-lg border-l-4 border-[#ccc] bg-[#04095d] p-5 text-lg text-white transition-all duration-100 {i !==
					current
						? 'rounded-lg shadow-sm'
						: ''}"
				>
					<h1>{faq.question}</h1>
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
