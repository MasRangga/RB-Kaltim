import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import CopyRight from "../../components/CopyRight";
import Navbar from "../../components/Navbar";
import Berita11JuniId1 from "../../assets/Berita11JuniId1.png";

const Berita11Juni = () => {
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
            <h1 className="text-xl md:text-3xl font-bold mt-4 text-slate-900">
              Rapat Koordinasi Rumah BUMN Kalimantan Timur 2024!
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-semibold my-5">
              11 Juni 2024
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <img
              className="rounded-xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
              src={Berita11JuniId1}
              alt="Berita11JuniId1"
            />
          </div>
          <div className="mt-4 text-dark-soft text-justify leading-relaxed mx-4 md:mx-8 lg:mx-44 space-y-4">
            <p>
              Acara ini merupakan sebuah pertemuan yang penuh semangat dan
              kerjasama, di mana para fasilitator dari berbagai Rumah BUMN di
              Kalimantan Timur berkumpul untuk berbagi pengalaman inspiratif,
              saling memotivasi, dan merencanakan program-program yang akan
              datang. Pertemuan ini dihadiri oleh fasilitator dari Rumah BUMN
              Samarinda, Berau, Kutai Kartanegara, dan Penajam. Setiap
              fasilitator memiliki kesempatan untuk menceritakan keberhasilan
              dan tantangan yang mereka hadapi, memberikan inspirasi kepada
              fasilitator lain melalui pengalaman pribadi, dan bersama-sama
              merumuskan strategi untuk meningkatkan kinerja dan dampak dari
              program-program Rumah BUMN di daerah masing-masing.
            </p>
            <p>
              Diskusi yang terjadi sangat interaktif dan produktif, dengan fokus
              pada kolaborasi untuk mencapai tujuan bersama dalam memperkuat
              peran Rumah BUMN sebagai pendorong utama pembangunan ekonomi
              lokal. Selain itu, sesi pertemuan ini juga dilengkapi dengan
              berbagai workshop dan pelatihan yang dirancang untuk meningkatkan
              kapasitas fasilitator, termasuk keterampilan kepemimpinan,
              manajemen proyek, dan penggunaan teknologi untuk mendukung
              operasional sehari-hari. Semua ini diharapkan dapat memperkuat
              sinergi dan efektivitas Rumah BUMN di Kalimantan Timur, sehingga
              dapat memberikan kontribusi yang lebih besar bagi komunitas dan
              daerah mereka.
            </p>
          </div>
        </article>
      </section>
      <CopyRight />
    </>
  );
};

export default Berita11Juni;
