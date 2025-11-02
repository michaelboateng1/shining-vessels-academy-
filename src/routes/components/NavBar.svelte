<script>
	export let scrolled;
</script>

<nav class="sm:flex hidden items-center justify-between py-7 lg:py-5 lg:pr-8">
	<div class="flex items-center justify-between gap-10">
		<ul class="flex items-center justify-evenly text-lg font-semibold text-white {scrolled ? "text-[#04095d]" : "text-white"}">
			<li>
				<a
					href="/"
					class="border-r-2 border-[#fb8961] px-4 py-2 transition-all duration-300 hover:text-[#fb8961] {scrolled ? "text-[#04095d]" : "text-white"}"
					>Home</a
				>
			</li>
			<li>
				<a
					href="/about"
					class="border-r-2 border-[#fb8961] px-4 py-2 transition-all duration-300 hover:text-[#fb8961] {scrolled ? "text-[#04095d]" : "text-white"}"
					>About</a
				>
			</li>
			<li>
				<a
					href="/admission"
					class="border-r-2 border-[#fb8961] px-4 py-2 transition-all duration-300 hover:text-[#fb8961] {scrolled ? "text-[#04095d]" : "text-white"}"
					>Admissions</a
				>
			</li>
			<li>
				<a
					href="/academics"
					class="border-r-2 border-[#fb8961] px-4 py-2 transition-all duration-300 hover:text-[#fb8961] {scrolled ? "text-[#04095d]" : "text-white"}"
					>Academics</a
				>
			</li>
			<li>
				<a
					href="/school-activities"
					class="lg:border-r-2 border-[#fb8961] px-4 py-2 transition-all duration-300 hover:text-[#fb8961] {scrolled ? "text-[#04095d]" : "text-white"}"
					>School Activities</a
				>
			</li>
		</ul>

		<div class=" flex items-center hidden lg:block font-bold">
			<a
				href="/admission"
				class="w-1/2 rounded-l-full bg-[#fb8961] px-5 py-2 text-md text-nowrap text-white capitalize {scrolled ? "text-[#fb8961]" : "text-white"}"
				>Apply Now</a
			>
			<a
				href="/contact"
				class="w-1/2 rounded-r-full bg-[#04095d] px-5 py-2 text-md text-nowrap text-white capitalize {scrolled ? "text-[#fb8961]" : "text-white"}"
				>Contact us</a
			>
		</div>
	</div>
</nav>
