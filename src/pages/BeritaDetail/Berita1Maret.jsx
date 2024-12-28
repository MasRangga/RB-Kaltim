import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import CopyRight from "../../components/CopyRight";
import Navbar from "../../components/Navbar";
import Berita4 from "../../assets/Berita4.png"

const Berita1Maret = () => {
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
              PT KPI Bekali Wawasan Strategi Branding Produk Kepada Pelaku UMKM
              di Balikpapan
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-semibold my-5">
              1 Maret 2024
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <img
              className="rounded-xl w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3"
              src={Berita4}
              alt="Berita4"
            />
          </div>
          <div className="mt-4 text-dark-soft text-justify leading-relaxed mx-4 md:mx-8 lg:mx-44 space-y-4">
            <p>
              <span className="font-bold">metroikn, Balikpapan – </span>
              PT Kilang Pertamina Internasional (KPI) Unit Balikpapan menggelar
              Pelatihan Kemasan dan Strategi Branding untuk produk Usaha Mikro,
              Kecil dan Menengah (UMKM) di Rumah BUMN Balikpapan, Kamis
              (29/2/2024).
            </p>
            <p>
              Kegiatan ini merupakan kelanjutan dari kegiatan Sertifikasi
              Penyuluhan Keamanan Pangan bertajuk ‘UMKM Naik Kelas’ yang
              sebelumnya diselenggarakan bekerja sama dengan Rumah BUMN
              Kalimantan Timur (Kaltim).
            </p>
            <p>
              Kali ini, pelatihan diikuti 8 kelompok binaan PT KPI Unit
              Balikpapan di antaranya, kelompok Rawabening Margasari, Wasiat
              Baru Ilir, Wasiat Baru tengah, Wasiat Dewi Shinta Girimukti,
              Proklim Muara Rapak, Pelita Borneo Baru Tengah, Mario Jela
              Margasari, dan Petratonik Karang Joang. Kemudian juga UMKM Binaan
              Rumah BUMN serta pelaku usaha di wilayah ring 1 Perusahaan.
            </p>
            <p>
              Dalam kesempatan itu, CEO Rumah BUMN Kaltim, Hitler Sijabat,
              menyampaikan dukungan serta apresiasinya kepada para peserta.
            </p>
            <p>
              “Ini merupakan suatu bentuk kolaborasi yang baik antara PT KPI
              unit Balikpapan dengan Rumah BUMN. Ini adalah suatu bentuk
              kepedulian kami dengan para pelaku usaha yang ada di Balikpapapan.
              Semoga setelah hadir dari kegiatan ini, ibu-ibu sekalian dapat
              mengambil ilmu yg bermanfaat dan menghasilkan output yang baik dan
              berdampak pada produk masing-masing,” pesan Hitler.
            </p>
            <p>
              Kegiatan ini merupakan sebuah upaya mendukung pelaku UMKM di
              Balikpapan, khususnya binaan PT KPI. Selain itu, kegiatan ini juga
              merupakan sebuah tindak lanjut PT KPI Unit Balikpapan setelah
              melakukan beberapa kegiatan guna mendukung dan menaikkan kelas
              produk UMKM.
            </p>
            <p>
              Sebagai Informasi, PT KPI Unit Balikpapan sebelumnya telah
              melakukan Pelatihan dan Sertifikasi Penyuluhan Keamanan Pangan
              sebagai dukungan upaya legalisir Pangan Industri Rumah Tangga
              (PIRT). Kegiatan tersebut juga bekerja sama dengan Rumah BUMN
              serta melakukan sosialisasi pelatihan pembuatan produk turunan
              bersama dengan Politeknik Negeri Balikpapan.
            </p>
            <p>
              Pada pelatihan kali ini menghadirkan Dosen Program Studi Desain
              Komunikasi Visual Institut Teknologi Kalimantan (ITK) sebagai
              pemateri. Adapun materi yang berikan mengenai strategi branding
              bagi pelaku UMKM.
            </p>
          </div>
        </article>
      </section>
      <CopyRight />
    </>
  );
};

export default Berita1Maret;
