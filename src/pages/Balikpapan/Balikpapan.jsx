import React from 'react'
import Navbar from '../../components/Navbar';

import Produk1 from "../../assets/Balikpapan/Produk1.jpg";
import KembangGoyang from "../../assets/Balikpapan/KembangGoyang.jpg";
import Pikkong from "../../assets/Balikpapan/Pikkong.jpg";
import KripikPare from "../../assets/Balikpapan/KripikPare.jpg";
import IniBrownies from "../../assets/Balikpapan/IniBrownies.jpg";
import JaheKoe from "../../assets/Balikpapan/JaheKoe.jpg";
import KusmaSnack from "../../assets/Balikpapan/KusmaSnack.jpeg";
import Kriwang from "../../assets/Balikpapan/Kriwang.jpg";
import ZahraCookies from "../../assets/Balikpapan/ZahraCookies.jpg";
import Oshien from "../../assets/Balikpapan/Oshien.jpg";
import Bananavi from "../../assets/Balikpapan/Bananavi.jpg";
import StikNaga from "../../assets/Balikpapan/StikNaga.jpg";
import Boolena from "../../assets/Balikpapan/Boolena.jpg";
import Jamune from "../../assets/Balikpapan/Jamune.jpg";
import CimiKeju from "../../assets/Balikpapan/CimiKeju.jpeg";
import Chacaos from "../../assets/Balikpapan/Chacaos.jpeg";
import Bagelan from "../../assets/Balikpapan/Bagelan.jpg";
import BlackGartic from "../../assets/Balikpapan/BlackGartic.png";


import CopyRight from '../../components/CopyRight';

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
            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Produk1}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Mucrova Kopi
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Mangrove Original
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 35.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
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
                  src={KembangGoyang}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Linda Zizha
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Kembang Goyang
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 17.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
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
                  src={Pikkong}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">Pikkong</p>
                <p className="font-light text-2xl text-gray-800">
                  Keripik Singkong Pedas
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 17.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
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
                  src={KripikPare}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Papi Snack
                </p>
                <p className="font-light text-2xl text-gray-800">Kripik Pare</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 25.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
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
                  src={IniBrownies}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  RirTri Kueku
                </p>
                <p className="font-light text-2xl text-gray-800">IniBrownise</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk6 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={JaheKoe}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Imroatun Norah
                </p>
                <p className="font-light text-2xl text-gray-800">Jahe Koe</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk7 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Produk1}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Mucrova Kopi
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Mangrove Latte
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 35.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk8 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={KusmaSnack}
                  alt="KusmaSnack"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Kusuma Snack
                </p>
                <p className="font-light text-2xl text-gray-800">Kripik Pare</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Kriwang}
                  alt="Kriwang"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Edrusya Snack
                </p>
                <p className="font-light text-2xl text-gray-800">Kriwang</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={ZahraCookies}
                  alt="ZahraCookies"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Zahra Cookies
                </p>
                <p className="font-light text-2xl text-gray-800">Cookies</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Oshien}
                  alt="Oshien"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Sien Pongoh
                </p>
                <p className="font-light text-2xl text-gray-800">Oshien</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Produk1}
                  alt="produk1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Mucrova Kopi
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Mangrove Drink
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 12.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Bananavi}
                  alt="Bananavi"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">DadoSatro</p>
                <p className="font-light text-2xl text-gray-800">Bananavi</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={StikNaga}
                  alt="StikNaga"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Yenny Chulaila
                </p>
                <p className="font-light text-2xl text-gray-800">Stik Naga</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Chacaos}
                  alt="Chacaos"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Chacaos Id Magrove
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Stik Brownies
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={CimiKeju}
                  alt="CimiKeju"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Thalita Bakery
                </p>
                <p className="font-light text-2xl text-gray-800">Cimi Keju</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Boolena}
                  alt="Boolena"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">Hasera Kitchen</p>
                <p className="font-light text-2xl text-gray-800">
                  Boolena Balikpapan
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Jamune}
                  alt="Jamune"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">Jamune Mba Putri</p>
                <p className="font-light text-2xl text-gray-800">Kunyit Asam</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={Bagelan}
                  alt="Bagelan"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">Bagelen Skripsi</p>
                <p className="font-light text-2xl text-gray-800">Roti Sisir</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>

            {/* Produk1 */}
            <div className="border border-gray-400 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm">
              {/* Gambar Produk */}
              <div className="bg-slate-200 p-4 flex justify-center rounded-2xl">
                <img
                  src={BlackGartic}
                  alt="BlackGartic"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">Nikimie</p>
                <p className="font-light text-2xl text-gray-800">Black Gartic</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. -</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="" className="w-full inline-block">
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-300">
                    Lihat Detail
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* end produk */}
          <CopyRight />
        </div>
      </div>
    </div>
  );
}

export default Balikpapan
