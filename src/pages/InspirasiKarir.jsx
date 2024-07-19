import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroKarir1 from "../assets/HeroKarir1.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IconRB2 from "../assets/IconRB2.jpeg";
import Coretan from "../assets/Coretan.png";
import HeroKarir2 from "../assets/HeroKarir2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRef } from "react";

const InspirasiKarir = () => {
  const [hovered, setHovered] = useState(false);

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
      <Navbar />
      <div className="bg-gray-100 pt-[100px] container mx-auto" ref={linkRef}>
        <div className="text-center xl:text-left xl:px-20">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-8 xl:gap-12">
            <div className="max-w-lg xl:max-w-3xl">
              <div className="text-center md:text-left">
                <h1
                  className="font-bold text-blue-900 text-5xl md:text-6xl mb-6 md:mt-32"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="200" // Mengurangi offset agar animasi lebih cepat muncul
                  data-aos-duration="800" // Mengurangi durasi agar animasi lebih cepat selesai
                  data-aos-delay="150" // Mengurangi penundaan agar animasi lebih cepat dimulai
                >
                  Penerimaan Peserta <br />{" "}
                  <span className="text-orange-500">Magang</span>
                  <img
                    src={Coretan}
                    alt="Coretan"
                    className="mt-5 mx-auto xl:mx-0"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </h1>
                <p
                  className="text-lg md:text-xl font-medium text-gray-400"
                  data-aos="fade-right"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="200"
                  data-aos-duration="800"
                  data-aos-delay="150"
                >
                  Ayo tunggu apa lagi!
                </p>
                <p
                  className="text-lg md:text-xl font-medium text-gray-400"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="200" // Mengurangi offset agar animasi lebih cepat muncul
                  data-aos-duration="800" // Mengurangi durasi agar animasi lebih cepat selesai
                  data-aos-delay="150" // Mengurangi penundaan agar animasi lebih cepat dimulai
                >
                  Daftar dan dapatkan pekerjaan Anda hari ini
                </p>
              </div>

              {/* Daftar sekarang */}
              <div
                className="lg:flex items-center gap-7 my-2"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="200"
                data-aos-duration="800"
                data-aos-delay="150"
              >
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <details>
                      <summary className="border-none px-6 py-2 bg-blue-700 hover:bg-blue-800 duration-300 rounded-2xl text-white font-medium text-lg">
                        Daftar Sekarang
                      </summary>
                      <ul className="p-2 bg-base-100 rounded-t-none">
                        {/* Balikpapan */}
                        <Link
                          as={Link}
                          to={"/tidakadamagang"}
                          className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
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
                        </Link>

                        {/* Samarinda */}
                        <Link
                          as={Link}
                          to={"/tidakadamagang"}
                          className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
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
                        </Link>

                        {/* Berau */}
                        <Link
                          as={Link}
                          to={"/tidakadamagang"}
                          className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
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
                        </Link>

                        {/* PenajamPaser */}
                        <Link
                          as={Link}
                          to={"/tidakadamagang"}
                          className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
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
                        </Link>

                        {/* Kutai Kartanegara */}
                        <Link
                          as={Link}
                          to={"/tidakadamagang"}
                          className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
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
                        </Link>

                        {/* Menyisipkan Link lainnya seperti di atas */}
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src={HeroKarir1}
              alt="Hero1"
              className="order-first md:order-last mt-10 md:mt-10 mx-auto xl:mr-11 mb-8 shadow-lg"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="150"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="my-5">
        {/* konten */}
        <div className="flex flex-col lg:flex lg:flex-row lg:items-center text-center xl:text-left xl:px-20">
          <img
            src={HeroKarir2}
            alt="Gambar Hero"
            className="lg:max-xl:w-1/2 mb-10 lg:mb-30 px-2"
          />
          <div className="max-w-lg xl:max-w-3xl mx-auto xl:ml-auto">
            <h1
              className="font-bold text-blue-900 text-5xl md:text-6xl mb-5 md:mb-6 md:mt-32 text-center xl:text-left"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Penerimaan Staff <br />{" "}
              <span className="text-orange-500">Fasilitator</span>
              <img
                src={Coretan}
                alt="Coretan"
                className="mt-5 mx-auto xl:mx-0"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </h1>
            <p
              className="text-lg md:text-xl font-medium text-gray-400"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Ayo tunggu apa lagi!
            </p>
            <p
              className="text-lg md:text-xl font-medium text-gray-400"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              Daftar dan dapatkan pekerjaan Anda hari ini
            </p>
            {/* Daftar sekarang */}
            <div
              className="lg:flex items-center gap-7 my-2"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="200"
              data-aos-duration="800"
              data-aos-delay="150"
            >
              <ul className="menu menu-horizontal px-1">
                <li>
                  <details>
                    <summary className="border-none px-6 py-2 bg-blue-700 hover:bg-blue-800 duration-300 rounded-2xl text-white font-medium text-lg">
                      Daftar Sekarang
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                      {/* Balikpapan */}
                      <Link
                        as={Link}
                        to={"/tidakadalowongan"}
                        className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
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
                      </Link>

                      {/* Samarinda */}
                      <Link
                        as={Link}
                        to={"/tidakadalowongan"}
                        className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
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
                      </Link>

                      {/* Berau */}
                      <Link
                        as={Link}
                        to={"/tidakadalowongan"}
                        className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
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
                      </Link>

                      {/* PenajamPaser */}
                      <Link
                        as={Link}
                        to={"/tidakadalowongan"}
                        className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
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
                      </Link>

                      {/* Kutai Kartanegara */}
                      <Link
                        as={Link}
                        to={"/tidakadalowongan"}
                        className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
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
                      </Link>

                      {/* Menyisipkan Link lainnya seperti di atas */}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer linkRef={linkRef} goto={goto} />
    </>
  );
};

export default InspirasiKarir;
