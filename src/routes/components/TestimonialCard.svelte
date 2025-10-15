<script>
	export let image;
	export let altText;
	export let testimonyText;
</script>

<div class="relative">
	<div class="absolute">
		<img src={image} alt={altText} class="h-full w-full object-cover" />
	</div>
	<div class="letf-0 absolute top-0 border-2 border-[#ccc]">
		<p>{testimonyText}</p>
	</div>
</div>
