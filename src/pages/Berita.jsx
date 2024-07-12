import React from "react";
import Navbar from "../components/Navbar";
import BeritaKomponen from "../components/Berita/BeritaKomponen";
import Berita11JuniId1 from "../assets/Berita11JuniId1.png";

const Berita = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white pb-10 pt-36 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-medium text-primary">
                  Rumah BUMN Kalimantan Timur
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark text-blue-800 sm:text-4xl md:text-[40px]">
                  Berita
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Berikut Berita dari Rumah BUMN Kalimantan Timur
                </p>
              </div>
            </div>
          </div>

          <div className="mx-4 flex flex-wrap">
            <BeritaKomponen
              date="11 Juni, 2024"
              CardTitle="Rapat Koordinasi Rumah BUMN Kalimantan Timur 2024!"
              CardDescription="Keseruan dalam Rapat Koordinasi Rumah BUMN Kalimantan Timur 2024! Dilaksanakan di Rumah BUMN Balikpapan."
              Image={Berita11JuniId1}
              link="/berita:11Juni"
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Berita;
