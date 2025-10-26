<script>
	import Heading from '../components/Heading.svelte';
	import AboutInfo from '../components/AboutInfo.svelte';

	import studentsInClass1 from '$lib/assets/images/studentsInClass2.jpg';
	import studentsInClass2 from '$lib/assets/images/studentsInClass.jpg';
	import studentsInClass3 from '$lib/assets/images/students.jpg';
	import studentsInClass4 from '$lib/assets/images/studentsPlaying2.jpg';
	import studentsInClass5 from '$lib/assets/images/classRoom.jpg';
	import studentsInClass6 from '$lib/assets/images/playGround3.jpg';

	const cards = [
		{
			title: 'Mission',
			description:
				'Our mission is to create a transformative learning experience that is engaging, globally oriented, and builds a strong STEAM foundation for college and career readiness. We aim to provide a quality education for all students by focusing on both heart and mind as critical tools of student engagement in learning. Our compassionate community of global learners focuses on developing students’ knowledge and skills, as well as their attitudes, behaviors, aspirations, and beliefs for success in the 21st-century economy. ',
			image: studentsInClass1,
			filp: false
		},
		{
			title: 'Vision',
			description:
				'Our vision is to be a leading STEAM education provider that empowers students to succeed in the 21st-century economy. We believe that every student deserves access to a quality education that prepares them for success in college and career. Our mission is to create a transformative learning experience that is engaging, globally oriented, and builds a strong STEAM foundation for college and career readiness. We aim to provide a quality education for all students by focusing on both heart and mind as critical tools of student engagement in learning. Our compassionate community of global learners focuses on developing students’ knowledge and skills, as well as their attitudes, behaviors, aspirations, and beliefs for success in the 21st-century economy. ',
			image: studentsInClass2,
			flip: true
		},
		{
			title: 'Values',
			description:
				'Our vision is to be a leading STEAM education provider that empowers students to succeed in the 21st-century economy. We believe that every student deserves access to a quality education that prepares them for success in college and career. Our mission is to create a transformative learning experience that is engaging, globally oriented, and builds a strong STEAM foundation for college and career readiness. We aim to provide a quality education for all students by focusing on both heart and mind as critical tools of student engagement in learning. Our compassionate community of global learners focuses on developing students’ knowledge and skills, as well as their attitudes, behaviors, aspirations, and beliefs for success in the 21st-century economy. ',
			image: studentsInClass3,
			flip: false
		},
		{
			title: 'Educational Philosophy ',
			description:
				'Our educational philosophy is to create a transformative learning experience that is engaging, globally oriented, and builds a strong STEAM foundation for college and career readiness. We aim to provide a quality education for all students by focusing on both heart and mind as critical tools of student engagement in learning. Our compassionate community of global learners focuses on developing students’ knowledge and skills, as well as their attitudes, behaviors, aspirations, and beliefs for success in the 21st-century economy. ',
			image: studentsInClass4,
			flip: true
		},
		{
			title: 'Learning Environment',
			description:
				'At Vista Charter Public Schools, we believe joyful schools are successful schools.  The learning environment is a major key to teacher and student happiness, and it is the setting in which a culture of joyous learning occurs. The learning environment at Vista takes into account the whole child and incorporates important aspects of the physical setting, classroom norms and values, the role of pedagogy and instructional approach, discipline management, and family engagement.',
			image: studentsInClass5,
			flip: false
		},
		{
			title: 'Playing Environment',
			description:
				'At Vista Charter Public Schools, we believe joyful schools are successful schools.  The learning environment is a major key to teacher and student happiness, and it is the setting in which a culture of joyous learning occurs. The learning environment at Vista takes into account the whole child and incorporates important aspects of the physical setting, classroom norms and values, the role of pedagogy and instructional approach, discipline management, and family engagement.',
			image: studentsInClass6,
			flip: true
		}
	];

	const message =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorum itaque iusto quasi in molestiae dolores, ullam expedita? Hic, ullam sint. Maxime tenetur quibusdam aspernatur eos id corporis commodi animi!';
</script>

<main>
	<Heading {message}>
		<h1 class="mb-4 text-5xl font-bold" data-aos="fade-in">
			<span class="text-[#fb8961]">SVA</span> Admissions
		</h1>
	</Heading>
	<AboutInfo {cards} />
</main>
