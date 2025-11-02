<script>
    import schoolImage from "$lib/assets/images/schoolImage2.jpg";
</script>

<section class="container mx-auto px-5 sm:px-20 mt-20">
    <h2 class="mb-5 text-3xl sm:text-5xl font-semibold text-[#343a40]">About Our Admission</h2>
    <div class="flex flex-col sm:flex-row justify-between gap-8">
        <div class="sm:w-[60ch] text-[#343a40] py-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorum mollitia cupiditate delectus vero doloribus quos, inventore repudiandae tempore voluptates blanditiis harum exercitationem quibusdam quaerat adipisci, ut impedit placeat odit ipsam a fugiat. Dolores corporis beatae quo consequatur quaerat assumenda sequi voluptas vero maxime laborum iste praesentium, dolorem fuga veniam?</p>
            <p class="pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum nulla, veritatis fugit cumque nisi, cupiditate ullam cum veniam ea quidem nemo pariatur esse ab repellendus quibusdam minus. Voluptatem culpa nemo officiis, iusto autem tempore quae vitae nobis ut animi corrupti voluptatibus. Voluptate ratione delectus sunt? Accusantium corporis eius repellat!</p>
            <a href="/faq" class="py-2 italic inline-block mt-5 border-2 px-5 bg-[#fb8961] text-white font-semibold">Freaquently Asked Questions</a>
        </div>

        <div class="sm:w-1/2 w-full h-auto shadow-2xl relative cursor-pointer overflow-hidden border-l-8 border-r-8 border-[#04095d] rounded-lg video">
            <img src={schoolImage} alt="SVA School" class="w-full h-full object-cover" />
            <div class="w-full h-full absolute top-0 left-0 videoBg transition-all duration-300"></div>
            <div class="w-[120px] flex justify-center items-center h-[120px] rounded-full border-4 border-white absolute top-1/2 left-1/2 transform -translate-1/2">
                <div class="w-[40px] h-[40px] bg-white play"></div>
            </div>
        </div>
    </div>
</section>

<style>
    .play{
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%, 0% 0%, 0% 0%, 0% 0%);
    }

    .videoBg{
        background: linear-gradient(hsla(0, 0%, 0%, .3), hsla(0, 0%, 0%, .1));
    }
</style>