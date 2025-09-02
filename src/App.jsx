import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      {/* keep vertical space but no text */}
      <main className="min-h-[65vh]" />
      <Footer />
    </>
  );
}
