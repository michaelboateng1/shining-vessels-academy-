<script>
    export let mobileNav;
    export let hundleMobileNav;
</script>

<nav class="fixed sm:hidden bottom-0 right-0 transform transition-transform duration-1000 w-full h-screen z-30 overflow-hidden py-20 {mobileNav ? "translate-x-0" : "translate-x-500"}">
    <div class="w-full h-full flex flex-col space-y-5 mt-10 items-center justify-center">
        <ul class="flex flex-col space-y-5 text-[#04095d] text-center text-2xl font-bold">
			<li>
				<a
                onclick={() => hundleMobileNav()}
					href="/"
					>Home</a
				>
			</li>
			<li>
				<a onclick={() => hundleMobileNav()}
					href="/about"
					>About</a
				>
			</li>
			<li>
				<a onclick={() => hundleMobileNav()}
					href="/admission"
					>Admissions</a
				>
			</li>
			<li>
				<a onclick={() => hundleMobileNav()}
					href="/academics"
					>Academics</a
				>
			</li>
			<li>
				<a onclick={() => hundleMobileNav()}
					href="/school-activities"
					>School Activities</a
				>
			</li>
		</ul>

		<div class="flex items-center font-bold">
			<a href="/admission" onclick={() => hundleMobileNav()} class="w-1/2 rounded-l-full bg-[#fb8961] px-5 py-2 text-md text-nowrap text-white capitalize">Apply Now</a>
			<a href="/contact" onclick={() => hundleMobileNav()} class="w-1/2 rounded-r-full bg-[#04095d] px-5 py-2 text-md text-nowrap text-white capitalize">Contact us</a>
		</div>
	</div>
</nav>

<style>
    nav {
        background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(5px);
	}

    li:hover, 
    li:active{
        color: #fb8961;
    }
</style>
