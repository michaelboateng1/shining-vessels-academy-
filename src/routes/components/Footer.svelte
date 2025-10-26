<script>
    import SchoolLogo from '$lib/assets/images/310428482_545284817602681_4675978038248228164_n.jpg'
</script>

<footer class="bg-[#04095d] pb-5 text-[#ccc] mt-20">
    <div class="flex items-center py-5 justify-between border-b-2 bg-image border-gray-200 px-10 pb-5" aria-label="Footer">
        <div class="w-[60px] h-auto" aria-label="Footer">
            <img src={SchoolLogo} alt="School Logo" class="w-full h-full object-cover" />
        </div>
        <div aria-label="Footer" class="flex gap-2 justify-center items-center">
            <div class=" p-1 rounded-full hover:text-white text-xl hover:bg-[#fb8961] cursor-pointer transition-all duration-300  ease-in-out">
                <i class="fab fa-facebook-f"></i>
            </div>
            <div class=" p-1 rounded-full hover:text-white text-xl hover:bg-[#fb8961] cursor-pointer transition-all duration-300 ease-in-out">
                <i class="fab fa-twitter"></i>
            </div>
            <div class=" p-1 rounded-full hover:text-white text-xl hover:bg-[#fb8961] cursor-pointer transition-all duration-300 ease-in-out">
                <i class="fab fa-instagram"></i>
            </div>
            <div class=" p-1 rounded-full hover:text-white text-xl hover:bg-[#fb8961] cursor-pointer transition-all duration-300 ease-in-out">
                <i class="fab fa-linkedin"></i>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-between py-20 px-10" aria-label="Footer">
        <div aria-label="Footer" class="w-[50ch]">
            <h2 class="mb-2 text-[#fb8961] font-bold text-xl">About us</h2>
            <p class="space-y-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil dolorem aperiam officiis voluptatum molestias sit doloribus animi quisquam quibusdam! Velit officia molestias nesciunt voluptatem, blanditiis deleniti natus asperiores beatae eaque, inventore quos reiciendis enim! Delectus maiores a neque quia?</p>
        </div>
        <div aria-label="Footer">
            <h2 class="mb-2 text-[#fb8961] font-bold text-xl">Quick Links</h2>
            <ul class="space-y-2 text-center">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="/calender">Events</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div aria-label="Footer">
            <h2 class="mb-2 text-[#fb8961] font-bold text-xl">Contact us</h2>
            <ul class="space-y-2">
                <li>Kumasi, Ghana </li>
                <li>Phone: <a href="tel:5551234567">(555) 123-4567</a></li>
                <li>Email: <a href="mailto:info@shiningvesselsacademy.com">info@shiningvesselsacademy.com</a></li>
            </ul>
        </div>
    </div>
    <div class="flex items-center justify-center pt-5 pb-2 px-10" aria-label="Footer">
        <p>Copyright © 2025 Shining Vessels Academy. All rights reserved.</p>
    </div>
</footer>

<style>
    li:hover a,
    li:hover{
        text-decoration: underline;
        color: white;
    }

    .bg-image{
        background: linear-gradient(hsla(0, 0%, 0%, .5), hsla(0, 0%, 0%, .5)), url('../../lib/assets/images/students.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
</style>