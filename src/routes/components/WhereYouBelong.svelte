<script>
    import image1 from "$lib/assets/images/entertaimment4.jpg"; 
    import image2 from "$lib/assets/images/competetion5.jpg"; 
</script>

<section class="container mx-auto mt-20 px-20">
    <div class="px-5 space-y-4 text-[#343a40]">
        <h2 class="text-[#04095d] font-semibold text-xl mb-2">Where you belong.</h2>
        <p class="text-[#04095d] font-bold mb-5">Lorem, ipsum. Lorem, ipsum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus dolor ullam, dolores quos, voluptates et nam molestiae porro dolorum ducimus soluta tempore? Rem quia vitae minima laboriosam. Temporibus, dignissimos repudiandae ab possimus illo nobis dolore nesciunt rerum sint recusandae?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, possimus!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere modi blanditiis, explicabo cumque molestiae nostrum nemo velit laborum deserunt!</p>
    </div>
    <div class="flex gap-5 w-full mt-8 h-[350px]">
        <div class="w-full h-full">
            <figure class="relative">
                <img src={image1} alt="Entertainment" class="w-full h-full object-cover" />
                <div class="absolute w-full h-full top-0 left-0"></div>
                <figcaption class="absolute left-1/2 transform -translate-x-1/2 bottom-10 px-20 py-2 text-white font-bold italic border-r-4 border-l-4 border-[#fb8961] text-nowrap">SVA Teachers</figcaption>
            </figure>
        </div>
        <div class="w-full h-full">
            <figure class="relative">
                <img src={image2} alt="Competetion" class="w-full h-full object-cover" />
                <div class="absolute w-full h-full top-0 left-0"></div>
                <figcaption class="absolute left-1/2 transform -translate-x-1/2 bottom-10 px-20 py-2 text-white font-bold italic border-r-4 border-l-4 border-[#fb8961] text-nowrap">SVA Graduates</figcaption>
            </figure>
        </div>
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