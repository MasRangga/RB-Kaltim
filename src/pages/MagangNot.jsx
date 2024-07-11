import React from 'react'
import MagangNotImage from "../assets/MagangNotImage.svg"

const MagangNot = () => {
  return (
    <>
      <section className="relative z-10 bg-blue-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <img src={MagangNotImage} alt="" />
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-slate-600 py-4">
                  Oops! Maaf, saat ini tidak ada lowongan magang yang tersedia
                </h4>
                <p className="mb-8 text-lg text-slate-600">
                  Harap periksa kembali di lain waktu.
                </p>
                <a
                  href="/"
                  className="inline-block rounded-lg border border-primary px-8 py-3 text-center text-base font-semibold text-slate-600 transition hover:bg-white hover:text-primary"
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-primary to-white"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-primary to-white"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-primary to-white"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-primary to-white"></div>
        </div>
      </section>
    </>
  );
}

export default MagangNot
