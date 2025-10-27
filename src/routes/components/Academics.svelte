<script>
	import AcademicsCard from './AcademicsCard.svelte';
	import Heading from './Heading.svelte';

	const message =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quam blanditiis ipsam illum quod in officia voluptate, pariatur quasi!';
</script>

<main>
	<Heading {message}>
		<h1 class="mb-4 text-5xl font-bold" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Activities
		</h1>
	</Heading>

	<div class="grid w-full grid-cols-3 gap-8 px-10 py-20">
		<AcademicsCard />
		<AcademicsCard />
		<AcademicsCard />
		<AcademicsCard />
		<AcademicsCard />
		<AcademicsCard />
	</div>
</main>
