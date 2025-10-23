<script>
    import Heading from "../components/Heading.svelte";
    import AboutInfo from "../components/AboutInfo.svelte";

    const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia cupiditate quasi assumenda incidunt, repellendus labore non, nihil quas autem iusto optio. Assumenda in repellendus vero suscipit tempora laborum ad dicta quasi, neque nemo quae at, numquam sunt itaque id ea ducimus! Cum distinctio totam fuga molestias dicta quia quisquam!"
</script>

<Heading {message}>
    <h1 class="text-5xl font-bold mb-4" data-aos="fade-in">About <span class="text-[#fb8961]">SVA</span></h1>
</Heading>
<AboutInfo />

