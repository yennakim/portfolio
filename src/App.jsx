import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import '@fontsource/lato';


export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}
