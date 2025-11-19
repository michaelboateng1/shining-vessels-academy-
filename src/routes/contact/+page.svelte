<script>
	import ContactForm from '../components/ContactForm.svelte';
	import Heading from '../components/Heading.svelte';

	import backgroundImage from '$lib/assets/images/classRoom2.jpg';

	const message =
		'We\'d love to hear from you! Whether you have questions about our programs in Coding, Abacus Training, or Robotics, or want to schedule a visit to our campus in Santasi, Ahenema Kokoben, our team is here to help. Reach out to us via phone, email, or visit us during school hours to learn more about how we can support your child\'s educational journey.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			Contact <span class="text-[#fb8961]">SVA</span>
		</h1>
	</Heading>
	<ContactForm />
</main>
