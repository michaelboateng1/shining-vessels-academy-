<script>
	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../app.css';
	import favicon from '$lib/assets/images/310428482_545284817602681_4675978038248228164_n.jpg';
	
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import ChatBot from './components/ChatBot.svelte';

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

<Header />
<ChatBot />
{@render children?.()}
<Footer />

<!-- primary color: #fb8961 -->
<!-- secondary color: #04095d -->
<!-- background color: #fff -->
