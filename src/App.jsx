import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TentangPage from "./pages/TentangPage"
import InspirasiKarir from "./pages/InspirasiKarir"

import Balikpapan from "./pages/Balikpapan/Balikpapan"
import Samarinda from "./pages/Samarinda/Samarinda"
import Kukar from "./pages/Kukar/Kukar"
import Penajam from "./pages/Penajam/Penajam"
import Berau from "./pages/Berau/Berau"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/karir" element={<InspirasiKarir />} />
          <Route path="/balikpapankatalog" element={<Balikpapan />} />
          <Route path="/samarindakatalog" element={<Samarinda />} />
          <Route path="/penajamkatalog" element={<Kukar />} />
          <Route path="/kukarkatalog" element={<Penajam />} />
          <Route path="/beraukatalog" element={<Berau />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
