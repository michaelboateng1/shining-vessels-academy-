<script>
    export let message;
    export let backgroundImage;
</script>

<section 
    class="sm:h-screen h-[300px] p-5 sm:p-10 w-full flex flex-col text-white justify-end items-start"
    style="background: linear-gradient(hsla(0, 0%, 0%, .2), hsla(0, 0%, 0%, .3), hsla(0, 0%, 0%, .9)), url('{backgroundImage}');"
>
    <slot />
    <p class="text-md hidden sm:block" data-aos="fade-in">{message}</p>
</section>
