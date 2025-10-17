<script>
    import TestimonialCard from "./TestimonialCard.svelte";
    import image1 from "$lib/assets/images/Testimonials/pexels-juanpphotoandvideo-1139743.jpg"
    import image2 from "$lib/assets/images/Testimonials/pexels-moose-photos-170195-1036622(1).jpg"
    import image3 from "$lib/assets/images/Testimonials/pexels-olly-834863.jpg"
	import { stat } from "fs";

    const testimonies = [
        {
            img: image1,
            alt: "Image1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt iure commodi sed! Porro ipsum nisi deleniti consequuntur quisquam nemo delectus minus neque vero magni voluptas explicabo quibusdam, ut, quaerat eveniet inventore molestiae nulla officia? Inventore odit ea dolorem eum quod, expedita, libero quidem facere necessitatibus qui, quasi minima nesciunt?"
        },
        {
            img: image1,
            alt: "Image1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt iure commodi sed! Porro ipsum nisi deleniti consequuntur quisquam nemo delectus minus neque vero magni voluptas explicabo quibusdam, ut, quaerat eveniet inventore molestiae nulla officia? Inventore odit ea dolorem eum quod, expedita, libero quidem facere necessitatibus qui, quasi minima nesciunt?"
        },
        {
            img: image1,
            alt: "Image1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt iure commodi sed! Porro ipsum nisi deleniti consequuntur quisquam nemo delectus minus neque vero magni voluptas explicabo quibusdam, ut, quaerat eveniet inventore molestiae nulla officia? Inventore odit ea dolorem eum quod, expedita, libero quidem facere necessitatibus qui, quasi minima nesciunt?"
        }
    ]

    let current = $state(testimonies[0]);

    const changeTestimony = () => {
        current = testimonies[scrollPosition];
    }

    let scrollPosition = $state(0);
    const scrollUp = () => {
        console.log("UP")
        scrollPosition -= 1;
        changeTestimony();
        // console.log(current);
    }
    const scrollDown = () => {
        console.log("Down")
        scrollPosition += 1;
        changeTestimony();
        // console.log(current)
    }

</script>

<section class="h-screen container mx-auto mt-30 relative">
    <div class="flex flex-col gap-10 overflow-y-scroll h-full">
        <!-- {#each testimonies as testimonial} -->
        <!-- {console.log(current)} -->
            <TestimonialCard testimony={current} />
        <!-- {/each} -->
    </div>
    <div class="absolute top-1/2  translate-y-1/2 left-0 z-10 w-full h-auto flex justify-between items-center">
        <!-- <div onclick={() => scrollUp()} class="w-10 h-10 flex justify-center items-center"><i class="fa-regular text-3xl text-[#fb8961] hover:text-[#04095d] transition-colors duration-300 cursor-pointer fa-circle-up"></i></div> -->
        <!-- <div onclick={() => scrollDown()} class="w-10 h-10 flex justify-center items-center"><i class="fa-regular text-3xl text-[#fb8961] hover:text-[#04095d] transition-colors duration-300 cursor-pointer fa-circle-down"></i></div> -->
    </div>
</section>

