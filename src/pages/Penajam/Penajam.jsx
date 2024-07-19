import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight from "../../components/CopyRight";

import ProdukKosong from "../../assets/ProdukKosong.svg";

const Penajam = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-32">
        <div className="flex flex-col gap-10">
          {/* Judul */}
          <div className="flex flex-col mx-5">
            <h1 className="text-primary font-light text-2xl">
              Rumah BUMN Penajam Paser Utara
            </h1>
            <h2 className="text-blue-800 font-semibold text-5xl">
              Produk UMKM
            </h2>
            <p className="text-base font-light text-slate-700 lg:text-lg">
              Produk UMKM Unggulan di Rumah BUMN Penajam Paser Utara
            </p>
          </div>
          {/* end judul */}
          <div className="flex flex-col items-center">
            <img
              src={ProdukKosong}
              alt="Produk Kosong"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
            <h3 className="text-xl text-center font-semibold mt-4">
              Maaf, tidak ada produk UMKM tersedia saat ini
            </h3>
            <p className="text-base font-light text-slate-700 lg:text-lg mt-2">
              Harap periksa kembali di lain waktu.
            </p>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
};

export default Penajam;
