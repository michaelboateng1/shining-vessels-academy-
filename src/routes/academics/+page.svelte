<script>
	import Heading from '../components/Heading.svelte';
	import classRoom2 from '$lib/assets/images/classRoom2.jpg';

	const message =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia cupiditate quasi assumenda incidunt, repellendus labore non, nihil quas autem iusto optio. Assumenda in repellendus vero suscipit tempora laborum ad dicta quasi, neque nemo quae at, numquam sunt itaque id ea ducimus! Cum distinctio totam fuga molestias dicta quia quisquam!';
</script>

<main>
	<Heading {message} backgroundImage={classRoom2}>
		<h1 class="mb-4 text-3xl sm:text-5xl font-bold" data-aos="fade-in">
			About <span class="text-[#fb8961]">SVA</span> Academics
		</h1>
	</Heading>
	<Academics />
</main>
