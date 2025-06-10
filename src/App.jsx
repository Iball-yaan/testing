import { Routes, Route} from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FaqPage from "./pages/FaqPage";
import SliderPage from "./pages/SliderPage"
import SellPage from "./pages/SellPage";
function App() {
  return <div>
    <NavbarComponent />
    <SliderPage />
    <SellPage />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/testimonial" Component={TestimonialPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/syaratketen" Component={SyaratKetenPage} />
    </Routes>


    <FooterComponent />
  </div>
}
  export default App;
