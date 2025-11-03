<script>
	import { fade } from 'svelte/transition';
	import FAQ from '$lib/components/FAQ.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import classRoom3 from '$lib/assets/images/classRoom3.jpg';

	const message = 'Find answers to common questions about our school, programs, and admission process.';

	const faqs = [
		{
			question: 'What are the school hours?',
			answer:
				'Our regular school hours are from 8:00 AM to 3:00 PM, Monday through Friday. Early drop-off and after-school care programs are available starting at 7:00 AM and ending at 6:00 PM.'
		},
		{
			question: 'What is the student-to-teacher ratio?',
			answer:
				'We maintain a low student-to-teacher ratio of 12:1 to ensure personalized attention and support for each student. In some specialized programs, the ratio may be even lower.'
		},
		{
			question: 'Do you offer transportation services?',
			answer:
				'Yes, we provide transportation services for students within our designated bus routes. There may be an additional fee for this service. Please contact our transportation department for specific route information and availability.'
		},
		{
			question: 'What extracurricular activities are available?',
			answer:
				'We offer a wide range of extracurricular activities including sports teams, music programs, art clubs, robotics, debate team, and more. Activities vary by grade level and season.'
		},
		{
			question: 'How can parents get involved?',
			answer:
				'We encourage parent involvement through our Parent-Teacher Association (PTA), volunteer opportunities, classroom assistance, and school events. Please visit our Parent Portal or contact the main office for more information.'
		},
		{
			question: 'What is your approach to student safety?',
			answer:
				'Student safety is our top priority. We have comprehensive safety protocols including secure campus access, regular safety drills, trained staff, and a zero-tolerance policy for bullying. All staff members undergo thorough background checks.'
		}
	];
</script>

<main>
	<Heading {message} backgroundImage={classRoom3} transition={fade({ duration: 500 })}>
		<h1 class="mb-4 text-3xl sm:text-5xl font-bold" data-aos="fade-in">
		</h1>
	</Heading>
	<FAQ {faqs} />
</main>
