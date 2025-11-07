<script>
    let inputData = {};

    const getInputData = (target) => {
        inputData[target.name] = target.value
    }


    const sendMessage = async () => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputData)
        }
        const response = await fetch('/api/send-email/', options);
        const data = await response.text();
        console.log(data)
        inputData = {};
    }
</script>

<section class="flex justify-center items-center py-20 px-10">
    <form class="bg-[#fff] px-5 py-10 sm:px-10 sm:py-20 rounded-2xl shadow-lg border-2 overflow-hidden" data-aos="flip-left" data-aos-delay={150} >
        <h2 class="capitalize mb-5 text-2xl sm:text-5xl font-semibold text-[#343a40]" data-aos="fade-in" data-aos-delay={200}>Contact us</h2>

        <div class="flex flex-col sm:flex-row justify-between items-center gap-5 mt-5">
            <input oninput={(e) => getInputData(e.target)} value={inputData.firstName} name="firstName" type="text" placeholder="First Name" class="py-2 px-5 w-full border-2 border-[#04095d] rounded-4xl focus:border-[#fb8961]" data-aos="slide-up" data-aos-delay={200} />
            <input oninput={(e) => getInputData(e.target)} value={inputData.lastName} type="text" placeholder="Last Name" name="lastName" class="py-2 px-5 w-full border-2 border-[#04095d] rounded-4xl focus:border-[#fb8961]" data-aos="slide-up" data-aos-delay={200} />
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center gap-5 mt-5">
            <input oninput={(e) => getInputData(e.target)} value={inputData.email} name="email" type="email" placeholder="Email" class="py-2 w-full px-5 border-2 border-[#04095d] rounded-4xl focus:border-[#fb8961]" data-aos="slide-up" data-aos-delay={200} />
            <input oninput={(e) => getInputData(e.target)} value={inputData.phoneNumber} name="phoneNumber" type="tel" placeholder="Your Contact" class="py-2 w-full px-5 border-2 border-[#04095d] rounded-4xl focus:border-[#fb8961]" data-aos="slide-up" data-aos-delay={200} />
        </div>
        <div class="mt-5">
            <textarea oninput={(e) => getInputData(e.target)} value={inputData.message} name="message" class="py-2 w-full px-5 border-2 border-[#04095d] rounded-2xl focus:border-[#fb8961]" placeholder="Message..." data-aos="slide-up" data-aos-delay={200}></textarea>
        </div>
        <div class="mt-5">
            <button onclick={() => sendMessage()} type="button" value="Submit" class=" py-1 sm:py-2 px-5 font-semibold text-[#fb8961] border-2 border-[#fb8961] cursor-pointer rounded-4xl focus:border-[#fb8961] transition-colors duration-300 hover:bg-[#fb8961] hover:text-white active:bg-white active:text-[#fb8961] " data-aos="zoom-in" data-aos-delay={250}>Submit</button>
        </div>
    </form>
</section>