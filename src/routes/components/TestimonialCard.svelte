<script>
	export let testimony;
	export let scrollUp;
	export let scrollDown;
	export let scrollPosition;
	export let i;
</script>


<div class="absolute top-0 left-10 z-10 h-auto w-1/2 transition-all duration-1000 {i === scrollPosition ? "opacity-100 z-20" : "opacity-0 z-0"}">
	<figure class="relative">
		<img src={testimony.img} alt={testimony.alt} class="h-full w-full object-cover" />
		<div
	class="absolute top-1/2 left-0 z-20 flex h-auto w-full translate-y-1/2 items-center justify-between"
>
			<div onclick={() => scrollUp()} class="flex h-10 w-10 items-center justify-center">
				<i
					class="fa-regular fa-circle-up cursor-pointer text-3xl text-[#fb8961] transition-colors duration-300 hover:text-[#04095d]"
					></i
				>
			</div>
			<div onclick={() => scrollDown()} class="flex h-10 w-10 items-center justify-center">
				<i
					class="fa-regular fa-circle-down cursor-pointer text-3xl text-[#fb8961] transition-colors duration-300 hover:text-[#04095d]"
					></i
				>
			</div>
		</div>
	</figure>
</div>
<div
	class=" absolute top-58 right-10 flex h-[400px] w-1/2 items-center justify-center border-2 border-[#ccc] pr-20 pl-30 transition-all duration-1000 {i === scrollPosition ? "opacity-100 z-10" : "opacity-0 z-0"}"
>
	<div class="relative">
		<p>{testimony.text}</p>
	</div>
</div>

<style>
	p::before {
		content: '\275D';
		font-size: 3rem;
		float: left;
		clear: both;
		position: absolute;
		top: -50px;
		left: -25px;
		color: #fb8961;
	}
	p::after {
		content: '\275E';
		font-size: 3rem;
		float: right;
		position: absolute;
		right: -25px;
		color: #fb8961;
	}

	img{
		animation: fadeImage 3ms 0ms 1 forwards;
	}

	@keyframes fadeImage{
		0%{
			opacity: 0;
		}

		50%{
			opacity: .5;
		}

		100%{
			opacity: 1;
		}
	}
</style>
