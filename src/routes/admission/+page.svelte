<script>
	import Heading from '../components/Heading.svelte';
	import classRoom from '$lib/assets/images/classRoom.jpg';

	const message =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia cupiditate quasi assumenda incidunt, repellendus labore non, nihil quas autem iusto optio. Assumenda in repellendus vero suscipit tempora laborum ad dicta quasi, neque nemo quae at, numquam sunt itaque id ea ducimus! Cum distinctio totam fuga molestias dicta quia quisquam!';
</script>

<main>
	<Heading {message} backgroundImage={classRoom}>
		<h1 class="mb-4 text-3xl sm:text-5xl font-bold" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Admission
		</h1>
	</Heading>
	 <AboutOurAdmission />
</main>
