<script>
    import ContactForm from "../components/ContactForm.svelte";
    import Heading from "../components/Heading.svelte";

    const message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quas doloremque quibusdam provident cum necessitatibus quia blanditiis quam tempore? Quasi numquam quam officiis porro, laboriosam optio sapiente, perspiciatis placeat recusandae odio voluptatibus fugiat maxime quisquam rerum, cum dolorum et impedit."
</script>

<main>
    <Heading {message}>
        <h1 class="text-3xl sm:text-5xl font-bold mb-4" data-aos="fade-in">Contact <span class="text-[#fb8961]">SVA</span></h1>
    </Heading>
    <ContactForm />
</main>

