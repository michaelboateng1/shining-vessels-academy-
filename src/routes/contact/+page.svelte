<script>
	import ContactForm from '../components/ContactForm.svelte';
	import Heading from '../components/Heading.svelte';

	import backgroundImage from '$lib/assets/images/classRoom2.jpg';

	const message =
		'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quas doloremque quibusdam provident cum necessitatibus quia blanditiis quam tempore? Quasi numquam quam officiis porro, laboriosam optio sapiente, perspiciatis placeat recusandae odio voluptatibus fugiat maxime quisquam rerum, cum dolorum et impedit.';
</script>

<main>
	<Heading {message} {backgroundImage}>
		<h1 class="mb-4 text-3xl font-bold sm:text-5xl" data-aos="fade-in">
			Contact <span class="text-[#fb8961]">SVA</span>
		</h1>
	</Heading>
	<ContactForm />
</main>
