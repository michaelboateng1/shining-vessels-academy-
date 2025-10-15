<script>
    import { onMount } from 'svelte';
    
    let isVisible = false;
    let container;
    
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisible = true;
                    }
                });
            },
            { threshold: 0.3 }
        );
        
        if (container) {
            observer.observe(container);
        }
        
        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    });
</script>

<div bind:this={container} class="flex justify-between items-center h-[500px]">
    <div class="w-[500px] flex flex-col items-start gap-2">
        <div class="h-[50px] bg-[#04095d] arrow-left {isVisible ? 'w-1/2' : 'w-0'}"></div>
        <div class="h-[50px] bg-[#fb8961] arrow-left {isVisible ? 'w-full' : 'w-0'} delay-100"></div>
    </div>
    <div class="w-[500px] flex flex-col items-end gap-2">
        <div class="h-[50px] bg-[#fb8961] arrow-right {isVisible ? 'w-full' : 'w-0'} delay-300"></div>
        <div class="h-[50px] bg-[#04095d] arrow-right {isVisible ? 'w-1/2' : 'w-0'} delay-500"></div>
    </div>
</div>

<style>
    .arrow-left, .arrow-right {
        transition: width 0.8s ease-out;
    }

    .arrow-left{
        /* background: transparent; */
        clip-path: polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0 52%, 0% 0%);
    }

    .arrow-right{
        clip-path: polygon(100% 0%, 100% 47%, 100% 100%, 20% 100%, 0% 50%, 20% 0%);
    }

    .delay-100 {
        transition-delay: 100ms;
    }

    .delay-300 {
        transition-delay: 300ms;
    }

    .delay-500 {
        transition-delay: 500ms;
    }
</style>