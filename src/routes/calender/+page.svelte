<script>
    import Calender from "../components/Calender.svelte";
    import Heading from "../components/Heading.svelte";

    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, deserunt.";
</script>

<main>
    <Heading {message}>
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-in"><span class="text-[#fb8961]">SVA</span> Events</h1>
    </Heading>
    <Calender />
</main>