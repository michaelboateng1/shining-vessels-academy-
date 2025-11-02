<script>
	import Heading from '../components/Heading.svelte';
	import FAQ from '../components/FAQ.svelte';

	const faqs = [
		{
			question: 'Lorem, ipsum.',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque cumque officia provident ratione est laborum, odit fugiat atque ad.'
		},
		{
			question: 'Lorem, ipsum.',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque cumque officia provident ratione est laborum, odit fugiat atque ad.'
		},
		{
			question: 'Lorem, ipsum.',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem itaque cumque officia provident ratione est laborum, odit fugiat atque ad.'
		}
	];

	const message =
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, commodi.';
</script>

<main>
	<Heading {message}>
		<h1 class="mb-4 text-3xl sm:text-5xl font-bold" data-aos="fade-in">
			Questions About <span class="text-[#fb8961]">SAV</span>
		</h1>
	</Heading>
	<FAQ {faqs} />
</main>
