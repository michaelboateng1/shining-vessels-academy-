<script>
    import WhoWeAre from "../components/WhoWeAre.svelte";
    import Heading from "../components/Heading.svelte";
    import WhereYouBelong from "../components/WhereYouBelong.svelte";
    import ShapeDesign from "../components/shapeDesign.svelte";
    import Activities from "../components/Activities.svelte";

    import roboticsImage from "$lib/assets/images/studentsPlaying2.jpg";
    import abacusImage from "$lib/assets/images/studentsInClass2.jpg";
    import codingImage from "$lib/assets/images/classRoom3.jpg";
    import competetionImage from "$lib/assets/images/competetion3.jpg";

    const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum atque quisquam voluptatibus possimus illo, autem minus earum eligendi nulla veritatis.";

    const schoolActivities = [
        {
            image: roboticsImage,
            title: "Robotics Traning"
        },
        {
            image: abacusImage,
            title: "Abacus Traning"
        },
        {
            image: codingImage,
            title: "Coding Traning"
        },
        {
            image: competetionImage,
            title: "School Competetions"
        }
    ]
</script>

<main>
    <Heading {message}>
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-in"><span class="text-[#fb8961]">SVA</span> Activities</h1>
    </Heading>
    <WhoWeAre />
    <WhereYouBelong />
    <ShapeDesign />
    <div class="grid grid-cols-3 gap-8 container mx-auto px-10">
        {#each schoolActivities as activity}
            <Activities {activity} />
        {/each}
    </div>
</main>