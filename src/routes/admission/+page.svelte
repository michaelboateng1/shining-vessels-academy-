<script>
    import Heading from "../components/Heading.svelte";
    import AboutInfo from "../components/AboutInfo.svelte";

    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum itaque iusto quasi in molestiae dolores, ullam expedita? Hic, ullam sint. Maxime tenetur quibusdam aspernatur eos id corporis commodi animi!";
</script>

<main>
    <Heading {message}>
        <h1 class="text-5xl font-bold mb-4" data-aos="fade-in"><span class="text-[#fb8961]">SVA</span> Admissions</h1>
    </Heading>
    <AboutInfo />
</main>

