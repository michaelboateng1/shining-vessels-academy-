<script>
	import heroVideo from '$lib/assets/videos/19 PRESENTATION OF CERTIFICATE SVA 2024 GRADUATION.mp4';
</script>

<section class="relative h-screen w-full">
	<video src={heroVideo} autoplay loop muted class="absolute h-full w-full object-cover"></video>
	<div class="overlay absolute z-10 h-full w-full"></div>
	<div
		class="absolute z-10 flex h-full w-[100ch] flex-col justify-center space-y-10 pl-20 text-white"
	>
		<h2 class="custom-text-shadow mt-24 text-7xl font-bold text-white">
			Ready to start your journey at
		</h2>
		<h1 class="custom-text-shadow text-7xl font-bold text-[#04095d]">Shining Vessels</h1>
		<p class="text-xl font-semibold">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse perspiciatis exercitationem
			nulla animi ipsum perferendis incidunt qui quia cumque, dicta sit hic tempora labore vero
			libero fuga eveniet totam vitae.
		</p>
		<div class=" flex items-center justify-start gap-4 text-xl font-bold text-white">
			<a href="/admission" class="rounded-md bg-[#fb8961] px-10 py-4 capitalize">Join us</a>
			<a href="/contact" class="rounded-md bg-[#04095d] px-10 py-4 capitalize">Reach out</a>
		</div>
	</div>
</section>

<style>
	.overlay {
		background: linear-gradient(
			to bottom,
			hsla(237, 92%, 19%, 0.8),
			hsla(0, 0%, 100%, 0.5),
			hsla(237, 92%, 19%, 0.8)
		);
	}

	.custom-text-shadow {
		text-shadow: 4px 4px 4px #fb8961;
	}
</style>
