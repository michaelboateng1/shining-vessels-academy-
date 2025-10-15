<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		AOS.init({
			duration: 800,
			easing: 'ease-in-out',
			once: true,
			offset: 100
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<!-- primary color: #fb8961 -->
<!-- secondary color: #04095d -->
<!-- background color: #fff -->

<!-- <svg fill="#fb8961" width="108px" height="108px" viewBox="-15.36 -15.36 286.72 286.72" xmlns="http://www.w3.org/2000/svg" stroke="#fb8961" stroke-width="11.264" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.024"></g><g id="SVGRepo_iconCarrier"> <path d="M96 203.996A4.002 4.002 0 0 1 91.996 208H68.004A4.002 4.002 0 0 1 64 203.996v-23.992A4.002 4.002 0 0 1 68.004 176h23.992A4.002 4.002 0 0 1 96 180.004v23.992zm0-64A4.002 4.002 0 0 1 91.996 144H68.004A4.002 4.002 0 0 1 64 139.996v-23.992A4.002 4.002 0 0 1 68.004 112h23.992A4.002 4.002 0 0 1 96 116.004v23.992zm0-64A4.002 4.002 0 0 1 91.996 80H68.004A4.002 4.002 0 0 1 64 75.996V52.004A4.002 4.002 0 0 1 68.004 48h23.992A4.002 4.002 0 0 1 96 52.004v23.992zm64 0A4.002 4.002 0 0 0 164.004 80h23.992A4.002 4.002 0 0 0 192 75.996V52.004A4.002 4.002 0 0 0 187.996 48h-23.992A4.002 4.002 0 0 0 160 52.004v23.992zm0 64a4.002 4.002 0 0 0 4.004 4.004h23.992a4.002 4.002 0 0 0 4.004-4.004v-23.992a4.002 4.002 0 0 0-4.004-4.004h-23.992a4.002 4.002 0 0 0-4.004 4.004v23.992zm0 64a4.002 4.002 0 0 0 4.004 4.004h23.992a4.002 4.002 0 0 0 4.004-4.004v-23.992a4.002 4.002 0 0 0-4.004-4.004h-23.992a4.002 4.002 0 0 0-4.004 4.004v23.992z" fill-rule="evenodd"></path> </g></svg> -->
<!-- <svg
	fill="#fb8961"
	width="107px"
	height="107px"
	viewBox="-7.68 -7.68 271.36 271.36"
	xmlns="http://www.w3.org/2000/svg"
	transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
	stroke="#fb8961"
	stroke-width="0.00256"
	><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
		id="SVGRepo_tracerCarrier"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke="#CCCCCC"
		stroke-width="2.56"
	></g><g id="SVGRepo_iconCarrier">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M183.427 136.897c11.578 11.362 3.954 31.242-11.729 31.004-15.682-.237-71.904-.237-87.357-.237-15.453 0-23.261-18.467-11.853-29.982 2.767-2.793 6.33-6.412 10.236-10.382 12.203-12.397 27.762-28.205 32.902-32.878 6.786-6.169 18.112-7.464 25.444 0 7.331 7.464 30.779 31.112 42.357 42.475zm-14.608 14.261c2.214.011 2.735-2.24 1.173-3.795v.001l-39.486-39.31c-1.554-1.548-4.107-1.561-5.684-.014l-39.597 39.868c-1.578 1.548-1.064 2.812 1.146 2.823l82.448.427z"
		></path>
	</g></svg
> -->

<!-- <svg width="100px" height="100px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet" fill="#fb8961" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#fb8961" d="M478.679 226.691c-31.649 0-60.946 19.093-80.381 52.383l-.004.006c-8.907 15.252-20.189 23.999-30.954 23.999c-10.769 0-22.052-8.75-30.958-24.006l-.014-.023c-19.435-33.276-48.726-52.36-80.368-52.36c-31.649 0-60.947 19.093-80.381 52.382c-8.907 15.257-20.19 24.007-30.958 24.007c-10.768 0-22.052-8.75-30.958-24.007c-19.435-33.289-48.732-52.382-80.381-52.382c-15.803 0-28.614 12.811-28.614 28.614s12.811 28.614 28.614 28.614c10.768 0 22.052 8.75 30.958 24.007c19.435 33.289 48.732 52.382 80.381 52.382c31.648 0 60.946-19.093 80.381-52.382c8.907-15.257 20.19-24.007 30.958-24.007c10.766 0 22.048 8.747 30.954 23.999l.004.006c19.435 33.29 48.732 52.383 80.382 52.383c31.644 0 60.939-19.088 80.373-52.369l.008-.013c8.906-15.256 20.189-24.006 30.957-24.006c15.803 0 28.614-12.812 28.614-28.614c.001-15.802-12.811-28.613-28.613-28.613z"></path></g></svg> -->
