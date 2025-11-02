<script>
	export let i;
</script>

<div data-aos="flip-left" data-aos-delay={i * 150}>
	<section
	class="hero-nav-card flex h-auto w-[200px] sm:w-[350px] flex-col items-center justify-center border-2 border-[#fb8961] rounded-[5px] hover:transform hover:-translate-y-5 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
>
	<slot />
</section>
</div>

