import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import CopyRight from "../../../components/CopyRight";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import KerupukUdangBerau from "../../../assets/Berau/KerupukUdangBerau.jpg";

const KerupukUdangBerau_Detail = () => {
  const [images, setImages] = useState({
    img1: KerupukUdangBerau,
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
              Rumah BUMN Berau
            </h1>
            <h2 className="text-blue-800 font-semibold text-5xl">
              Detail Produk
            </h2>
          </div>
          {/* end judul */}
          {/* Button Back */}
          <Link
            to="/beraukatalog"
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
                alt="zenvinmanjabuana"
                className="w-96 h-80 object-cover rounded-xl mx-auto"
              />
            </div>
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-1/2 lg:mr-20">
              <div>
                <span className="text-primary font-semibold">ZalDin</span>
                <h1 className="text-3xl font-bold">Kerupuk Udang</h1>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Kerupuk udang siap saji ini terbuat dari udang sungai segar yang
                ditangkap oleh nelayan lokal dari perairan Berau. Dipilih secara
                selektif, udang ini diolah bersama bahan-bahan berkualitas untuk
                menghasilkan kerupuk yang renyah dan gurih. Proses pembuatannya
                mencakup penggilingan udang segar
              </p>

              <p className="text-gray-700">
                {" "}
                <span className="font-semibold">Berat Bersih : </span> 100gr
              </p>
              <h6 className="text-2xl font-semibold">Rp. 25.000</h6>
              <div className="flex flex-row items-center gap-12">
                <button className="border-2 rounded-3xl py-2 px-4 border-primary bg-white hover:bg-primary group duration-300 lg:py-3 lg:px-6">
                  <a
                    href="https://wa.me/+6285245358853?text=Selamat%20datang%20di%20Rumah%20BUMN%20Berau%2C%20ada%20yang%20bisa%20saya%20bantu%3F"
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

export default KerupukUdangBerau_Detail;