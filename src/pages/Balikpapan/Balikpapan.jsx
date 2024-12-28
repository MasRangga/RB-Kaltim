import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight from "../../components/CopyRight";

// Importing images
import Produk1 from "../../assets/Balikpapan/Produk1.jpg";
import KembangGoyang1 from "../../assets/Balikpapan/KembangGoyang1.jpg";
import Pikkong1 from "../../assets/Balikpapan/Pikkong1.jpg";
import KripikPare from "../../assets/Balikpapan/KripikPare.jpg";
import IniBrownies1 from "../../assets/Balikpapan/IniBrownies1.jpg";
import JaheKoe1 from "../../assets/Balikpapan/JaheKoe1.jpg";
import KusmaSnack1 from "../../assets/Balikpapan/KusmaSnack1.jpeg";
import Kriwang1 from "../../assets/Balikpapan/Kriwang1.jpg";
import ZahraCookies from "../../assets/Balikpapan/ZahraCookies.jpg";
import Oshien1 from "../../assets/Balikpapan/Oshien1.jpg";
import Bananavi1 from "../../assets/Balikpapan/Bananavi1.jpg";
import StikNaga1 from "../../assets/Balikpapan/StikNaga1.jpg";
import Boolena1 from "../../assets/Balikpapan/Boolena1.jpg";
import Jamune from "../../assets/Balikpapan/Jamune.jpg";
import CimiKeju1 from "../../assets/Balikpapan/CimiKeju1.jpeg";
import Chacaos from "../../assets/Balikpapan/Chacaos.jpeg";
import Bagelan from "../../assets/Balikpapan/Bagelan.jpg";
import BlackGartic1 from "../../assets/Balikpapan/BlackGartic1.png";

// Product data array
const products = [
  {
    id: 1,
    name: "Mangrove Original",
    description: "Mucrova Kopi",
    price: "Rp. 35.000",
    image: Produk1,
    link: "/mucrovakopi",
  },
  {
    id: 2,
    name: "Kembang Goyang",
    description: "Linda Zizha",
    price: "Rp. 17.000",
    image: KembangGoyang1,
    link: "/kembanggoyang",
  },
  {
    id: 3,
    name: "Keripik Singkong Pedas",
    description: "Pikkong",
    price: "Rp. 17.000",
    image: Pikkong1,
    link: "/pikkong",
  },
  {
    id: 4,
    name: "Kripik Pare",
    description: "Papi Snack",
    price: "Rp. 25.000",
    image: KripikPare,
    link: "/papisnack",
  },
  {
    id: 5,
    name: "IniBrownise",
    description: "RirTri Kueku",
    price: "Rp. 18.000",
    image: IniBrownies1,
    link: "/inibrownies",
  },
  {
    id: 6,
    name: "Jahe Koe",
    description: "Imroatun Norah",
    price: "Rp. 30.000",
    image: JaheKoe1,
    link: "/jahekoe",
  },
  {
    id: 7,
    name: "Mangrove Latte",
    description: "Mucrova Kopi",
    price: "Rp. 35.000",
    image: Produk1,
    link: "/mucrovalatte",
  },
  {
    id: 8,
    name: "Kripik Pisang",
    description: "Kusuma Snack",
    price: "Rp. 25.000",
    image: KusmaSnack1,
    link: "/kusmasnack",
  },
  {
    id: 9,
    name: "Kriwang",
    description: "Edrusya Snack",
    price: "Rp. 13.000",
    image: Kriwang1,
    link: "/kriwang",
  },
  {
    id: 10,
    name: "Cookies",
    description: "Zahra Cookies",
    price: "Rp. 150.000",
    image: ZahraCookies,
    link: "/cookies",
  },
  {
    id: 11,
    name: "Oshien",
    description: "Sien Pongoh",
    price: "Rp. 18.000",
    image: Oshien1,
    link: "/oshien",
  },
  {
    id: 12,
    name: "Mangrove Drink",
    description: "Mucrova Kopi",
    price: "Rp. 12.000",
    image: Produk1,
    link: "/mucrovadrink",
  },
  {
    id: 13,
    name: "Bananavi",
    description: "DadoSatro",
    price: "Rp. 16.000",
    image: Bananavi1,
    link: "/bananavi",
  },
  {
    id: 14,
    name: "Stik Buah Naga",
    description: "Yenny Chulaila",
    price: "Rp. 20.000",
    image: StikNaga1,
    link: "/stiknaga",
  },
  {
    id: 15,
    name: "Stik Brownies",
    description: "Chacaos Id Magrove",
    price: "Rp. 35.000",
    image: Chacaos,
    link: "/stikbrownies",
  },
  {
    id: 16,
    name: "Cimi Keju",
    description: "Thalita Bakery",
    price: "Rp. 25.000",
    image: CimiKeju1,
    link: "/cimikeju",
  },
  {
    id: 17,
    name: "Boolena Balikpapan",
    description: "Hasera Kitchen",
    price: "Rp. 95.000",
    image: Boolena1,
    link: "/boolena",
  },
  {
    id: 18,
    name: "Kunyit Asam",
    description: "Jamune Mba Putri",
    price: "Rp. 20.000",
    image: Jamune,
    link: "/kunyitasam",
  },
  {
    id: 19,
    name: "Roti Sisir",
    description: "Bagelen Skripsi",
    price: "Rp. 45.000",
    image: Bagelan,
    link: "/rotisisir",
  },
  {
    id: 20,
    name: "Black Gartic",
    description: "Nikimie",
    price: "Rp. 125.000",
    image: BlackGartic1,
    link: "/blackgartic",
  },
];

const Balikpapan = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto pt-32">
        <div className="flex flex-col gap-10">
          {/* Judul */}
          <div className="flex flex-col mx-5">
            <h1 className="text-primary font-light text-2xl">
              Rumah BUMN Balikpapan
            </h1>
            <h2 className="text-blue-800 font-semibold text-5xl">
              Produk UMKM
            </h2>
            <p className="text-base font-light text-slate-700 lg:text-lg">
              Produk UMKM Unggulan di Rumah BUMN Balikpapan
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
    </div>
  );
};

export default Balikpapan;
