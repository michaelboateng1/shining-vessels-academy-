<script>
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    let visible = false;
    let sectionElement;
    
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visible = true;
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2
            }
        );
        
        if (sectionElement) {
            observer.observe(sectionElement);
        }
        
        return () => {
            if (sectionElement) {
                observer.unobserve(sectionElement);
            }
        };
    });
</script>

<section bind:this={sectionElement} class="container mx-auto px-5 sm:w-[80%] py-10">
    {#if visible}
        <p 
            in:fly="{{ y: -30, duration: 800, delay: 100 }}"
            class="welcome-text text-md font-semibold after:content-[' '] relative after:block after:absolute after:bottom-1/2 after:translate-y-1/2 after:right-0 after:h-[1px] after:bg-[#ccc] after:w-[65%] sm:after:w-[80%] text-[#04095d]"
        >
            Welcome to
        </p>
        <div>
            <div class="flex justify-start items-start gap-5 mt-2 sm:mt-5">
                <h1 
                    in:fly="{{ x: -50, duration: 1000, delay: 300 }}"
                    class="sm:text-5xl text-3xl text-[#04095d] sm:w-[12ch] font-bold"
                >
                    Shining Vessels Academy
                </h1>
                <div>
                    <p 
                        in:fade="{{ duration: 1000, delay: 500 }}"
                        class="lg:w-[50ch] hidden sm:block text-md text-[#333]"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ea dolor vel sint non tempora eveniet! Ea libero molestias quisquam beatae qui unde quae dignissimos, laboriosam sit saepe provident, accusamus perspiciatis officia quo! Distinctio sapiente repellendus atque, temporibus deleniti dolore fugit vero praesentium! Quis quaerat magnam dolores eligendi. Quo, neque?
                    </p>
    
                    <p in:fade="{{ duration: 1000, delay: 500 }}"
                    class="sm:hidden text-sm text-[#333]"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ab vitae inventore dolores recusandae aliquam labore!</p>
                    <div 
                        in:fly="{{ y: 30, duration: 800, delay: 700 }}"
                        class="flex items-center justify-between gap-5 hidden sm:block mt-5"
                    >
                        <a href="/about" class="text-white px-6 py-2 rounded-4xl bg-[#fb8961] font-semibold capitalize text-md border-2 border-[#fb8961] hover:bg-[#04095d] hover:border-[#04095d] transition-all duration-300">about us</a>
                        <a href="/admission" class="text-[#fb8961] text-md px-6 py-2 rounded-4xl border-2 border-[#fb8961] font-semibold capitalize hover:bg-[#04095d] hover:border-[#04095d] hover:text-white transition-all duration-300">apply to SVA</a>
                    </div>
                </div>
            </div>

            <div 
                        in:fly="{{ y: 30, duration: 800, delay: 700 }}"
                        class="flex gap-5 sm:hidden mt-5"
                    >
                        <a href="/about" class="text-white px-5 py-1 lg:py-2 text-nowrap rounded-4xl bg-[#fb8961] font-semibold capitalize text-md border-2 border-[#fb8961] hover:bg-[#04095d] hover:border-[#04095d] transition-all duration-300">about us</a>
                        <a href="/admission" class="text-[#fb8961] text-nowrap text-md px-5 py-1 lg:py-2 rounded-4xl border-2 border-[#fb8961] font-semibold capitalize hover:bg-[#04095d] hover:border-[#04095d] hover:text-white transition-all duration-300">apply to SVA</a>
            </div>

        </div>
        
    {/if}
</section>

<style>
    .welcome-text{
        font-variant: small-caps;
    }

    h1{
        text-shadow: 1px 1px 2px #fb8961;
    }
</style>