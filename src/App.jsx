import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import Button from "./components/atoms/buttons";
import Header from "./components/atoms/header";
import Newsletter from "./components/organisms/Newsletter";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-[65vh] flex flex-col items-center justify-center gap-6">
        <Header text="Just Arrived" size="medium" />
        <Header text="Hookah 1.2" size="small" />

        <Button
          variant="primary"
          text="CHECK IT OUT"
          onClick={() => alert("Primary clicked!")}
        />
        <Button
          variant="secondary"
          text="I'M UNDER 21"
          onClick={() => alert("Secondary clicked!")}
        />
      </main>

      {/* CTA banner above the footer */}
      <div className="mt-10">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
}
