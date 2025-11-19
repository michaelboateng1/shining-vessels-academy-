<script>
	import Hero from './components/Hero.svelte';
	import Welcome from './components/Welcome.svelte';
	import CTA from './components/CTA.svelte';
	import Calender from './components/Calender.svelte';
	import FAQ from './components/FAQ.svelte';
	import Testimonials from './components/Testimonials.svelte';

	const faqs = [
		{
			question: 'What programs does Shining Vessels Academy offer?',
			answer: 'We offer comprehensive programs in Coding, Abacus Training, and Robotics designed to develop critical thinking, problem-solving skills, and technological literacy in students of all ages.'
		},
		{
			question: 'What are the admission requirements for new students?',
			answer: 'No prior experience required! We welcome students from age 5 and above. Our programs are designed to accommodate different skill levels, from beginners to advanced learners.'
		},
		{
			question: 'How long are the training programs?',
			answer: 'Program duration varies from 3 months to 1 year depending on the course and skill level. We offer flexible scheduling with weekend and weekday classes to fit your needs.'
		},
		{
			question: 'Does Shining Vessels Academy provide certification?',
			answer: 'Yes, we provide completion certificates for all programs and help students prepare for recognized certifications in programming and robotics. Our graduates have gone on to excel in STEM fields.'
		}
	];
</script>

<main>
	<Hero />
	<Welcome />
	<CTA />
	<Calender />
	<FAQ {faqs} />
	<Testimonials />
</main>