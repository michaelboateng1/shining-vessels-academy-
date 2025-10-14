<script>
	import NavBar from './NavBar.svelte';
	import SchoolLogo from '$lib/assets/images/310428482_545284817602681_4675978038248228164_n.jpg';
</script>

<header class="justify-betwee fixed z-20 flex w-full">
	<div class=" absolute top-5 left-16 h-auto w-[100px] overflow-hidden rounded-full">
		<img src={SchoolLogo} alt="School Logo" />
	</div>

	<div class="ml-auto grid justify-items-end">
		<section class="flex items-center justify-end">
			<div class="flex items-center justify-around gap-10 bg-[#04095d] pr-5 text-white">
				<div class="flex items-center justify-evenly text-lg font-bold text-white">
					<a href="/alumini" class="flex items-center justify-around gap-2 bg-[#fb8961] px-6 py-2">
						<i class="fa-solid fa-users-line text-xl"></i>
						<span>Alumini</span>
					</a>
					<a href="/" class="ml-5 flex items-center justify-around gap-2">
						<i class="fa-solid fa-house-chimney text-xl"></i>
						<span>Home</span>
					</a>
					<a href="/calander" class="ml-5 flex items-center justify-around gap-2">
						<i class="fa-solid fa-calendar-days text-xl"></i>
						<span>Calander</span>
					</a>
				</div>

				<div class="flex items-center justify-between gap-8 text-sm font-semibold">
					<a href="tel:+23345324242">+23345324242</a>
					<a href="mailto:example@gmail.com">example@gmail.com</a>
				</div>
			</div>
		</section>
		<NavBar />
	</div>
</header>

<!-- container mx-auto xl:top-16 xl:left-1/2 xl:-translate-1/2 xl:transform -->
