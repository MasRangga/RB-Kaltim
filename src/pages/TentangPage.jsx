import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import HeroAbout from "../assets/HeroAbout.png"
import StrukturPerusahaan2 from "../assets/StrukturPerusahaan2.png"
import HitlerSijabat from "../assets/HitlerSijabat.png"
import HitlerSijabat2 from "../assets/HitlerSijabat2.png";
import RachmatWahid from "../assets/RachmatWahid.png";
import RachmatWahid2 from "../assets/RachmatWahid2.png";
import BgCard from "../assets/BgCard.jpg"
import BgCard2 from "../assets/BgCard2.jpg";
import Instagram from "../assets/Instagram.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";


const TentangPage = () => {

   const linkRef = useRef(null);
   // back to MainSection when on click logo Meraih in Footer
   const goto = (ref) => {
     window.scrollTo({
       top: ref.offsetTop,
       left: 0,
       behavior: "smooth",
     });
   };

     useEffect(() => {
       AOS.init({
         duration: 1000, // Durasi animasi dalam milidetik
         once: true, // Animasi hanya terjadi sekali saat menggulir
       });
     }, []);

   return (
     <>
       <Navbar scrollToTop={scrollTo} />
       <div className="container pt-18 md:pt-20 lg:pt-32 mx-auto" ref={linkRef}>
         <div className="flex flex-col md:flex-row lg:justify-between mx-6">
           <div className="flex flex-col mt-20 lg:w-1/2">
             <div
               data-aos="fade-right"
               data-aos-offset="320"
               data-aos-duration="800"
               className="text-3xl my-5 md:text-5xl font-semibold text-blue-900"
             >
               Tentang Kami
             </div>
             <p data-aos="fade-left" className="py-3 text-base md:text-lg">
               Selamat datang di Rumah BUMN Kalimantan Timur
             </p>
             <p data-aos="fade-right" className="py-3 text-base md:text-lg">
               Rumah BUMN adalah program yang dirancang oleh Badan Usaha Milik
               Negara (BUMN) untuk mendukung dan memberdayakan Usaha Mikro,
               Kecil, dan Menengah (UMKM) melalui pelatihan, pendampingan, dan
               akses ke berbagai sumber daya yang penting bagi perkembangan
               bisnis.
             </p>
             <p
               data-aos="fade-up"
               data-aos-offset="0"
               data-aos-duration="900"
               className="py-3 text-base md:text-lg"
             >
               Rumah BUMN Kalimantan Timur mendukung pertumbuhan UMKM lokal
               melalui pelatihan bisnis, pendampingan teknis, dan akses jaringan
               pemasaran. Dengan bantuan BUMN, UMKM dapat meningkatkan kualitas
               produk, memperluas pasar, dan bersaing di tingkat lokal dan
               nasional. Bergabunglah dengan Rumah BUMN Kalimantan Timur untuk
               menjadi bagian dari ekosistem yang mendorong kesuksesan bisnis
               Anda.
             </p>
           </div>
           <img
             data-aos="fade-left"
             className="mt-2 mx-2 md:mt-8 md:w-1/2 lg:w-[600px]"
             src={HeroAbout}
             alt="HeroAbout"
           />
         </div>
       </div>
       <div className="mx-4 mt-16">
         <div className="flex flex-col gap-3 text-center">
           <h1
             className="text-blue-900 font-bold text-2xl lg:text-4xl"
             data-aos="fade-down"
             data-aos-easing="ease-in-out"
             data-aos-duration="1000"
           >
             Visi & Misi
           </h1>
           <p className="text-lg md:text-xl font-medium text-gray-400">
             Berikut merupakan Visi Misi dari Rumah BUMN Kalimantan Timur
           </p>
         </div>
         {/* Card */}
         <div className="mx-4 flex flex-col justify-center items-center my-10">
           <div className="flex flex-col gap-14 lg:w-2/3 mx-auto">
             <div className="relative" data-aos="fade-up">
               <div className="bg-gradient-to-r from-red-500 to-red-700 rounded-2xl px-3 py-2 text-white text-base lg:text-xl shadow-lg inline-block mb-2">
                 Visi
               </div>
               <div className="border-2 border-red-500 bg-white rounded-xl px-4 pt-4 pb-4 shadow-md transition-transform transform hover:scale-105">
                 <p className="text-sm lg:text-lg text-gray-700">
                   Menjadi pelopor dan pemimpin dalam pengembangan UMKM di
                   Provinsi Kalimantan Timur, mewujudkan keberlanjutan bisnis
                   masyarakat lokal dan lingkungan serta berperan dalam media
                   koordinasi satgas bencana.
                 </p>
               </div>
             </div>
             {/* card 2 */}
             <div className="relative" data-aos="fade-up" data-aos-delay="200">
               <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl px-3 py-2 text-white text-base lg:text-xl shadow-lg inline-block mb-2">
                 Misi
               </div>
               <div className="border-2 border-blue-500 bg-white rounded-xl px-4 pt-4 pb-4 shadow-md transition-transform transform hover:scale-105">
                 <p className="text-sm lg:text-lg text-gray-700">
                   Mendorong pengembangan UMKM, memberdayakan masyarakat lokal,
                   berperan dalam koordinasi dan edukasi bencana, menjalin
                   sinergi dengan pemerintah dan swasta serta berperan dalam
                   penyaluran Program Pendanaan Usaha Mikro Kecil (PUMK).
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
       {/* Card CEO CFO */}
       <div
         className="mx-4 mt-16"
         data-aos="fade-right"
         data-aos-offset="320"
         data-aos-duration="800"
       >
         <h2 className="text-blue-900 font-bold text-2xl lg:text-4xl">
           CEO & CFO
         </h2>
         <p className="text-lg md:text-xl font-medium text-gray-400">
           Chief Executive Officer & Chief Financial Officer Rumah BUMN
           Kalimantan Timur
         </p>
       </div>
       <div className="flex flex-col md:flex-row justify-center">
         {/* Card CEO */}
         <div className="mx-4 md:mx-10 mt-40 md:mt-40 flex-shrink-0 w-full md:w-[400px] group cursor-pointer active:opacity-70 transition-opacity duration-300">
           <div className="relative group bg-black rounded-t h-[50px] md:h-[100px] group-hover:[100px] transition-all duration-300">
             <img
               src={BgCard}
               alt="BgCard"
               className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
             />
             <img
               src={HitlerSijabat}
               alt="HitlerSijabat"
               className="object-cover absolute w-[160px] md:w-[200px] bottom-0 opacity-0 group-hover:opacity-100 transform translate-y-3/4 group-hover:translate-y-0 transition duration-300"
             />
             <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 md:left-52 text-white font-bold text-2xl md:text-3xl transition-all duration-300">
               Hitler Sijabat
             </h1>
           </div>
           {/* Body Card */}
           <div className="min-h-[120px] md:min-h-[100px] py-3 px-4 bg-white rounded-b relative z-10 shadow text-gray-600">
             <div className="font-semibold mb-1">
               <p>Chief Executive Officer</p>
             </div>
             <div className="flex flex-wrap justify-start gap-5 md:gap-5 py-3">
               <a
                 href="https://www.instagram.com/hit.sijabat/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="transition transform hover:scale-110 hover:shadow-lg"
               >
                 <img
                   src={Instagram}
                   alt="Instagram"
                   className="w-6 h-6 md:w-6 md:h-6"
                 />
               </a>
               <a
                 href="https://www.linkedin.com/in/hitler-sijabat-abb56750/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="transition transform hover:scale-110 hover:shadow-lg"
               >
                 <img
                   src={LinkedIn}
                   alt="LinkedIn"
                   className="w-6 h-6 md:w-6 md:h-6"
                 />
               </a>
             </div>

             <p className="text-sm text-gray-500">
               Hitler Sijabat menjabat sebagai CEO Rumah BUMN Kalimantan
               Timur...
               <button
                 className="text-blue-500"
                 onClick={() =>
                   document.getElementById("my_modal_1").showModal()
                 }
               >
                 Lihat detail
               </button>
             </p>
           </div>
         </div>

         {/* ModalCEO */}
         <dialog id="my_modal_1" className="modal">
           <div className="modal-box bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
             <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4">
               <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0 mx-auto md:mx-0">
                 <img
                   src={HitlerSijabat2}
                   alt="HitlerSijabat2"
                   className="object-cover w-full rounded-full"
                   style={{ objectPosition: "center center" }}
                 />
               </div>

               <div className="flex-1 mt-4 md:mt-0 text-left">
                 <h4 className="font-bold text-xl text-gray-900">
                   Hitler Sijabat
                 </h4>
                 <p className="text-gray-600">Chief Executive Officer (CEO)</p>
                 <p>
                   Email Pribadi:{" "}
                   <a
                     href="mailto:hit.sijabat@gmail.com"
                     className="text-blue-500"
                   >
                     hit.sijabat@gmail.com
                   </a>
                 </p>
                 <p>
                   Email:{" "}
                   <a
                     href="mailto:hitler.sijabat@pertamina.com"
                     className="text-blue-500"
                   >
                     hitler.sijabat@pertamina.com
                   </a>
                 </p>
                 <p className="py-4 text-gray-700">
                   Hitler Sijabat menjabat sebagai CEO Rumah BUMN Kalimantan
                   Timur berdasarkan Surat Kementrian Badan Usaha Milik Negara
                   Nomor: S-152/DSI.MBU/11/2023, tanggal 28 November 2023
                   tentang Penugasan CEO dan CFO Muda Rumah BUMN Batch-2 dan
                   Surat Perintah Pertamina (Persero) Nomor:
                   No.Prin-051/K00000/2023-S8 tanggal 21 Desember 2023 tentang
                   Penugasan Pekerja Sebagai CEO dan CFO Muda Rumah BUMN.
                 </p>
                 <p className="text-gray-700">
                   Hitler Sijabat lulus dari Jurusan Teknik Geologi di
                   Universitas Padjadjaran (2011) dan melanjutkan pendidikan
                   Magister Petroleum Geoscience di Institut Teknologi Bandung
                   (2021). Karir Hitler Sijabat antara lain:
                 </p>
                 <ul className="list-disc pl-6 text-gray-700">
                   <li className="text-gray-700">
                     MLWD Field Engineer di Schlumberger Indonesia (2012-2013)
                   </li>
                   <li className="text-gray-700">
                     Regional Exploration Geoscientist di Pertamina EP
                     (2013-2014)
                   </li>
                   <li className="text-gray-700">
                     Appraisal Geoscientist di Pertamina EP (2015-2017)
                   </li>
                   <li className="text-gray-700">
                     Development Geoscientist di Pertamina EP (2017-2020)
                   </li>
                   <li className="text-gray-700">
                     Exploration Geoscientist di Pertamina Hulu Rokan
                     (2020-2021)
                   </li>
                   <li className="text-gray-700">
                     New Venture Exploration Geoscientist di Pertamina Hulu
                     Energi (2022-2024)
                   </li>
                 </ul>
               </div>
             </div>
             <div className="modal-action mt-4 text-center">
               <form method="dialog">
                 <button
                   className="btn bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded block mx-auto w-full"
                   onClick={() => document.getElementById("my_modal_1").close()}
                 >
                   Close
                 </button>
               </form>
             </div>
           </div>
         </dialog>
         {/* EndModalCEO */}

         {/* Card CFO */}
         <div className="mx-4 md:mx-10 mt-40 md:mt-40 flex-shrink-0 w-full md:w-[400px] group cursor-pointer active:opacity-70 transition-opacity duration-300">
           <div className="relative group bg-black rounded-t h-[50px] md:h-[100px] group-hover:[100px] transition-all duration-300">
             <img
               src={BgCard2}
               alt="BgCard2"
               className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition duration-300"
             />
             <img
               src={RachmatWahid}
               alt="RachmatWahid"
               className="object-cover absolute w-[160px] md:w-[200px] bottom-0 opacity-0 group-hover:opacity-100 transform translate-y-3/4 group-hover:translate-y-0 transition duration-300"
             />
             <h1 className="absolute top-1/2 transform -translate-y-1/2 left-5 md:left-52 text-white font-bold text-2xl md:text-3xl transition-all duration-300">
               Rachmat Wahid
             </h1>
           </div>
           {/* Body Card */}
           <div className="min-h-[120px] md:min-h-[100px] py-3 px-4 bg-white rounded-b relative z-10 shadow text-gray-600">
             <div className="font-semibold mb-1">
               <p>Chief Financial Officer</p>
             </div>
             <div className="flex flex-wrap justify-start gap-5 md:gap-5 py-3">
               <a
                 href="https://www.instagram.com/r.wahid_harahap?igsh=MTJwN3BmbnNjdTdsdg=="
                 target="_blank"
                 rel="noopener noreferrer"
                 className="transition transform hover:scale-110 hover:shadow-lg"
               >
                 <img
                   src={Instagram}
                   alt="Instagram"
                   className="w-6 h-6 md:w-6 md:h-6"
                 />
               </a>
               <a
                 href=""
                 target="_blank"
                 rel="noopener noreferrer"
                 className="transition transform hover:scale-110 hover:shadow-lg"
               >
                 <img
                   src={LinkedIn}
                   alt="LinkedIn"
                   className="w-6 h-6 md:w-6 md:h-6"
                 />
               </a>
             </div>
             <p className="text-sm text-gray-500">
               Rachmat Wahid menjabat sebagai CFO Rumah BUMN Kalimantan Timur...
               <button
                 className="text-blue-500"
                 onClick={() =>
                   document.getElementById("my_modal_2").showModal()
                 }
               >
                 Lihat detail
               </button>
             </p>
           </div>
         </div>
       </div>

       {/* ModalCFO */}
       <dialog id="my_modal_2" className="modal">
         <div className="modal-box bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
           <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-4">
             <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0 mx-auto md:mx-0">
               <img
                 src={RachmatWahid2}
                 alt="RachmatWahid2"
                 className="object-cover w-full rounded-full"
                 style={{ objectPosition: "center center" }}
               />
             </div>

             <div className="flex-1 mt-4 md:mt-0 text-left">
               <h4 className="font-bold text-xl text-gray-900">
                 Rachmat Wahid
               </h4>
               <p className="text-gray-600">Chief Financial Officer (CFO)</p>
               <p>
                 Email:{" "}
                 <a
                   href="mailto:rachmat.wahid@pertamina.com"
                   className="text-blue-500"
                 >
                   rachmat.wahid@pertamina.com
                 </a>
               </p>
               <p className="py-4 text-gray-700">
                 Rachmat Wahid menjabat sebagai CFO Rumah BUMN Kalimantan Timur
                 berdasarkan Surat Keputusan Kementerian Badan Usaha Milik
                 Negara Nomor: S-152/DSI.MBU/11/2023, tanggal 28 November 2023,
                 tentang Penugasan CEO dan CFO Muda Rumah BUMN Batch-2, serta
                 Surat Perintah PT Pertamina Hulu Energi Nomor:
                 No.Prin-046/PHE50000/2023-S8, tanggal 29 Desember 2023, tentang
                 Penugasan Pekerja Sebagai CFO Muda Rumah BUMN.
               </p>
               <p className="text-gray-700">
                 Rachmat Wahid merupakan lulusan Jurusan Akuntansi dari
                 Universitas Trisakti (2010) dan telah melanjutkan pendidikan
                 Magister Management di Universitas Trisakti (2020). Karir
                 Rachmat Wahid antara lain:
               </p>
               <ul className="list-disc pl-6 text-gray-700">
                 <li className="text-gray-700">
                   Finance & Accounting di PT. Padi Energi Nusantara (2010 –
                   2012)
                 </li>
                 <li className="text-gray-700">
                   Account Payable Analyst di PT. Pertamina Hulu Energi West
                   Madura Offshore (2012 – 2018)
                 </li>
                 <li className="text-gray-700">
                   East Area Account Payable Sr Analyst I di PT. Pertamina Hulu
                   Energi (2018 – 2019)
                 </li>
                 <li className="text-gray-700">
                   Officer Joint Interest Accounting di PT. Pertamina Hulu
                   Energi (2019 – 2022)
                 </li>
                 <li className="text-gray-700">
                   Sr Analyst Segment Report Data di PT. Pertamina Hulu Energi
                   (2022-2023)
                 </li>
                 <li className="text-gray-700">
                   Sr Analyst Consolidation Data di PT Pertamina Hulu Energi
                   (2023)
                 </li>
               </ul>
             </div>
           </div>
           <div className="modal-action mt-4 text-center">
             <form method="dialog">
               <button
                 className="btn bg-primary hover:bg-blue-800 text-white font-bold py-2 px-4 rounded block mx-auto w-full"
                 onClick={() => document.getElementById("my_modal_2").close()}
               >
                 Close
               </button>
             </form>
           </div>
         </div>
       </dialog>
       {/* EndModalCFO */}

       {/* Struktur Perusahaan */}
       <div
         className="mx-4 mt-16"
         data-aos="fade-right"
         data-aos-offset="320"
         data-aos-duration="800"
       >
         <h2 className="text-blue-900 font-bold text-2xl lg:text-4xl">
           Struktur Perusahaan
         </h2>
         <p className="text-lg md:text-xl font-medium text-gray-400">
           Struktur Perusahaan di Rumah BUMN Kalimantan Timur
         </p>
         <div className="flex justify-center my-10" data-aos="fade-up">
           <img
             src={StrukturPerusahaan2}
             alt="Struktur Perusahaan"
             className="w-full max-w-4xl"
           />
         </div>
       </div>
       {/* End Struktur Perusahaan */}
       <Footer linkRef={linkRef} goto={goto} />
     </>
   );
}

export default TentangPage