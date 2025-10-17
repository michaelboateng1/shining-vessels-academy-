<script>
    export let title
    export let description
    export let image
    export let flip

</script>

<section class="flex items-center justify-between {flip ? 'flex-row-reverse bg-[#e9ecef]' : 'flex-row'}">
    <div class="{flip ? 'border-l-2' : 'border-r-2 rounded-full'} border-[#e9ecef] pl-5 h-[500px] flex flex-col justify-center items-center px-20">
        <div class="p-10">
            <h2 class="mb-5 text-5xl font-semibold text-[#343a40]">{title}</h2>
            <div class="text-md text-[#343a40]">
                <p>{description}</p>
            </div>
        </div>
    </div>
    <div class="px-10">
        <div class=" w-[600px] shadow-xl rounded-2xl overflow-hidden h-auto">
            <img src={image} alt="" class="w-full h-full object-cover" />
        </div>
    </div>
</section>

