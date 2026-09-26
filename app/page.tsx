import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Barberos from "./components/Barberos";
import Reservacion from "./components/Reservacion";
import Ubicacion from "./components/Ubicacion";
import Cortes from "./components/Cortes";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cortes />
      <Servicios />
      <Barberos />
      <Reservacion />
      <Ubicacion />
      <Footer />
    </main>
  );
}