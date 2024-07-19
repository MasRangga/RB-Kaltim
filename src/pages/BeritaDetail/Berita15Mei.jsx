import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import CopyRight from "../../components/CopyRight";
import Navbar from "../../components/Navbar";
import Berita3 from "../../assets/Berita3.png"

const Berita15Mei = () => {
  return (
    <>
      <Navbar />
      <section className=" pb-10 pt-32 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        {/* Judul */}
        <div className="flex flex-col mx-5 mb-10">
          <h1 className="text-primary font-light text-2xl">
            Rumah BUMN Balikpapan
          </h1>
          <h2 className="text-blue-800 font-semibold text-5xl">
            Detail Berita
          </h2>
        </div>
        {/* end judul */}
        {/* Button Back */}
        <Link
          to="/berita"
          className=" flex items-center gap-2 ml-6 hover:underline hover:scale-105 duration-300 w-1/4"
        >
          <MdKeyboardBackspace className="w-6 h-6" />
          <p className="text-base font-medium">Kembali</p>
        </Link>
        {/* End Button Back */}
        <article className="flex-1">
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-4 text-slate-900">
              Dukung UMKM Naik Kelas, Rumah BUMN Balikpapan Gelar Sosialisasi
              Pengembangan Usaha
            </h1>
            <p className="text-gray-500 text-xl font-semibold my-5">
              15 Mei 2024
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <img
              className="rounded-xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
              src={Berita3}
              alt="Berita3"
            />
          </div>
          <div className="mt-4 text-dark-soft text-justify leading-relaxed mx-4 md:mx-8 lg:mx-44 space-y-4">
            <p>
              <span className="font-bold">Kaltimtoday.co, Balikpapan - </span>{" "}
              Rumah BUMN Balikpapan yang dikelola oleh Pertamina senantiasa
              mendukung dan berusaha mendorong pengembangan usaha bagi para
              pelaku UMKM di Balikpapan agar naik kelas.
            </p>
            <p>
              Berlandaskan pada semangat ini, Rumah BUMN Balikpapan
              berkolaborasi dengan dengan SMEPP Pertamina menggelar Sosialisasi
              Pengembangan Usaha Untuk UMKM, di Rumah BUMN Balikpapan pada Rabu
              (15/05). Kegiatan ini diikuti oleh 25 UMKM di Balikpapan.
            </p>
            <p>
              Terselenggaranya kegiatan ini tidak lepas dari dukung CEO dan CFO
              Rumah BUMN Kalimantan Timur. Hitler Sijabat selaku CEO Rumah BUMN
              Kalimantan Timur dalam sambutannya sangat mengapresiasi kegiatan
              sosialisasi ini.
            </p>
            <p>
              “Kegiatan sosialisasi ini menjadi bentuk komitmen Rumah BUMN untuk
              mendorong UMKM agar naik kelas sebagai salah satu amanat dari
              Kementerian BUMN dan Pertamina,” ujarnya.
            </p>
            <p>
              Hitler juga berharap kegiatan ini dapat membawa dampak positif dan
              memberi semangat bagi para UMKM untuk terus meningkatkan usahanya.
            </p>
            <p>
              “Saya berharap kegiatan ini dapat memompa semangat baru bagi
              seluruh UMKM yang hadir agar terus tumbuh dan mengembangkan
              usahanya,” ucapnya.
            </p>
            <p>
              Dukungan lain juga datang dari CFO Rumah BUMN Kalimantan Timur,
              Rachmat Wahid Harahap. Dirinya menyambut baik kerja sama yang
              dilakukan Rumah BUMN Balikpapan dengan SMEPP Pertamina.
            </p>
            <p>
              “Kami mengucapkan terima kasih kepada SMEPP Pertamina yang telah
              berkolaborasi dengan Rumah BUMN Balikpapan untuk mengadakan
              kegiatan positif ini, semoga sosialisasi ini dapat membantu UMKM
              untuk terus mengembangkan usahanya,” ungkapnya.
            </p>
            <p>
              Dalam kegiatan sosialisasi kali ini,{" "}
              <span className="font-bold"> Rumah BUMN Balikpapan </span>
              menghadirkan Owner Roti Gembong Kota Raja, yaitu Mukhlas Nasib dan
              General Manager Roti Gembong Kota Raja, yaitu Faried Manaf atau
              yang dikenal dengan Coach Farid untuk menjadi pembicara.
            </p>
            <p>
              Mukhlas dan Coach Farid berbagi pengalamannya selama menjalankan
              bisnis Roti Gembong Kota Raja sejak 2017, termasuk tujuan utama
              mereka menjalankan usaha tersebut.
            </p>
            <p>
              “Bangun usaha itu jangan hanya untuk diri sendiri, tapi juga harus
              memberdayakan sekitar kita,” Ujar Coach Faried
            </p>
            <p>
              Owner Roti Gembong Kota Raja juga menyebut noble purpose dari
              pembuatan usaha ini diantaranya untuk membangun 1000 masjid, dan
              memberdayakan 10.000 anak yatim.
            </p>
            <p>
              Pada sosialisasi ini, Mukhlas dan Coach Farid juga membagikan
              pengalaman jatuh bangun mereka selama menjalankan bisnis Roti
              Gembong Kota Raja tersebut.
            </p>
            <p>
              “Pada 2018, kami berhasil membuka 50 outlet yang tersebar di
              berbagai wilayah Indonesia. Namun sejak pandemi Covid-19 banyak
              outlet yang collapse dan akhirnya kini tersisa 10 outlet,” ungkap
              Mukhlas
            </p>
            <p>
              Dirinya menyebut saat ini Roti Gembong terus mengevaluasi kinerja
              dan sedang berusaha untuk bangkit kembali.
            </p>
            <p>
              Semangat itu juga Mukhlas dan Coach Farid tularkan kepada para
              pelaku UMKM yang hadir. Keduanya juga membagikan strategi NAIK
              KELAS yang harus diikuti oleh UMKM.
            </p>
            <p>
              Strategi NAIK KELAS Roti Gembong Kota Raja, di antaranya: Naikkan
              omzet, Amankan financial, Indahkan pelayanan, Kuatkan Sumber Daya
              Manusia (SDM), Kaji kebutuhan market, Efisiensikan pengeluaran,
              Luaskan jangkauan pasar, Andalkan diri sendiri, Selesaikan setiap
              masalah jangan ditunda.
            </p>
            <p>
                Mukhlas dan Coach Farid berharap melalui kegiatan ini para UMKM dapat terpacu semangatnya untuk terus meningkatkan kualitas usahanya melalui strategi NAIK KELAS tersebut.
            </p>
          </div>
        </article>
      </section>
      <CopyRight />
    </>
  );
};

export default Berita15Mei;
