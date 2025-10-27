<script>
    import WhoWeAre from "../components/WhoWeAre.svelte";
    import Heading from "../components/Heading.svelte";
    import WhereYouBelong from "../components/WhereYouBelong.svelte";

    const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum atque quisquam voluptatibus possimus illo, autem minus earum eligendi nulla veritatis.";
</script>

<main>
    <Heading {message}>
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-in"><span class="text-[#fb8961]">SVA</span> Activities</h1>
    </Heading>
    <WhoWeAre />
    <WhereYouBelong />
</main>