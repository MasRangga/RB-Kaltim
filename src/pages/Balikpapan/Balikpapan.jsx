import React from 'react'
import Navbar from '../../components/Navbar';

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
                <a href="/mucrovakopi" className="w-full inline-block">
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
                  src={KembangGoyang1}
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
                <a href="/kembanggoyang" className="w-full inline-block">
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
                  src={Pikkong1}
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
                <a href="/pikkong" className="w-full inline-block">
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
                <a href="/papisnack" className="w-full inline-block">
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
                  src={IniBrownies1}
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
                <p className="font-black text-xl">Rp. 18.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/inibrownies" className="w-full inline-block">
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
                  src={JaheKoe1}
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
                <p className="font-black text-xl">Rp. 30.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/jahekoe" className="w-full inline-block">
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
                <a href="/mucrovalatte" className="w-full inline-block">
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
                  src={KusmaSnack1}
                  alt="KusmaSnack1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Kusuma Snack
                </p>
                <p className="font-light text-2xl text-gray-800">Kripik Pisang</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 25.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/kusmasnack" className="w-full inline-block">
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
                  src={Kriwang1}
                  alt="Kriwang1"
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
                <p className="font-black text-xl">Rp. 13.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/kriwang" className="w-full inline-block">
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
                <p className="font-black text-xl">Rp. 150.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/cookies" className="w-full inline-block">
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
                  src={Oshien1}
                  alt="Oshien1"
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
                <p className="font-black text-xl">Rp. 18.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/oshien" className="w-full inline-block">
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
                <a href="/mucrovadrink" className="w-full inline-block">
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
                  src={Bananavi1}
                  alt="Bananavi1"
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
                <p className="font-black text-xl">Rp. 16.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/bananavi" className="w-full inline-block">
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
                  src={StikNaga1}
                  alt="StikNaga1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Yenny Chulaila
                </p>
                <p className="font-light text-2xl text-gray-800">Stik Buah Naga</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 20.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/stiknaga" className="w-full inline-block">
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
                <p className="font-black text-xl">Rp. 35.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/stikbrownies" className="w-full inline-block">
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
                  src={CimiKeju1}
                  alt="CimiKeju1"
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
                <p className="font-black text-xl">Rp. 25.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/cimikeju" className="w-full inline-block">
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
                  src={Boolena1}
                  alt="Boolena1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">
                  Hasera Kitchen
                </p>
                <p className="font-light text-2xl text-gray-800">
                  Boolena Balikpapan
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 95.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/boolena" className="w-full inline-block">
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
                <p className="font-light text-slate-500 text-base">
                  Jamune Mba Putri
                </p>
                <p className="font-light text-2xl text-gray-800">Kunyit Asam</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 20.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/kunyitasam" className="w-full inline-block">
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
                <p className="font-light text-slate-500 text-base">
                  Bagelen Skripsi
                </p>
                <p className="font-light text-2xl text-gray-800">Roti Sisir</p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 45.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/rotisisir" className="w-full inline-block">
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
                  src={BlackGartic1}
                  alt="BlackGartic1"
                  className="h-48 w-full object-cover rounded-xl"
                />
              </div>
              {/* Judul */}
              <div className="mt-3">
                <p className="font-light text-slate-500 text-base">Nikimie</p>
                <p className="font-light text-2xl text-gray-800">
                  Black Gartic
                </p>
              </div>
              {/* Harga */}
              <div className="mt-3">
                <p className="font-black text-xl">Rp. 125.000</p>
              </div>
              {/* Tombol */}
              <div className="mt-3 mb-5">
                <a href="/blackgartic" className="w-full inline-block">
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
