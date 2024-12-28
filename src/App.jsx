import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TentangPage from "./pages/TentangPage";
import InspirasiKarir from "./pages/InspirasiKarir";
import MagangNot from "./pages/MagangNot";
import FasilitatorNot from "./pages/FasilitatorNot";
import Berita from "./pages/Berita";

import Balikpapan from "./pages/Balikpapan/Balikpapan";
import Samarinda from "./pages/Samarinda/Samarinda";
import Kukar from "./pages/Kukar/Kukar";
import Penajam from "./pages/Penajam/Penajam";
import Berau from "./pages/Berau/Berau";

import MucrovaKopi from "./pages/Balikpapan/DetailProduk/MucrovaKopi";
import Bananavi from "./pages/Balikpapan/DetailProduk/Bananavi";
import BlackGartic from "./pages/Balikpapan/DetailProduk/BlackGartic";
import Boolena from "./pages/Balikpapan/DetailProduk/Boolena";
import CimiKeju from "./pages/Balikpapan/DetailProduk/CimiKeju";
import Cookies from "./pages/Balikpapan/DetailProduk/Cookies";
import IniBrownies from "./pages/Balikpapan/DetailProduk/IniBrownies";
import JaheKoe from "./pages/Balikpapan/DetailProduk/JaheKoe";
import KembangGoyang from "./pages/Balikpapan/DetailProduk/KembangGoyang";
import Kriwang from "./pages/Balikpapan/DetailProduk/Kriwang";
import KunyitAsam from "./pages/Balikpapan/DetailProduk/KunyitAsam";
import KusmaSnack from "./pages/Balikpapan/DetailProduk/KusmaSnack";
import MucrovaDrink from "./pages/Balikpapan/DetailProduk/MucrovaDrink";
import MucrovaLatte from "./pages/Balikpapan/DetailProduk/MucrovaLatte";
import Oshien from "./pages/Balikpapan/DetailProduk/Oshien";
import PapiSnack from "./pages/Balikpapan/DetailProduk/PapiSnack";
import Pikkong from "./pages/Balikpapan/DetailProduk/Pikkong";
import RotiSisir from "./pages/Balikpapan/DetailProduk/RotiSisir";
import StikBrownies from "./pages/Balikpapan/DetailProduk/StikBrownies";
import StikNaga from "./pages/Balikpapan/DetailProduk/StikNaga";

import Berita11Juni from "./pages/BeritaDetail/Berita11Juni";
import Berita1Juli from "./pages/BeritaDetail/Berita1Juli";
import Berita15Mei from "./pages/BeritaDetail/Berita15Mei";
import Berita1Maret from "./pages/BeritaDetail/Berita1Maret";

import TehBawangDayak from "./pages/Samarinda/DetailProduk/TehBawangDayak";
import TehDaunSalam from "./pages/Samarinda/DetailProduk/TehDaunSalam";
import TehJaheMerah from "./pages/Samarinda/DetailProduk/TehJaheMerah";
import TehRempahKemangi from "./pages/Samarinda/DetailProduk/TehRempahKemangi";
import TehRosella from "./pages/Samarinda/DetailProduk/TehRosella";

// DetailBerau
import ZenvinManjabuanaBerau_Detail from "./pages/Berau/DetailProduk/ZenvinManjabuanaBerau_Detail";
import ZenvinCurmanggoBerau_Detail from "./pages/Berau/DetailProduk/ZenvinCurmanggoBerau_Detail";
import ZenvinLangsingKoeBerau_Detail from "./pages/Berau/DetailProduk/ZenvinLangsingKoeBerau_Detail";
import ZenvinWangiResikBerau_Detail from "./pages/Berau/DetailProduk/ZenvinWangiResikBerau_Detail";
import SambalIkanBerau_Detail from "./pages/Berau/DetailProduk/SambalIkanBerau_Detail";
import KerupukUdangBerau_Detail from "./pages/Berau/DetailProduk/KerupukUdangBerau_Detail";
import BrowniesKrispyBerau_Detail from "./pages/Berau/DetailProduk/BrowniesKrispyBerau_Detail";

// DetailPPU

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentangkami" element={<TentangPage />} />
          <Route path="/karir" element={<InspirasiKarir />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita:11Juni" element={<Berita11Juni />} />
          <Route path="/berita:1Juli" element={<Berita1Juli />} />
          <Route path="/berita:15Mei" element={<Berita15Mei />} />
          <Route path="/berita:1Maret" element={<Berita1Maret />} />
          <Route path="/tidakadamagang" element={<MagangNot />} />
          <Route path="/tidakadalowongan" element={<FasilitatorNot />} />
          <Route path="/balikpapankatalog" element={<Balikpapan />} />
          <Route path="/samarindakatalog" element={<Samarinda />} />
          <Route path="/kukarkatalog" element={<Kukar />} />
          <Route path="/penajamkatalog" element={<Penajam />} />
          <Route path="/beraukatalog" element={<Berau />} />
          {/* BalikpapanKatalog */}
          <Route path="/mucrovakopi" element={<MucrovaKopi />} />
          <Route path="/bananavi" element={<Bananavi />} />
          <Route path="/blackgartic" element={<BlackGartic />} />
          <Route path="/boolena" element={<Boolena />} />
          <Route path="/cimikeju" element={<CimiKeju />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/inibrownies" element={<IniBrownies />} />
          <Route path="/jahekoe" element={<JaheKoe />} />
          <Route path="/kembanggoyang" element={<KembangGoyang />} />
          <Route path="/kriwang" element={<Kriwang />} />
          <Route path="/kunyitasam" element={<KunyitAsam />} />
          <Route path="/kusmasnack" element={<KusmaSnack />} />
          <Route path="/mucrovadrink" element={<MucrovaDrink />} />
          <Route path="/mucrovalatte" element={<MucrovaLatte />} />
          <Route path="/oshien" element={<Oshien />} />
          <Route path="/papisnack" element={<PapiSnack />} />
          <Route path="/pikkong" element={<Pikkong />} />
          <Route path="/rotisisir" element={<RotiSisir />} />
          <Route path="/stikbrownies" element={<StikBrownies />} />
          <Route path="/stiknaga" element={<StikNaga />} />
          {/* SamarindaKatalog */}
          <Route path="/tehbawangdayak" element={<TehBawangDayak />} />
          <Route path="/tehdaunsalam" element={<TehDaunSalam />} />
          <Route path="/tehjahemerah" element={<TehJaheMerah />} />
          <Route path="/tehrempahkemangi" element={<TehRempahKemangi />} />
          <Route path="/tehrosella" element={<TehRosella />} />
          {/* BerauKatalog */}
          <Route
            path="/zenvinmanjabuana"
            element={<ZenvinManjabuanaBerau_Detail />}
          />
          <Route
            path="/zenvincurmanggo"
            element={<ZenvinCurmanggoBerau_Detail />}
          />
          <Route
            path="/zenvinlangsingkoe"
            element={<ZenvinLangsingKoeBerau_Detail />}
          />
          <Route
            path="/zenvinwangiresik"
            element={<ZenvinWangiResikBerau_Detail />}
          />
          <Route path="/sambalikan" element={<SambalIkanBerau_Detail />} />
          <Route path="/kerupukudang" element={<KerupukUdangBerau_Detail />} />
          <Route
            path="/brownieskrispy"
            element={<BrowniesKrispyBerau_Detail />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
