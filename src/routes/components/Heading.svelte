<script>
	export let message;
	export let backgroundImage;
</script>

<section
	class="flex h-[300px] w-full flex-col items-start justify-end p-5 text-white sm:h-screen sm:p-10"
	style="background: linear-gradient(hsla(0, 0%, 0%, .2), hsla(0, 0%, 0%, .3), hsla(0, 0%, 0%, .9)), url('{backgroundImage}'); background-repeat: no-repeat; background-size: cover; background-position: center; background-attachment: fixed;"
>
	<slot />
	<p class="text-md hidden sm:block" data-aos="fade-in">{message}</p>
</section>
