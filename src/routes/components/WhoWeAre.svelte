<script>
    import schoolVideo from "$lib/assets/videos/CADET DISPLAY - SVA CADET GROUP.mp4";
	import { onMount } from "svelte";

    let videoContainer;
    let playBtn;

    onMount(() => {
        const video = document.createElement("video");
        video.src = schoolVideo;
        video.classList = "w-full h-full object-cover";
        videoContainer.append(video);

        playBtn.append("");
        playBtn.addEventListener("click", (e) => {
            video.play()
            video.controls = true;
            playBtn.style.visibility = "hidden"
        })

        video.onpause = () => {
                playBtn.style.visibility = "visible"
                video.controls = false
            }
    })
</script>

<section class="mt-20 container mx-auto">
    <h2 class="customShadow mb-[3rem] text-center sm:text-[2.5rem] font-bold text-[#04095d] capitalize">Who we are</h2>
    <div class="w-full sm:w-[600px] h-auto relative mx-auto border-l-8 border-r-8 border-[#04095d] rounded-lg">
        <div class="w-full h-auto" bind:this={videoContainer} ></div>
        <div bind:this={playBtn} class="w-[120px] transition-all duration-300 cursor-pointer flex justify-center items-center h-[120px] rounded-full border-4 border-white absolute top-1/2 left-1/2 transform -translate-1/2">
            <div class="w-[40px] h-[40px] bg-white play"></div>
        </div>
    </div>
</section>

<style>
    .customShadow {
		text-shadow: 1px 1px 2px #fb8961;
	}

    .play{
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%, 0% 0%, 0% 0%, 0% 0%);
        cursor: pointer;
    }
</style>