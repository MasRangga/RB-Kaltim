import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import CopyRight from "../../../components/CopyRight";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import Bagelan from "../../../assets/Balikpapan/Bagelan.jpg";

const PapiSnack = () => {
  const [images, setImages] = useState({
    img1: Bagelan,
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-32">
        <div className="flex flex-col gap-10">
          {/* Judul */}
          <div className="flex flex-col mx-5">
            <h1 className="text-primary font-light text-2xl">
              Rumah BUMN Balikpapan
            </h1>
            <h2 className="text-blue-800 font-semibold text-5xl">
              Detail Produk
            </h2>
          </div>
          {/* end judul */}
          {/* Button Back */}
          <Link
            to="/balikpapankatalog"
            className=" flex items-center gap-2 ml-6 hover:underline hover:scale-105 duration-300 w-1/4"
          >
            <MdKeyboardBackspace className="w-6 h-6" />
            <p className="text-base font-medium">Kembali</p>
          </Link>
          {/* End Button Back */}
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center justify-between">
            <div className="flex flex-col gap-6 lg:w-1/2">
              <img
                src={activeImg}
                alt="Main Sneaker"
                className="w-96 h-80 object-cover rounded-xl mx-auto"
              />
            </div>
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-1/2 lg:mr-20">
              <div>
                <span className="text-primary font-semibold">
                  Bagelen Skripsi
                </span>
                <h1 className="text-3xl font-bold">Roti Sisir</h1>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Keripik pare terbuat dari sayuran pare pilihan yang diolah
                bersama tepung dan bumbu menjadi camilan keripik yang renyah dan
                gurih, cocok untuk teman santai. Dapat bertahan hingga 3-4 bulan
                dalam suhu ruangan.
              </p>
              <p className="text-gray-700">
                {" "}
                <span className="font-semibold">Komposisi : </span> Pare,
                Tepung, Bumbu, Garam, Minyak.
              </p>
              <p className="text-gray-700">
                {" "}
                <span className="font-semibold">Berat Bersih : </span> 100 gr
              </p>
              <h6 className="text-2xl font-semibold">Rp. 45.000</h6>
              <div className="flex flex-row items-center gap-12">
                <button className="border-2 rounded-3xl py-2 px-4 border-primary bg-white hover:bg-primary group duration-300 lg:py-3 lg:px-6">
                  <a
                    href="https://wa.me/+6285179758586?text=Selamat%20datang%20di%20Rumah%20BUMN%20Balikpapan%2C%20ada%20yang%20bisa%20saya%20bantu%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-xl lg:font-medium"
                  >
                    <ImWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
                    <p>Beli Sekarang</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default PapiSnack;
