import Navbar from "../components/Navbar";
import { FaAngleRight } from "react-icons/fa";
import Wave from "react-wavify";
import FAQItem from "../components/FAQItem";
import { useState } from "react";
import IconRB2 from "../assets/IconRB2.jpeg";
import HeroSection1 from "../assets/HeroSection1.png";

import { FaInstagram } from "react-icons/fa";

import Digital from "../assets/Digital.png";
import Global from "../assets/Global.png";
import Modern from "../assets/Modern.png";
import Online from "../assets/Online.png";

import Berita11JuniId1 from "../assets/Berita11JuniId1.png"
import Berita2 from "../assets/Berita2.png";
import Berita3 from "../assets/Berita3.png";
import Berita4 from "../assets/Berita4.png";

import HeroSatu from "../assets/HeroSatu.png";

import Mandiri from "../assets/Mandiri.png";
import Telkom from "../assets/Telkom.png";
import Pertamina from "../assets/Pertamina.png";
import PlnPeduli from "../assets/PlnPeduli.png";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";



const HomePage = () => {
  const [hovered, setHovered] = useState(false);

  const faqItems = [
    {
      question: "Apa itu Aplikasi Rumah BUMN dan apa tujuannya?",
      answer:
        "Aplikasi Rumah BUMN adalah platform digital yang dikembangkan untuk mendukung dan mempromosikan produk-produk UMKM (Usaha Mikro, Kecil, dan Menengah) di Indonesia. Tujuannya adalah untuk membantu UMKM meningkatkan visibilitas, akses pasar, dan penjualan produk mereka melalui jaringan BUMN yang ada di seluruh Indonesia. Aplikasi ini memungkinkan UMKM untuk memasarkan produk mereka secara online dan menjangkau lebih banyak pelanggan.",
      id: 1,
    },
    {
      question: "Bagaimana cara melakukan Pemesanan?",
      answer:
        "Untuk melakukan pemesanan pada menu katalog, Anda akan diarahkan menuju WhatsApp Rumah BUMN Kalimantan Timur yang tersedia di setiap kota. Dengan demikian, Anda dapat dengan mudah memesan produk atau layanan yang diinginkan sesuai dengan lokasi terdekat Anda.",
      id: 2,
    },
    {
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Pembayaran dapat dilakukan menggunakan uang tunai (cash) atau melalui transfer bank. Selain itu, untuk mempermudah akses dan pelayanan, Rumah BUMN Kalimantan Timur telah hadir di 5 kota yaitu Balikpapan,Samarinda,Kutai Kartanegara,Berau dan Penajam Paser Utara, setiap kota ini dengan siap melayani kebutuhan masyarakat dengan berbagai fasilitas dan program unggulan.",
      id: 3,
    },
    {
      question: "Apakah saya perlu membuat akun untuk melakukan pemesanan?",
      answer:
        "Tidak perlu, untuk melakukan pemesanan pada menu katalog, Anda akan diarahkan menuju WhatsApp Rumah BUMN Kalimantan Timur yang tersedia di setiap kota. Dengan demikian, Anda dapat dengan mudah memesan produk atau layanan yang diinginkan tanpa harus membuat akun terlebih dahulu.",
      id: 4,
    },
    {
      question: "Bagaimana Cara Bergabung dengan Aplikasi Rumah BUMN?",
      answer:
        "Untuk bergabung dengan aplikasi Rumah BUMN maka anda cukup mendaftar melalui link goggle form yang tersedia di Bio Instagram masing-masing Instagram Rumah BUMN Kalimantan Timur",
      id: 5,
    },
    {
      question: "Manfaat bergabung Rumah BUMN",
      answer:
        "Aplikasi Rumah BUMN memberikan berbagai keuntungan bagi UMKM, termasuk akses ke program pelatihan, jaringan bisnis luas, platform promosi, layanan konsultasi bisnis, pembiayaan yang mudah, integrasi dengan WhatsApp untuk transaksi, dan informasi terkini tentang kebijakan dan pasar. Ini mendorong kolaborasi dan inovasi produk serta layanan UMKM, menjadikannya alat yang sangat bermanfaat untuk pengembangan usaha.",
      id: 6,
    },
  ];

  // AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const linkRef = useRef(null);
  //  back to MainSection when on click text MovieList in Footer from homepage
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // Slicker

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
              src={HeroSection1}
              alt="HeroSection1"
              className=" md:w-1/2 mt-10 lg:mt-8 h-96 lg:h-auto lg:w-auto"
            />
            {/* Pargraf dan tombol*/}
            <div className="flex flex-col gap-5 mt-6 lg:w-1/2">
              {/* heading */}
              <div className="flex flex-col gap-4 lg:mb-5">
                <q className="text-blue-900 text-xl font-bold text-center lg:text-5xl lg:mt-8 lg:mb-5 lg:text-start lg:leading-snug lg:font-semibold">
                  Selamat Datang{" "}
                  <span className="text-blue-400">Di Rumah BUMN</span>{" "}
                  Kalimantan Timur
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
                    href="https://www.instagram.com/rumahbumn.kaltim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-xl lg:font-medium"
                  >
                    <FaInstagram className="w-5 h-5 lg:w-6 lg:h-6" />
                    <p>Instagram</p>
                  </a>
                </button>
                <a
                  href="https://www.youtube.com/@rumahbumnbalikpapan8911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 items-center border-2 border-primary rounded-3xl py-2 px-4 bg-primary text-white hover:bg-blue-900 hover:border-blue-900 duration-300 lg:gap-2 lg:text-xl lg:font-medium lg:py-3 lg:px-6"
                >
                  <p>Video</p>
                  <FaAngleRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
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
                src={HeroSatu}
                alt="Gambar Hero"
                className="lg:max-xl:w-1/2 lg:mb-30"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-offset="320"
                data-aos-duration="900"
              />
              <div className="flex flex-col gap-4 xl:mr-20">
                {/* Modern */}

                <div
                  className="flex flex-col gap-y-2 mt-16"
                  data-aos="fade-down"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
                >
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
                    src={Modern}
                    alt="Modern"
                    className="border-2 rounded-full p-2 shadow-md bg-white w-20 h-20"
                  />
                  <div className="flex flex-col mb-1">
                    <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                      Go Modern
                    </h1>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      Jumlah UMKM Terdaftar
                      <span className="text-xl font-semibold text-umkm lg:text-2xl lg:font-bold italic">
                        {" "}
                        5957
                      </span>
                    </p>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      UMKM yang telah terdaftar di website Rumah BUMN Kalimantan
                      Timur
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
                    src={Digital}
                    alt="Digital"
                    className="border-2 rounded-full p-2 shadow-md bg-white w-20 h-20"
                  />
                  <div className="flex flex-col mb-1">
                    <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                      Go Digital
                    </h1>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      Jumlah UMKM Terdaftar
                      <span className="text-xl font-semibold text-umkm lg:text-2xl lg:font-bold italic">
                        {" "}
                        4255
                      </span>
                    </p>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      UMKM yang telah terdaftar di media sosial
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
                    src={Online}
                    alt="Online"
                    className="border-2 rounded-full p-2 shadow-md bg-white w-20 h-20"
                  />
                  <div className="flex flex-col mb-1">
                    <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                      Go Online
                    </h1>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      Jumlah UMKM Terdaftar
                      <span className="text-xl font-semibold text-umkm lg:text-2xl lg:font-bold italic">
                        {" "}
                        670
                      </span>
                    </p>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      UMKM yang telah mendapatkan transaksi nasional
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
                    src={Global}
                    alt="Global"
                    className="border-2 rounded-full p-2 shadow-md bg-white w-20 h-20"
                  />
                  <div className="flex flex-col mb-1">
                    <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">
                      Go Global
                    </h1>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      Jumlah UMKM Terdaftar
                      <span className="text-xl font-semibold text-umkm lg:text-2xl lg:font-bold italic">
                        {" "}
                        18
                      </span>
                    </p>
                    <p className="text-sm font-light lg:font-normal lg:text-base">
                      UMKM yang telah mendapatkan transaksi secara nasional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*berita */}
          <section className="showcases mx-auto py-12">
            <div className="flex flex-col gap-y-8">
              <div
                className="flex flex-col gap-3 text-center"
                data-aos="fade-down"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
              >
                <h1 className="text-blue-900 font-bold text-2xl lg:text-4xl">
                  Berita Terbaru
                </h1>
                <p className="text-base font-light text-slate-700 lg:text-lg">
                  Berita Terbaru di Rumah BUMN Kalimantan Timur
                </p>
              </div>
              {/* Konten */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="group relative w-[320px] h-[220px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href="/berita"
                      className="bg-primary text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      Lihat Detail
                    </a>
                  </div>
                  <img
                    src={Berita11JuniId1}
                    alt="Berita11JuniId1"
                    className="w-full h-full object-cover rounded-2xl border-2 border-transparent group-hover:border-secondary transition-all duration-500"
                  />
                </div>

                <div className="group relative w-[320px] h-[220px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href="/berita"
                      className="bg-primary text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      Lihat Detail
                    </a>
                  </div>
                  <img
                    src={Berita2}
                    alt="Berita2"
                    className="w-full h-full object-cover rounded-2xl border-2 border-transparent group-hover:border-secondary transition-all duration-500"
                  />
                </div>
                <div className="group relative w-[320px] h-[220px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href="/berita"
                      className="bg-primary text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      Lihat Detail
                    </a>
                  </div>
                  <img
                    src={Berita3}
                    alt="Berita3"
                    className="w-full h-full object-cover rounded-2xl border-2 border-transparent group-hover:border-secondary transition-all duration-500"
                  />
                </div>
                <div className="group relative w-[320px] h-[220px]">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href="/berita"
                      className="bg-primary text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      Lihat Detail
                    </a>
                  </div>
                  <img
                    src={Berita4}
                    alt="Berita4"
                    className="w-full h-full object-cover rounded-2xl border-2 border-transparent group-hover:border-secondary transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End Berita */}
        </div>

        {/* FAQ */}
        <div
          id="faq"
          className="container mx-auto px-4 my-8"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <h2 className="text-blue-900 font-bold text-2xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                id={item.id}
              />
            ))}
          </div>
        </div>
        {/* End FAQ */}

        {/* CTA */}
        <section className="py-20 lg:py-[120px] bg-white dark:bg-dark">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 lg:w-1/2">
                  <span className="block mb-4 text-base font-medium text-white">
                    Ayo, tunggu apa lagi, mari kita bergerak dan buat perubahan
                    sekarang juga untuk UMKM !
                  </span>
                  <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                    <span className="xs:block"> Daftarkan </span>
                    <span>UMKM Kamu !</span>
                  </h2>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  {/* Daftar sekarang */}
                  <div className="flex flex-wrap lg:justify-end">
                    <ul className="menu menu-vertical px-1">
                      <li>
                        <details>
                          <summary className="border-none px-6 py-2 bg-green-500 hover:bg-green-600 duration-300 rounded-2xl text-white font-medium text-lg">
                            Daftar Sekarang
                          </summary>
                          <ul className="p-2 bg-base-100 rounded-t-none">
                            <a
                              href="https://bit.ly/FormulirPendaftaranUMKM-RB2024"
                              className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div
                                className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                                  hovered ? "scale-105" : ""
                                }`}
                              >
                                <img
                                  className="object-cover w-full h-full"
                                  src={IconRB2}
                                  alt="IconRB"
                                />
                              </div>
                              <div className="flex flex-col">
                                <p
                                  className={`mb-0.5 text-sm font-semibold ${
                                    hovered ? "text-blue-600" : "text-gray-800"
                                  }`}
                                >
                                  RB Balikpapan
                                </p>
                              </div>
                            </a>

                            <a
                              href="http://bit.ly/JOINRUMAHBUMNSAMARINDA"
                              className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div
                                className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                                  hovered ? "scale-105" : ""
                                }`}
                              >
                                <img
                                  className="object-cover w-full h-full"
                                  src={IconRB2}
                                  alt="IconRB"
                                />
                              </div>
                              <div className="flex flex-col">
                                <p
                                  className={`mb-0.5 text-sm font-semibold ${
                                    hovered ? "text-blue-600" : "text-gray-800"
                                  }`}
                                >
                                  RB Samarinda
                                </p>
                              </div>
                            </a>

                            <a
                              href="https://bit.ly/FormRegistrasiRB_Berau"
                              className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div
                                className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                                  hovered ? "scale-105" : ""
                                }`}
                              >
                                <img
                                  className="object-cover w-full h-full"
                                  src={IconRB2}
                                  alt="IconRB"
                                />
                              </div>
                              <div className="flex flex-col">
                                <p
                                  className={`mb-0.5 text-sm font-semibold ${
                                    hovered ? "text-blue-600" : "text-gray-800"
                                  }`}
                                >
                                  RB Berau
                                </p>
                              </div>
                            </a>

                            <a
                              href="https://forms.gle/xjQxC24opACs3LrB6"
                              className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div
                                className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                                  hovered ? "scale-105" : ""
                                }`}
                              >
                                <img
                                  className="object-cover w-full h-full"
                                  src={IconRB2}
                                  alt="IconRB"
                                />
                              </div>
                              <div className="flex flex-col">
                                <p
                                  className={`mb-0.5 text-sm font-semibold ${
                                    hovered ? "text-blue-600" : "text-gray-800"
                                  }`}
                                >
                                  RB Penajam Paser Utara
                                </p>
                              </div>
                            </a>

                            <a
                              href="https://forms.gle/8XhmK4No735SukyMA"
                              className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                              onMouseEnter={() => setHovered(true)}
                              onMouseLeave={() => setHovered(false)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div
                                className={`avatar ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2 overflow-hidden flex items-center justify-center bg-white ${
                                  hovered ? "scale-105" : ""
                                }`}
                              >
                                <img
                                  className="object-cover w-full h-full"
                                  src={IconRB2}
                                  alt="IconRB"
                                />
                              </div>
                              <div className="flex flex-col">
                                <p
                                  className={`mb-0.5 text-sm font-semibold ${
                                    hovered ? "text-blue-600" : "text-gray-800"
                                  }`}
                                >
                                  RB Kutai Kartanegara
                                </p>
                              </div>
                            </a>
                          </ul>
                        </details>
                      </li>
                    </ul>
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

        <Footer linkRef={linkRef} goto={goto} />
      </div>
    </div>
  );
};

export default HomePage;
