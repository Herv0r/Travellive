import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./Pages/Index";
import HomePage from "./Pages/HomePage";
import ProfileConfig from "./Pages/ProfileConfig";
import Galery from "./Pages/Galery";
import ContactForm from "./Pages/ContactForm";
import NotFound from "./Pages/404Notfound";
import SimpleFooter from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/inicio" element={<HomePage />} />

          <Route path="/profile" element={<ProfileConfig />} />

          <Route path="/galeria" element={<Galery />} />

          <Route path="/contact" element={<ContactForm />} />

          <Route path="/404" element={<NotFound />} />
        </Routes>

        <SimpleFooter />
      </Router>
    </>
  );
}

export default App;
