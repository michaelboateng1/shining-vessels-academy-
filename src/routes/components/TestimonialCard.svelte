<script>
	export let testimony;

	// console.log(testimony.img);
</script>

<div class="relative h-auto w-full">
	<div class="absolute top-0 left-10 z-10 h-auto w-1/2">
		<img src={testimony.img} alt={testimony.alt} class="h-full w-full transition-all duration-300 object-cover" />
	</div>
	<div
		class=" absolute top-58 right-10 flex h-[400px] w-1/2 items-center justify-center border-2 border-[#ccc] pr-20 pl-30"
	>
		<div class="relative">
			<p>{testimony.text}</p>
		</div>
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
