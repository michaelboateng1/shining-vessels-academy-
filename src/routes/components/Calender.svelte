<script>
	import { onMount } from 'svelte';

	let tables = [];
	let isVisible = [];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.dataset.index);
					if (entry.isIntersecting) {
						isVisible[index] = true;
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -100px 0px'
			}
		);

		tables.forEach((table) => {
			if (table) observer.observe(table);
		});

		return () => {
			tables.forEach((table) => {
				if (table) observer.unobserve(table);
			});
		};
	});
</script>

<section class="mt-20">
    <h2 class=" text-[2.5rem] font-bold text-[#04095d] text-center capitalize mb-[3rem]">Calender and Events</h2>
    <div class="flex gap-8 justify-between items-start">
        <table class="rounded-bl-lg rounded-br-lg" bind:this={tables[0]} data-index="0" class:visible={isVisible[0]}>
            <caption class="py-2 px-5 rounded-tl-lg rounded-tr-lg">
                <h3>Upcoming Events</h3>
                <p>October 2025</p>
            </caption>
            <tbody>
                <tr>
                    <th>October 5, 2025</th>
                    <th>Sunday</th>
                </tr>
                <tr>
                    <td>6:00am - 4:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#04095d] before:mr-4">Graduation Day</td>
                </tr>
                <tr>
                    <td>6:00am - 4:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#04095d] before:mr-4">Graduation Day</td>
                </tr>
                <tr>
                    <th>October 3, 2025</th>
                    <th>Monday</th>
                </tr>
                <tr>
                    <td>6:00am - 4:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#04095d] before:mr-4">Graduation Day</td>
                </tr>
                <tr>
                    <th>October 1, 2025</th>
                    <th>Tuesday</th>
                </tr>
                <tr>
                    <td>6:00am - 4:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#04095d] before:mr-4">Graduation Day</td>
                </tr>
            </tbody>
        </table>

        <table class="rounded-bl-lg rounded-br-lg" bind:this={tables[1]} data-index="1" class:visible={isVisible[1]}>
            <caption class="py-2 px-5 rounded-tl-lg rounded-tr-lg">
                <h3>Previous Events</h3>
                <p>October 2025</p>
            </caption>
            <tbody>
                <tr>
                    <th>September 1, 2025</th>
                    <th>Monday</th>
                </tr>
                <tr>
                    <td>10:00am - 12:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#fb8961] before:mr-4">Visiting Data</td>
                </tr>
                <tr>
                    <th>September 1, 2025</th>
                    <th>Monday</th>
                </tr>
                <tr>
                    <td>10:00am - 12:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#fb8961] before:mr-4">Visiting Data</td>
                </tr>
                <tr>
                    <td>10:00am - 12:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#fb8961] before:mr-4">Visiting Data</td>
                </tr>
                <tr>
                    <td>10:00am - 12:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#fb8961] before:mr-4">Visiting Data</td>
                </tr>
                <tr>
                    <td>10:00am - 12:00pm</td>
                    <td class="before:content-[' '] before:w-3 before:h-3 before:inline-block before:rounded-full before:bg-[#fb8961] before:mr-4">Visiting Data</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

<style>
	section {
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	h2 {
		text-shadow: 1px 1px 2px #fb8961;
	}

	table {
		width: 100%;
        height: auto;
		border-collapse: collapse;
		background: white;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		margin-top: 1rem;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease-out, transform 0.8s ease-out;
	}

	table.visible {
		opacity: 1;
		transform: translateY(0);
	}

	table:nth-child(1).visible {
		transition-delay: 0.2s;
	}

	table:nth-child(2).visible {
		transition-delay: 0.4s;
	}

	caption {
		text-align: left;
		/* padding: 1.5rem; */
		background: linear-gradient(135deg, #04095d 0%, #fb8961 100%);
		color: white;
	}

	caption h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
	}

	caption p {
		margin: 0;
		opacity: 0.9;
		font-size: 0.95rem;
	}

	th {
		background: #f8f9fa;
		padding: 1rem;
		text-align: left;
		font-weight: 600;
		color: #495057;
		text-transform: uppercase;
		font-size: 0.85rem;
		letter-spacing: 0.5px;
		border-bottom: 2px solid #dee2e6;
	}

	td {
		padding: 1rem;
		border-bottom: 1px solid #e9ecef;
		color: #495057;
	}

	tbody tr:last-child td {
		border-bottom: none;
	}

	tbody tr {
		opacity: 0;
		transform: translateX(-20px);
		transition: opacity 0.5s ease-out, transform 0.5s ease-out;
	}

	table.visible tbody tr {
		opacity: 1;
		transform: translateX(0);
	}

	table.visible tbody tr:nth-child(1) {
		transition-delay: 0.5s;
	}

	table.visible tbody tr:nth-child(2) {
		transition-delay: 0.6s;
	}

	table.visible tbody tr:nth-child(3) {
		transition-delay: 0.7s;
	}

	table.visible tbody tr:nth-child(4) {
		transition-delay: 0.8s;
	}

	table.visible tbody tr:nth-child(5) {
		transition-delay: 0.9s;
	}

	table.visible tbody tr:nth-child(6) {
		transition-delay: 1s;
	}

	table.visible tbody tr:nth-child(7) {
		transition-delay: 1.1s;
	}

	tbody tr:hover {
		background: #f8f9fa;
		transition: background 0.2s ease;
		transform: scale(1.01);
	}

	/* Pulse animation for caption */
	table.visible caption {
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% {
			background: linear-gradient(135deg, #04095d 0%, #fb8961 100%);
		}
		50% {
			background: linear-gradient(135deg, #04095d 10%, #fb8961 90%);
		}
	}
</style>
