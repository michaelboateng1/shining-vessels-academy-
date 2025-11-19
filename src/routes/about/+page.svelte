<script>
	import Heading from '../components/Heading.svelte';
	import AboutInfo from '../components/AboutInfo.svelte';

	import studentsInClass1 from '$lib/assets/images/studentsInClass2.jpg';
	import studentsInClass2 from '$lib/assets/images/studentsInClass.jpg';
	import studentsInClass3 from '$lib/assets/images/students.jpg';
	import studentsInClass4 from '$lib/assets/images/studentsPlaying2.jpg';
	import studentsInClass5 from '$lib/assets/images/classRoom.jpg';
	import studentsInClass6 from '$lib/assets/images/playGround3.jpg';
	
	import backgroundImage from "$lib/assets/images/playGround.jpg";

	const cards = [
		{
			title: 'Our Mission',
			description: 'To create a pathway to academic excellence through the maximization of individual students\' potentials, adherence to godly principles, and collaborative effort with teachers and parents. We are committed to inspiring students to work hard for a brighter future within a friendly learning environment, with special emphasis on technology education in Coding, Abacus, and Robotics.',
			image: studentsInClass1,
			flip: false
		},
		{
			title: 'Our Vision',
			description: 'To become the hub for producing great leaders in every discipline and profession worldwide. We aim to be recognized as a premier institution that nurtures not only academic excellence but also technological proficiency, preparing students to be innovative problem-solvers and responsible global citizens in an increasingly digital world.',
			image: studentsInClass2,
			flip: true
		},
		{
			title: 'Core Values',
			description: 'We believe in excellence, innovation, and personalized learning. Our values include fostering a growth mindset, encouraging curiosity, and building confidence through hands-on experience in coding, abacus training, and robotics. We celebrate both individual achievement and collaborative success.',
			image: studentsInClass3,
			flip: false
		},
		{
			title: 'Educational Approach',
			description: 'Our student-centered approach combines theoretical knowledge with practical application. Through project-based learning and interactive sessions, we make complex concepts in coding, mental math, and robotics accessible and enjoyable for students of all skill levels.',
			image: studentsInClass4,
			flip: true
		},
		{
			title: 'Learning Environment',
			description: 'Our modern, technology-equipped classrooms are designed to inspire creativity and collaboration. We maintain small class sizes to ensure personalized attention, with dedicated spaces for coding labs, abacus training, and robotics workshops that stimulate innovation and hands-on learning.',
			image: studentsInClass5,
			flip: false
		},
		{
			title: 'Student Development',
			description: 'Beyond technical skills, we focus on developing essential life skills such as logical reasoning, concentration, and perseverance. Our programs are designed to boost confidence, enhance academic performance, and prepare students for future academic and career success in technology-related fields.',
			image: studentsInClass6,
			flip: true
		}
	];

	const message = 'At Shining Vessels Academy, we are passionate about unlocking the potential in every child through innovative education in Coding, Abacus Training, and Robotics. Our expert instructors and engaging curriculum create an environment where learning meets fun and creativity.';
</script>

<Heading {message} {backgroundImage}>
	<h1 class="sm:mb-4 text-4xl sm:text-5xl font-bold" data-aos="fade-in">
		About <span class="text-[#fb8961]">SVA</span>
	</h1>
</Heading>
<AboutInfo {cards} />
