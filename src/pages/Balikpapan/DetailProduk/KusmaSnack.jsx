import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { ImWhatsapp } from "react-icons/im";

const KusmaSnack = () => {
  const [images, setImages] = useState({
    img1: "https://setc.id/res/images/umkm/Jahe%202.jpg",
    img2: "https://cdn.ajnn.net/files/images/20221009-img-20221009-wa0003.jpg",
    img3: "https://awsimages.detik.net.id/visual/2021/09/01/produk-grandvilleabon-salah-satu-umkm-shopee-foto-ist-2_169.jpeg?w=650",
    img4: "https://setc.id/res/images/umkm/IMG_3022.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

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
              Detail Produk
            </h2>
          </div>
          {/* end judul */}
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center justify-between">
            <div className="flex flex-col gap-6 lg:w-1/2">
              <img
                src={activeImg}
                alt="Main Sneaker"
                className="w-96 h-80 object-cover rounded-xl mx-auto"
              />
              <div className="flex justify-center gap-4 h-24">
                {Object.values(images).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-24 h-24 rounded-md cursor-pointer object-cover mx-2"
                    onClick={() => setActiveImage(image)}
                  />
                ))}
              </div>
            </div>
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-1/2">
              <div>
                <span className="text-primary font-semibold">Paragraf</span>
                <h1 className="text-3xl font-bold">JUDUL H1</h1>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h6 className="text-2xl font-semibold">$199.00</h6>
              <div className="flex flex-row items-center gap-12">
                <button className="border-2 rounded-3xl py-2 px-4 border-primary bg-white hover:bg-primary group duration-300 lg:py-3 lg:px-6">
                  <a
                    // href="https://wa.me/6285346901814"
                    target="_blank"
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
    </div>
  );
};

export default KusmaSnack;
