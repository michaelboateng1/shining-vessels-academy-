<script>
    import bgImage from '$lib/assets/images/playGround.jpg';
    export let message;
</script>

<section class="h-screen p-10 w-full flex flex-col text-white justify-end items-start">
    <slot />
    <p class="text-md" data-aos="fade-in" data-aos-delay={200}>{message}</p>
</section>

<style>

    section{
        background: linear-gradient(hsla(0, 0%, 0%, .2), hsla(0, 0%, 0%, .3), hsla(0, 0%, 0%, .9)), url('../../lib/assets/images/playGround.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
</style>
