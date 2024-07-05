import Navbar from "../components/Navbar"
import HeroSection from "../assets/HeroSection.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import Wave from 'react-wavify';
import { useState } from "react";

import GoDigital from "../assets/GoDigital.svg";
import GoGlobal from "../assets/GoGlobal.svg";
import GoModern from "../assets/GoModern.svg";
import GoOnline from "../assets/GoOnline.svg";


import kontenSatu from "../assets/kontenSatu.png"
import kontenDua from "../assets/KontenDua.png";


import Mandiri from "../assets/Mandiri.png";
import Telkom from "../assets/Telkom.png";
import Pertamina from "../assets/Pertamina.png";
import PlnPeduli from "../assets/PlnPeduli.png";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css"
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";

const HomePage = () => {
   const [openFaq, setOpenFaq] = useState({
     faq1: false,
     faq2: false,
     faq3: false,
     faq4: false,
     faq5: false,
     faq6: false,
   });

   const toggleFaq = (faq) => {
     setOpenFaq((prev) => ({
       ...prev,
       [faq]: !prev[faq],
     }));
   };
   

   // AOS (Animate On Scroll)
   useEffect(() => {
      AOS.init({
         once: false,
      })
   }, [])

   const linkRef = useRef(null);
   // back to MainSection when on click text MovieList in Footer from homepage
   // const goto = (ref) => {
   //    window.scrollTo({
   //       top: ref.offsetTop,
   //       left: 0,
   //       behavior: "smooth",
   //    });
   // };

   return (
     <div>
       <Navbar />
       <div className="pt-[73px] container mx-auto" ref={linkRef}>
         {/* Mainsaction */}
         <div className="relative pt-4 bg-gradient-to-r from-blue-300 shadow-2xl mb-10 md:pt-6 lg:pt-4">
           {/* konten mainsaction */}
           <div className="mx-4 pb-36 md:flex md:flex-col md:justify-center md:items-center lg:pb-0 lg:flex lg:flex-row-reverse lg:gap-4 lg:mt-2">
             {/* gambar */}
             <img
               src={HeroSection}
               alt="HeroSection"
               className="h-96 md:w-1/2 lg:mt-8 lg:h-auto"
             />
             {/* Pargraf dan tombol*/}
             <div className="flex flex-col gap-5 mt-6 lg:w-1/2">
               {/* heading */}
               <div className="flex flex-col gap-4 lg:mb-5">
                 <q className="text-blue-900 text-xl font-bold text-center lg:text-5xl lg:mt-8 lg:mb-5 lg:text-start lg:leading-snug lg:font-semibold">
                   Selamat Datang{" "}
                   <span className="text-blue-400">Di Rumah BUMN</span> Di Rumah
                   BUMN Kalimantan Timur
                 </q>
                 <p>
                   Kami hadir dengan peran baru untuk memperkaya fungsi Rumah
                   BUMN Kalimantan Timur, guna memperkuat peran BUMN di tengah
                   masyarakat sebagai sinergi untuk kemajuan Kalimantan Timur.
                 </p>
               </div>
               {/* dua button hub sales dan coba gratis */}
               <div className="flex gap-4 pb-5 lg:mb-36">
                 <button className="border-2 rounded-3xl py-2 px-4 border-primary bg-white hover:bg-primary group duration-300 lg:py-3 lg:px-6">
                   <a
                     // href="https://wa.me/6285346901814"
                     target="_blank"
                     className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-xl lg:font-medium"
                   >
                     <ImWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
                     <p>Daftar Sekarang</p>
                   </a>
                 </button>
                 <button className="flex gap-1 items-center border-2 border-primary rounded-3xl py-2 px-4 bg-primary text-white hover:bg-blue-900 hover:border-blue-900 duration-300 lg:gap-2 lg:text-xl lg:font-medium lg:py-3 lg:px-6">
                   <p>Video</p>
                   <FaAngleRight className="w-5 h-5 lg:w-6 lg:h-6" />
                 </button>
               </div>
             </div>
           </div>
           {/* wave */}
           <div>
             <Wave
               mask="url(#mask)"
               fill="#86CEFF"
               className="absolute bottom-0"
               options={{
                 height: 10,
                 amplitude: 30,
                 speed: 0.4,
                 points: 3,
               }}
             >
               <defs>
                 <linearGradient id="gradient" gradientTransform="rotate(180)">
                   <stop offset="0" stopColor="white" />
                   <stop offset="0.9" stopColor="black" />
                 </linearGradient>
                 <mask id="mask">
                   <rect
                     x="0"
                     y="0"
                     className="w-full"
                     height="200"
                     fill="url(#gradient)"
                   />
                 </mask>
               </defs>
             </Wave>
             <Wave
               mask="url(#mask)"
               fill="#0099ff"
               className="absolute bottom-0"
               options={{
                 height: 50,
                 amplitude: 30,
                 speed: 0.4,
                 points: 3,
               }}
             >
               <defs>
                 <linearGradient id="gradient" gradientTransform="rotate(180)">
                   <stop offset="0" stopColor="white" />
                   <stop offset="0.9" stopColor="black" />
                 </linearGradient>
                 <mask id="mask">
                   <rect
                     x="0"
                     y="0"
                     className="w-full"
                     height="200"
                     fill="url(#gradient)"
                   />
                 </mask>
               </defs>
             </Wave>
             <Wave
               mask="url(#mask)"
               fill="#2051E5"
               className="absolute bottom-0"
               options={{
                 height: 80,
                 amplitude: 30,
                 speed: 0.4,
                 points: 4,
               }}
             >
               <defs>
                 <linearGradient id="gradient" gradientTransform="rotate(180)">
                   <stop offset="0" stopColor="white" />
                   <stop offset="0.9" stopColor="black" />
                 </linearGradient>
                 <mask id="mask">
                   <rect
                     x="0"
                     y="0"
                     className="w-full"
                     height="200"
                     fill="url(#gradient)"
                   />
                 </mask>
               </defs>
             </Wave>
           </div>
         </div>

         {/* Pengelola Perusahaan */}
         <div className="mx-4">
           <div className="mb-8">
             {/* heading */}
             <div
               className="flex flex-col gap-3 text-center"
               data-aos="fade-down"
               data-aos-easing="ease-in-out"
               data-aos-duration="1000"
             >
               <h1 className="text-blue-900 font-bold text-2xl lg:text-4xl">
                 Perusahaan Pengelola
               </h1>
               <p className="text-base font-light text-slate-700 lg:text-lg">
                 Berikut merupakan perusahaan pengelola Rumah BUMN Kalimantan
                 Timur
               </p>
             </div>
             {/* Konten */}
             <div className="mx-auto mt-16 mb-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
               <img
                 alt="Pertamina"
                 src={Pertamina}
                 width={200}
                 height={60}
                 className="col-span-2 max-h-16  w-full object-contain lg:col-span-1"
               />
               <img
                 alt="Mandiri"
                 src={Mandiri}
                 width={200}
                 height={60}
                 className="col-span-2 max-h-16  w-full object-contain lg:col-span-1"
               />
               <img
                 alt="Telkom"
                 src={Telkom}
                 width={200}
                 height={60}
                 className="col-span-2 max-h-16  w-full object-contain lg:col-span-1"
               />
               <img
                 alt="PlnPeduli"
                 src={PlnPeduli}
                 width={200}
                 height={60}
                 className="col-span-2 max-h-16  w-full object-contain sm:col-start-2 lg:col-span-1"
               />
             </div>
           </div>
         </div>

         {/* Go modern digital */}
         <div className="mx-4">
           {/* section satu */}
           <div className="mb-8">
             {/* heading */}

             {/* konten */}
             <div className="flex flex-col lg:flex lg:flex-row lg:items-center">
               <img
                 src={kontenSatu}
                 alt="Gambar Konten Jasa perusahaan satu"
                 className="lg:max-xl:w-1/2"
                 data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-offset="320"
                 data-aos-duration="900"
               />
               <div className="flex flex-col gap-4 xl:mr-20">
                 {/* Modern */}

                 <div className="flex flex-col gap-y-2 mt-16">
                   <h1 className="text-blue-900 font-bold text-2xl lg:text-4xl">
                     Tahap Pembinaan UMKM di Rumah BUMN Kalimantan Timur
                   </h1>
                   <p className="text-base leading-loose text-slate-700">
                     Pengembangan UMKM di Rumah BUMN Kalimantan Timur akan
                     melalui 4 tahapan, yaitu: Go Modern, Go Digital, Go Online,
                     dan Go Global
                   </p>
                 </div>
                 <div
                   className="flex gap-4 lg:gap-6"
                   data-aos="fade-left"
                   data-aos-anchor="#example-anchor"
                   data-aos-offset="1200"
                   data-aos-duration="900"
                   data-aos-delay="250"
                 >
                   <img
                     src={GoModern}
                     alt="GoModern"
                     className="border-2 rounded-full p-2 shadow-md bg-white w-24 h-24"
                   />
                   <div className="flex flex-col gap-2 mt-4">
                     <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                       Go Modern
                     </h1>
                     <p className="text-sm font-light lg:font-normal lg:text-base">
                       UMKM yang telah terdaftar di website Rumah BUMN
                       Kalimantan Timur
                     </p>
                   </div>
                 </div>

                 {/* Online */}
                 <div
                   className="flex gap-4 lg:gap-6"
                   data-aos="fade-left"
                   data-aos-anchor="#example-anchor"
                   data-aos-offset="1200"
                   data-aos-duration="900"
                   data-aos-delay="500"
                 >
                   <img
                     src={GoOnline}
                     alt="GoOnline"
                     className="border-2 rounded-full p-2 shadow-md bg-white w-24 h-24"
                   />
                   <div className="flex flex-col gap-2 mt-4">
                     <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                       Go Online
                     </h1>
                     <p className="text-sm font-light lg:font-normal lg:text-base">
                       UMKM yang telah mendapatkan transaksi nasional
                     </p>
                   </div>
                 </div>

                 {/* Digital */}
                 <div
                   className="flex gap-4 lg:gap-6"
                   data-aos="fade-left"
                   data-aos-anchor="#example-anchor"
                   data-aos-offset="1200"
                   data-aos-duration="900"
                   data-aos-delay="750"
                 >
                   <img
                     src={GoDigital}
                     alt="GoDigital"
                     className="border-2 rounded-full p-2 shadow-md bg-white w-24 h-24"
                   />
                   <div className="flex flex-col gap-2 mt-4">
                     <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                       Go Digital
                     </h1>
                     <p className="text-sm font-light lg:font-normal lg:text-base">
                       UMKM yang telah terdaftar di media sosial
                     </p>
                   </div>
                 </div>

                 {/* Go Global */}
                 <div
                   className="flex gap-4 lg:gap-6"
                   data-aos="fade-left"
                   data-aos-anchor="#example-anchor"
                   data-aos-offset="1200"
                   data-aos-duration="900"
                   data-aos-delay="1000"
                 >
                   <img
                     src={GoGlobal}
                     alt="GoGlobal"
                     className="border-2 rounded-full p-2 shadow-md bg-white w-24 h-24"
                   />
                   <div className="flex flex-col gap-2 mt-4">
                     <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                       Go Global
                     </h1>
                     <p className="text-sm font-light lg:font-normal lg:text-base">
                       UMKM yang telah mendapatkan transaksi secara nasional
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/*berita */}
           <div className="w-full py-20">
             <div className="container mx-auto">
               <div className="mx-auto text-center mb-16 space-y-4 max-w-xl">
                 <h2 className="text-blue-900 font-bold text-2xl lg:text-4xl">
                   Berita Terbaru di{" "}
                   <span className="text-blue-400"> Rumah BUMN </span>{" "}
                   Kalimantan Timur
                 </h2>
                 <p className="text-slate-600 ">
                   Berita Terbaru di Rumah BUMN Kalimantan Timur
                 </p>
               </div>
               {/* Konten */}
               <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                 {/* Card1 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Card+1"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     15 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Pendaftaran Fasilitator Telah Dibuka
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Raihan
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card2 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Card+2"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     16 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Acara Peluncuran Produk Baru
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Budi
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card3 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Card+3"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     17 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Diskon Spesial Akhir Pekan
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Citra
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card4 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/FF00FF/FFFFFF?text=Card+4"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     18 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Seminar Bisnis Online
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Dewi
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card1 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Card+1"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     15 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Pendaftaran Fasilitator Telah Dibuka
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Raihan
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card2 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/00FF00/FFFFFF?text=Card+2"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     16 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Acara Peluncuran Produk Baru
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Budi
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card3 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/0000FF/FFFFFF?text=Card+3"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     17 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Diskon Spesial Akhir Pekan
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Citra
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>

                 {/* Card4 */}
                 <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 mb-6 rounded-md overflow-hidden shadow-md bg-white hover:shadow-lg">
                   <div className="mb-4 w-full h-48 overflow-hidden">
                     <img
                       src="https://via.placeholder.com/300x200/FF00FF/FFFFFF?text=Card+4"
                       alt="Placeholder"
                       className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                     />
                   </div>
                   <p className="text-gray-500 font-semibold text-xs mb-1 ml-4">
                     18 Juni 2024
                   </p>
                   <a
                     href="#"
                     className="line-clamp-2 font-bold text-gray-900 text-lg mb-2 hover:text-blue-500 ml-4 block transition-colors duration-300"
                   >
                     Seminar Bisnis Online
                   </a>
                   <p className="text-gray-600 text-sm mb-2 ml-4">
                     Oleh Admin Dewi
                   </p>
                   <a
                     href="#"
                     className="font-semibold text-blue-600 text-sm ml-4 hover:underline block transition-colors duration-300"
                   >
                     Baca Selengkapnya
                   </a>
                 </div>
               </div>
             </div>
           </div>
           {/* End Berita */}
         </div>

         {/* FAQ */}
         <section className="relative z-20 overflow-hidden bg-white dark:bg-dark mb-15 lg:pt-[90px] lg:pb-[90px]">
           <div className="container mx-auto">
             <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4">
                 <div className="mx-auto mb-12 max-w-[520px] text-center lg:mb-20">
                   <span className="block mb-2 text-lg font-semibold text-primary">
                     FAQ
                   </span>
                   <h2 className="text-dark dark:text-black mb-4 text-3xl font-bold sm:text-[40px] leading-tight">
                     Any Questions? Look Here
                   </h2>
                   <p className="text-base text-body-color dark:text-dark-6">
                     There are many variations of passages of Lorem Ipsum
                     available but the majority have suffered alteration in some
                     form.
                   </p>
                 </div>
               </div>
             </div>
             <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4 lg:w-1/2">
                 {[1, 2, 3].map((i) => (
                   <div
                     key={i}
                     className="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8 transition-all duration-300"
                   >
                     <button
                       className="flex w-full text-left faq-btn focus:outline-none"
                       onClick={() => toggleFaq(`faq${i}`)}
                     >
                       <div className="bg-primary/5 dark:bg-white/5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                         <svg
                           className={`transition-transform duration-300 ${
                             openFaq[`faq${i}`] ? "rotate-180" : ""
                           }`}
                           width="22"
                           height="22"
                           viewBox="0 0 22 22"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                             fill="currentColor"
                           />
                         </svg>
                       </div>
                       <div className="w-full">
                         <h4 className="mt-1 text-lg font-semibold text-dark dark:text-black">
                           How long we deliver your first blog post?
                         </h4>
                       </div>
                     </button>
                     {openFaq[`faq${i}`] && (
                       <div className="faq-content pl-[62px]">
                         <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                           It takes 2-3 weeks to get your first blog post ready.
                           That includes the in-depth research & creation of
                           your monthly content marketing strategy that we do
                           before writing your first blog post, Ipsum available.
                         </p>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
               <div className="w-full px-4 lg:w-1/2">
                 {[4, 5, 6].map((i) => (
                   <div
                     key={i}
                     className="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8 transition-all duration-300"
                   >
                     <button
                       className="flex w-full text-left faq-btn focus:outline-none"
                       onClick={() => toggleFaq(`faq${i}`)}
                     >
                       <div className="bg-primary/5 dark:bg-white/5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                         <svg
                           className={`transition-transform duration-300 ${
                             openFaq[`faq${i}`] ? "rotate-180" : ""
                           }`}
                           width="22"
                           height="22"
                           viewBox="0 0 22 22"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                         >
                           <path
                             d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                             fill="currentColor"
                           />
                         </svg>
                       </div>
                       <div className="w-full">
                         <h4 className="mt-1 text-lg font-semibold text-dark dark:text-black">
                           How long we deliver your first blog post?
                         </h4>
                       </div>
                     </button>
                     {openFaq[`faq${i}`] && (
                       <div className="faq-content pl-[62px]">
                         <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                           It takes 2-3 weeks to get your first blog post ready.
                           That includes the in-depth research & creation of
                           your monthly content marketing strategy that we do
                           before writing your first blog post, Ipsum available.
                         </p>
                       </div>
                     )}
                   </div>
                 ))}
               </div>
             </div>
           </div>
           <div className="absolute bottom-0 right-0 z-[-1]">
             <svg
               width="1440"
               height="886"
               viewBox="0 0 1440 886"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 opacity="0.5"
                 d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                 fill="url(#paint0_linear)"
               />
               <defs>
                 <linearGradient
                   id="paint0_linear"
                   x1="1308.65"
                   y1="1142.58"
                   x2="602.827"
                   y2="-418.681"
                   gradientUnits="userSpaceOnUse"
                 >
                   <stop stopColor="#3056D3" stopOpacity="0.36" />
                   <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                   <stop
                     offset="1"
                     stopColor="#F5F2FD"
                     stopOpacity="0.096144"
                   />
                 </linearGradient>
               </defs>
             </svg>
           </div>
         </section>
         {/* End FAQ */}

         {/* CTA */}
         <section className="py-20 lg:py-[120px] bg-white dark:bg-dark">
           <div className="container mx-auto">
             <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
               <div className="flex flex-wrap items-center -mx-4">
                 <div className="w-full px-4 lg:w-1/2">
                   <span className="block mb-4 text-base font-medium text-white">
                     Ayo, tunggu apa lagi, mari kita bergerak dan buat perubahan
                     sekarang juga !
                   </span>
                   <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                     <span className="xs:block"> Ayo </span>
                     <span>Generasi Milenial !</span>
                   </h2>
                 </div>
                 <div className="w-full px-4 lg:w-1/2">
                   <div className="flex flex-wrap lg:justify-end">
                     <a
                       href="javascript:void(0)"
                       className="inline-flex py-3 my-1 mr-4 text-base font-medium transition bg-white rounded-md hover:bg-shadow-1 text-primary px-7"
                     >
                       Daftar Sekarang
                     </a>
                   </div>
                 </div>
               </div>

               <div>
                 <span className="absolute top-0 left-0 z-[-1]">
                   <svg
                     width="189"
                     height="162"
                     viewBox="0 0 189 162"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <ellipse
                       cx="16"
                       cy="-16.5"
                       rx="173"
                       ry="178.5"
                       transform="rotate(180 16 -16.5)"
                       fill="url(#paint0_linear)"
                     />
                     <defs>
                       <linearGradient
                         id="paint0_linear"
                         x1="-157"
                         y1="-107.754"
                         x2="98.5011"
                         y2="-106.425"
                         gradientUnits="userSpaceOnUse"
                       >
                         <stop stop-color="white" stop-opacity="0.07" />
                         <stop offset="1" stop-color="white" stop-opacity="0" />
                       </linearGradient>
                     </defs>
                   </svg>
                 </span>
                 <span className="absolute bottom-0 right-0 z-[-1]">
                   <svg
                     width="191"
                     height="208"
                     viewBox="0 0 191 208"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <ellipse
                       cx="173"
                       cy="178.5"
                       rx="173"
                       ry="178.5"
                       fill="url(#paint0_linear)"
                     />
                     <defs>
                       <linearGradient
                         id="paint0_linear"
                         x1="-3.27832e-05"
                         y1="87.2457"
                         x2="255.501"
                         y2="88.5747"
                         gradientUnits="userSpaceOnUse"
                       >
                         <stop stop-color="white" stop-opacity="0.07" />
                         <stop offset="1" stop-color="white" stop-opacity="0" />
                       </linearGradient>
                     </defs>
                   </svg>
                 </span>
               </div>
             </div>
           </div>
         </section>
         {/* End CTA */}
         <Footer />
       </div>
     </div>
   );
}

export default HomePage