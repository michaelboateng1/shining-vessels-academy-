<script>
	import image from '$lib/assets/images/entertainment.jpg';
</script>

<section
	class="flex h-[600px] flex-col justify-center rounded-lg shadow-sm"
	data-aos="fade-up"
	data-aos-delay={200}
>
	<div class="h-auto w-full overflow-hidden rounded-t-lg">
		<img src={image} alt="" class="h-full w-full object-cover" />
	</div>
	<div class=" px-5 py-10">
		<h2 class="mb-2 ml-2 border-l-4 border-[#fb8961] pl-4 font-semibold">Lorem, ipsum dolor.</h2>
		<p class=" p-2 text-sm">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad nulla veniam doloremque accusamus
			aut! Distinctio consequuntur minus beatae odio unde?
		</p>
		<a
			href="/about"
			class=" mt-20 ml-auto block w-[150px] bg-[#fb8961] px-4 py-2 text-center text-sm font-semibold text-white italic"
			>Learn more</a
		>
	</div>
</section>
