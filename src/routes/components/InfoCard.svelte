<script>
    export let title
    export let description
    export let image
    export let flip

</script>

<section class=" flex gap-10 px-5 lg:px-0 py-20 sm:py-0 items-center sm:mt-30 justify-between {flip ? 'flex-col-reverse sm:flex-row-reverse bg-[#e9ecef]' : 'flex-col sm:flex-row'}">
    <div class="{flip ? 'sm:border-l-2' : 'sm:border-r-2 border-b-2 sm:border-b-0 rounded-full'} border-[#e9ecef] pb-5 sm:pb-0 lg:pl-5 sm:h-[500px] flex flex-col justify-center items-center sm:px-5 lg:px-20">
        <div class="lg:p-10" data-aos="zoom-in" data-aos-delay={150}>
            <h2 class="mb-5 text-3xl sm:text-5xl font-semibold text-[#343a40]">{title}</h2>
            <div class=" text-sm lg:text-md text-[#343a40]">
                <p>{description}</p>
            </div>
        </div>
    </div>
    <div class="lg:px-10">
        <div data-aos="flip-left" data-aos-delay={150} class=" sm:w-[350px] lg:w-[600px] w-full shadow-xl rounded-2xl overflow-hidden h-auto">
            <img src={image} alt="" class="w-full h-full object-cover" />
        </div>
    </div>
</section>

