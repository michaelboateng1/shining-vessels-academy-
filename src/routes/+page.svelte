<script>
	import Hero from './components/Hero.svelte';
	import Welcome from './components/Welcome.svelte';
	import CTA from './components/CTA.svelte';
	// import Testimonials from './components/Testimonials.svelte';
	import Calender from './components/Calender.svelte';
	import FAQ from './components/FAQ.svelte';

	const faqs = [
		{
			question: 'Question?',
			answer: 'Answer'
		},
		{
			question: 'Question?',
			answer: 'Answer'
		},
		{
			question: 'Question?',
			answer: 'Answer'
		},
		{
			question: 'Question?',
			answer: 'Answer'
		}
	];
</script>

<main>
	<Hero />
	<Welcome />
	<CTA />
	<Calender />
	<FAQ {faqs} />
</main>
