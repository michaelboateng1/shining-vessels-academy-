<script>
	let inputData = $state({});

	let messageStatus = $state({});

	const getInputData = (target) => {
		inputData[target.name] = target.value;
	};

	const sendMessage = async () => {
		try {
			if (inputData.firstName) {
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(inputData)
				};
				const response = await fetch('/api/send-email/', options);
				const data = await response.json();
				messageStatus = {
					status: response.status,
					message: data.message,
					bg: response.status === 200 ? 'bg-green-500' : 'bg-red-500'
				};
				inputData = {};
				setTimeout(() => (messageStatus = {}), 3400);
			}
			return;
		} catch (err) {
			console.log(err.message);
		}
	};
</script>

<section class="flex items-center justify-center px-10 py-20">
	<form
		class="overflow-hidden rounded-2xl border-2 bg-[#fff] px-5 py-10 shadow-lg sm:px-10 sm:py-20"
		data-aos="flip-left"
		data-aos-delay={150}
	>
		<h2
			class="mb-5 text-2xl font-semibold text-[#343a40] capitalize sm:text-5xl"
			data-aos="fade-in"
			data-aos-delay={200}
		>
			Contact us
		</h2>
		<p
			class="rounded-lg px-5 text-center text-white transition-all duration-300 sm:px-5 {messageStatus.status
				? 'max-h-full py-3'
				: 'max-h-0 py-0'} {messageStatus.bg}"
		>
			{messageStatus.message}
		</p>

		<div class="mt-5 flex flex-col items-center justify-between gap-5 sm:flex-row">
			<input
				oninput={(e) => getInputData(e.target)}
				value={inputData.firstName}
				name="firstName"
				type="text"
				placeholder="First Name"
				class="w-full rounded-4xl border-2 border-[#04095d] px-5 py-2 focus:border-[#fb8961]"
				data-aos="slide-up"
				data-aos-delay={200}
			/>
			<input
				oninput={(e) => getInputData(e.target)}
				value={inputData.lastName}
				type="text"
				placeholder="Last Name"
				name="lastName"
				class="w-full rounded-4xl border-2 border-[#04095d] px-5 py-2 focus:border-[#fb8961]"
				data-aos="slide-up"
				data-aos-delay={200}
			/>
		</div>
		<div class="mt-5 flex flex-col items-center justify-between gap-5 sm:flex-row">
			<input
				oninput={(e) => getInputData(e.target)}
				value={inputData.email}
				name="email"
				type="email"
				placeholder="Email"
				class="w-full rounded-4xl border-2 border-[#04095d] px-5 py-2 focus:border-[#fb8961]"
				data-aos="slide-up"
				data-aos-delay={200}
			/>
			<input
				oninput={(e) => getInputData(e.target)}
				value={inputData.phoneNumber}
				name="phoneNumber"
				type="tel"
				placeholder="Your Contact"
				class="w-full rounded-4xl border-2 border-[#04095d] px-5 py-2 focus:border-[#fb8961]"
				data-aos="slide-up"
				data-aos-delay={200}
			/>
		</div>
		<div class="mt-5">
			<textarea
				oninput={(e) => getInputData(e.target)}
				value={inputData.message}
				name="message"
				class="w-full rounded-2xl border-2 border-[#04095d] px-5 py-2 focus:border-[#fb8961]"
				placeholder="Message..."
				data-aos="slide-up"
				data-aos-delay={200}
			></textarea>
		</div>
		<div class="mt-5">
			<button
				onclick={() => sendMessage()}
				type="button"
				value="Submit"
				class=" cursor-pointer rounded-4xl border-2 border-[#fb8961] px-5 py-1 font-semibold text-[#fb8961] transition-colors duration-300 hover:bg-[#fb8961] hover:text-white focus:border-[#fb8961] active:bg-white active:text-[#fb8961] sm:py-2"
				data-aos="zoom-in"
				data-aos-delay={250}>Submit</button
			>
		</div>
	</form>
</section>
