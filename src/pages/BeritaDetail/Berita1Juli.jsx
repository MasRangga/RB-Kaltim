import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import CopyRight from "../../components/CopyRight";
import Navbar from "../../components/Navbar";
import Berita2 from "../../assets/Berita2.png"

const Berita1Juli = () => {
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
              Jalin Sinergitas, Rumah BUMN Balikpapan dan Otorita IKN Mengadakan
              Kegiatan Diskusi Pengembangan Masyarakat
            </h1>
            <p className="text-gray-500 text-xl font-semibold my-5">
              1 Juli 2024
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <img
              className="rounded-xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
              src={Berita2}
              alt="Berita2"
            />
          </div>
          <div className="mt-4 text-dark-soft text-justify leading-relaxed mx-4 md:mx-8 lg:mx-44 space-y-4">
            <p>
              <span className="font-bold">Kaltimtoday.co, Balikpapan - </span>{" "}
              CEO Rumah BUMN Balikpapan, Hitler Sijabat beserta tim melakukan
              kunjungan kerja ke kantor Otorita Ibu Kota Nusantara (IKN) di
              Jalan Mulawarman, RT.5, Kelurahan Manggar, Balikpapan Timur pada
              Senin (01/07).
            </p>
            <p>
              Tujuan kunjungan tersebut untuk menjalin silaturahmi dan membangun
              sinergitas antar instansi, khususnya antara Rumah BUMN Balikpapan
              dengan Otorita Ibu Kota Nusantara.
            </p>
            <p>
              “Tujuan kunjungan kami kesini ingin bersinergi dengan tim otorita
              IKN khususnya tim di bidang pemberdayaan masyarakat dan UMKM,”
              ucap Hitler.
            </p>
            <p>
              Direktur Pemberdayaan Masyarakat, Conrita Ermanto menyambut baik
              diskusi dengan Rumah BUMN Balikpapan beserta tim.
            </p>
            <p>
              “Terima kasih atas kunjungan hari ini. Kami menyambut baik diskusi
              ini dan berharap bisa terjalin sinergitas dan koordinasi antara
              Rumah BUMN dengan Otorita IKN,” ujar Conrita
            </p>
            <p>
              Conrita juga menjelaskan fokus kerja Direktorat Pemberdayaan
              Masyarakat Otorita IKN saat ini mencakup peningkatan Sumber Daya
              Manusia (SDM) ketenagakerjaan untuk 53 desa kelurahan di Penajam
              Paser Utara (PPU) dan Kutai Kartanegara. Kemudian, ada kegiatan
              pendampingan dan pembinaan untuk UMKM, seperti pendampingan
              perizinan usaha dan meningkatkan literasi digital bagi UMKM
              binaan.
            </p>
            <p>
              Direktorat Pemberdayaan Masyarakat Otorita IKN saat ini sudah
              memiliki 649 UMKM binaan yang tersebar di berbagai daerah IKN,
              namun banyak dari UMKM tersebut belum mendapatkan pembinaan yang
              maksimal.
            </p>
            <p>
              CEO Rumah BUMN Balikpapan menyatakan kesiapan untuk membantu
              pengembangan 649 UMKM binaan Otorita IKN, mulai dari pendampingan
              perizinan untuk usaha, kemasan, hingga pemasaran.
            </p>
            <p>
              “Kami siap membantu UMKM binaan otorita IKN, misal dengan
              mengadakan pelatihan dan pendampingan,” ujar Hitler.
            </p>
          </div>
        </article>
      </section>
      <CopyRight />
    </>
  );
};

export default Berita1Juli;
