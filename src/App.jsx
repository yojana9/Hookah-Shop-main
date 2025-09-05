// src/App.jsx
import Navbar from "@/components/organisms/Navbar";

import Newsletter from "@/components/organisms/Newsletter";
import Footer from "@/components/organisms/Footer";
import ProductCard from "./components/atoms/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <ProductCard />
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
