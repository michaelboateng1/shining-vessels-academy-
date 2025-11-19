<script>
    import schoolImage from "$lib/assets/images/schoolImage2.jpg";
    import schoolVideo from "$lib/assets/videos/19 PRESENTATION OF CERTIFICATE SVA 2024 GRADUATION1.mp4";

    import {onMount} from "svelte";

    let videoContainer;
    let playBtn;
    let overlay;
    let image;

    onMount(() => {
        const video = document.createElement('video');
        video.src = schoolVideo;
        video.muted = true;
        video.disablePictureInPicture = true;
        video.controls = true;
        video.classList = "w-full h-full object-cover";
        
        const play = () => {
            playBtn.style.visibility = "hidden";
            overlay.style.display = "none";
            image.style.display = "none";
        }
        
        const pause = () => {
            playBtn.style.visibility = "visible";
            overlay.style.display = "block";
            image.style.display = "inline";
        }
        
        playBtn.addEventListener("click", () => {
            videoContainer.appendChild(video);
            video.play();
            play();
        })

        video.onpause = () => {
            pause();
        }
    })


</script>

<section class="container mx-auto px-5 sm:px-20 mt-20">
    <h2 data-aos="fade-in" data-aos-delay={150} class="mb-5 text-3xl sm:text-5xl font-semibold text-[#343a40]">About Our Admission</h2>
    <div class="flex flex-col sm:flex-row justify-between gap-8">
        <div class="sm:w-[60ch] text-[#343a40] py-4" data-aos="fade-in" data-aos-delay={200}>
            <p>At Shining Vessels Academy, we welcome students who are eager to explore the exciting world of technology and cognitive development. Our admission process is designed to understand each child's unique potential and how our programs can help them thrive. We offer rolling admissions throughout the year, with new intakes at the beginning of each academic term. Our dedicated admissions team is here to guide you through every step of the process.</p>
            <p class="pt-4">We accept students from all backgrounds who show enthusiasm for learning and technology. Our programs are tailored for different age groups and skill levels, ensuring every child receives the right level of challenge and support. Financial aid and scholarship opportunities are available for qualifying students. Join our community of young innovators and give your child the gift of future-ready education.</p>
            <a href="/faq" class="py-2 italic inline-block mt-5 border-2 px-5 bg-[#fb8961] text-white font-semibold hover:bg-[#e67a4d] transition-colors">Frequently Asked Questions</a>
        </div>

        <div data-aos="slide-up" class="sm:w-1/2 w-full h-auto shadow-2xl relative cursor-pointer overflow-hidden border-l-8 border-r-8 border-[#04095d] rounded-lg video">
            <div bind:this={videoContainer} class="h-[400px] w-full">
                <img bind:this={image} src={schoolImage} alt="SVA School" class="w-full h-full object-cover" />
            </div>
            <div bind:this={overlay} class="w-full h-full absolute top-0 left-0 videoBg transition-all duration-300"></div>
            <div data-aos="fade-in" data-aos-delay={150} bind:this={playBtn} class="w-[120px] flex justify-center items-center h-[120px] rounded-full border-4 border-white absolute top-1/2 left-1/2 transform -translate-1/2">
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