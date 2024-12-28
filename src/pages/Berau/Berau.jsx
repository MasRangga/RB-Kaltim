import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight from "../../components/CopyRight";

// Gambar Produk
import BrowniesKrispyBerau from "../../assets/Berau/BrowniesKrispyBerau.jpg";
import KerupukUdangBerau from "../../assets/Berau/KerupukUdangBerau.jpg";
import ZenvinWangiResikBerau from "../../assets/Berau/ZenvinWangiResikBerau.jpg";
import SambalIkanBerau from "../../assets/Berau/SambalIkanBerau.jpg";
import ZevinLangsingokeBerau from "../../assets/Berau/ZevinLangsingokeBerau.jpg";
import ZenvinCurmanggoBerau from "../../assets/Berau/ZenvinCurmanggoBerau.jpg";
import ZenvinManjabuanaBerau from "../../assets/Berau/ZenvinManjabuanaBerau.jpg";

// Data produk
const products = [
  {
    id: 1,
    name: "Brownies Krispy Coklat",
    description: "ZalDin",
    price: "Rp. 25.000",
    image: BrowniesKrispyBerau,
    link: "/brownieskrispy",
  },
  {
    id: 2,
    name: "Kerupuk Udang",
    description: "ZalDin",
    price: "Rp. 25.000",
    image: KerupukUdangBerau,
    link: "/kerupukudang",
  },
  {
    id: 3,
    name: "Zenvin Wangi Resik",
    description: "Zenvin",
    price: "Rp. 35.000",
    image: ZenvinWangiResikBerau,
    link: "/zenvinwangiresik",
  },
  {
    id: 4,
    name: "Sambal Ikan",
    description: "ZalDin",
    price: "Rp. 30.000",
    image: SambalIkanBerau,
    link: "/sambalikan",
  },
  {
    id: 5,
    name: "Zevin Langsingkoe",
    description: "Zenvin",
    price: "Rp. 50.000",
    image: ZevinLangsingokeBerau,
    link: "/zenvinlangsingkoe",
  },
  {
    id: 6,
    name: "Zenvin Curmanggo ",
    description: "Zenvin",
    price: "Rp. 50.000",
    image: ZenvinCurmanggoBerau,
    link: "/zenvincurmanggo",
  },
  {
    id: 7,
    name: "Zenvin Manjabuana ",
    description: "Zenvin",
    price: "Rp. 50.000",
    image: ZenvinManjabuanaBerau,
    link: "/zenvinmanjabuana",
  },
];

const Berau = () => {
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
              Produk UMKM
            </h2>
            <p className="text-base font-light text-slate-700 lg:text-lg">
              Produk UMKM Unggulan di Rumah BUMN Berau
            </p>
          </div>
          {/* end judul */}

          {/* Produk */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm"
              >
                {/* Gambar Produk */}
                <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover rounded-xl"
                  />
                </div>
                {/* Judul */}
                <div className="mt-3">
                  <p className="font-light text-slate-500 text-base">
                    {product.description}
                  </p>
                  <p className="font-light text-2xl text-gray-800">
                    {product.name}
                  </p>
                </div>
                {/* Harga */}
                <div className="mt-3">
                  <p className="font-black text-xl">{product.price}</p>
                </div>
                {/* Tombol */}
                <div className="mt-3 mb-5">
                  <a href={product.link} className="w-full inline-block">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                      Lihat Detail
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* end produk */}
          <CopyRight />
        </div>
      </div>
    </>
  );
};

export default Berau;
