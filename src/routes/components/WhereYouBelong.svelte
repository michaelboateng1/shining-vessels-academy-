<script>
    import image1 from "$lib/assets/images/entertaimment4.jpg"; 
    import image2 from "$lib/assets/images/competetion5.jpg"; 
</script>

<section class="container mx-auto mt-20 px-5 sm:px-10 mb-60">
    <div data-aos="fade-in" class="px-5 sm:space-y-4 text-[#343a40]">
        <h2 class="text-[#04095d] font-semibold text-xl mb-2">Where Young Minds Thrive</h2>
        <p class="text-[#04095d] font-bold mb-5">A Community of Future Innovators</p>
        <p>At Shining Vessels Academy, we believe every child has unique potential waiting to be unlocked. Our nurturing environment combines cutting-edge technology education with personalized attention, creating a space where students can explore, create, and excel in coding, abacus, and robotics.</p>
        <p>Our dedicated educators and state-of-the-art facilities provide the perfect setting for hands-on learning and innovation.</p>
        <p>Join our community of curious minds and passionate learners, where we transform potential into excellence through technology and cognitive development.</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-5 w-full mt-8 h-[350px]">
        <div class="w-full h-full">
            <figure data-aos="flip-left" class="relative">
                <img src={image1} alt="Entertainment" class="w-full h-full object-cover" />
                <div class="absolute w-full h-full top-0 left-0"></div>
                <figcaption class="absolute w-full sm:w-auto left-1/2 transform -translate-x-1/2 bottom-10 px-20 py-2 text-white font-bold italic border-r-4 border-l-4 border-[#fb8961] text-nowrap">SVA Teachers</figcaption>
            </figure>
        </div>
        <div data-aos="flip-left" data-aos-delay={150} class="w-full h-full">
            <figure class="relative">
                <img src={image2} alt="Competetion" class="w-full h-full object-cover" />
                <div class="absolute w-full h-full top-0 left-0"></div>
                <figcaption class="absolute w-full sm:w-auto left-1/2 transform -translate-x-1/2 bottom-10 px-20 py-2 text-white font-bold italic border-r-4 border-l-4 border-[#fb8961] text-nowrap">SVA Graduates</figcaption>
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