import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight from "../../components/CopyRight";

// Gambar Produk
import ProdukRS1 from "../../assets/Samarinda/ProdukRS1.jpg";
import ProdukRS2 from "../../assets/Samarinda/ProdukRS2.jpg";
import ProdukRS3 from "../../assets/Samarinda/ProdukRS3.jpg";
import ProdukRS4 from "../../assets/Samarinda/ProdukRS4.jpg";
import ProdukRS5 from "../../assets/Samarinda/ProdukRS5.jpg";

// Data produk
const products = [
  {
    id: 1,
    name: "Teh Rempah Kemangi",
    description: "Rempah Sakti",
    price: "Rp. 60.000",
    image: ProdukRS1,
    link: "/tehrempahkemangi",
  },
  {
    id: 2,
    name: "Teh Bawang Tiwai / Bawang Dayak",
    description: "Rempah Sakti",
    price: "Rp. 60.000",
    image: ProdukRS2,
    link: "/tehbawangdayak",
  },
  {
    id: 3,
    name: "Teh Jahe Merah Rempah",
    description: "Rempah Sakti",
    price: "Rp. 60.000",
    image: ProdukRS3,
    link: "/tehjahemerah",
  },
  {
    id: 4,
    name: "Teh Rosella",
    description: "Rempah Sakti",
    price: "Rp. 60.000",
    image: ProdukRS4,
    link: "/tehrosella",
  },
  {
    id: 5,
    name: "Teh Daun Salam",
    description: "Rempah Sakti",
    price: "Rp. 25.000",
    image: ProdukRS5,
    link: "/tehdaunsalam",
  },
];

const Samarinda = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-32">
        <div className="flex flex-col gap-10">
          {/* Judul */}
          <div className="flex flex-col mx-5">
            <h1 className="text-primary font-light text-2xl">
              Rumah BUMN Samarinda
            </h1>
            <h2 className="text-blue-800 font-semibold text-5xl">
              Produk UMKM
            </h2>
            <p className="text-base font-light text-slate-700 lg:text-lg">
              Produk UMKM Unggulan di Rumah BUMN Samarinda
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

export default Samarinda;
