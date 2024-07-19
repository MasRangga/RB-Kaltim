import React from 'react'
import Navbar from "../../components/Navbar"
import CopyRight from "../../components/CopyRight"

// Gambar Produk
import ProdukRS1 from "../../assets/Samarinda/ProdukRS1.jpg"
import ProdukRS2 from "../../assets/Samarinda/ProdukRS2.jpg"
import ProdukRS3 from "../../assets/Samarinda/ProdukRS3.jpg";
import ProdukRS4 from "../../assets/Samarinda/ProdukRS4.jpg";
import ProdukRS5 from "../../assets/Samarinda/ProdukRS5.jpg";

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
            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={ProdukRS1}
                  alt="ProdukRS1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Rempah Sakti
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Teh Rempah Kemangi
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 60.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/tehrempahkemangi" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk2 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={ProdukRS2}
                  alt="ProdukRS2"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Rempah Sakti
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Teh Bawang Tiwai / Bawang Dayak
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 60.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/tehbawangdayak" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk3 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={ProdukRS3}
                  alt="ProdukRS3"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Rempah Sakti
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Teh Jahe Merah Rempah
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 60.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/tehjahemerah" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk4 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={ProdukRS4}
                  alt="ProdukRS4"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Rempah Sakti
                </p>
                <p className="font-light text-2xl text-gray-800">Teh Rosella</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 60.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/tehrosella" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk5 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={ProdukRS5}
                  alt="ProdukRS5"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Rempah Sakti
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Teh Daun Salam
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 25.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/tehdaunsalam" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
}

export default Samarinda
