<script>
    export let activity;

    console.log(activity);
    const {image, title} = activity;
</script>

<section>
    <div class="w-full h-auto">
        <figure class="relative">
            <img src={image} alt="" width="100px" height="80px" class="w-full h-full object-cover" />
            <div class="absolute w-full h-full top-0 left-0"></div>
            <figcaption class="absolute left-1/2 transform -translate-x-1/2 bottom-10 px-20 py-2 text-white font-bold italic border-r-4 border-l-4 border-[#fb8961] text-nowrap ">{title}</figcaption>
        </figure>
    </div>
</section>

<style>
    img +div{
        background: linear-gradient(hsla(237, 92%, 19%, .0) 70%, hsla(237, 92%, 19%, .5));
    }

    figcaption{
        background-color: hsla(237, 92%, 19%, .5);
    }
</style>