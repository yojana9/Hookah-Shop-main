import Navbar from "@/components/organisms/Navbar";
import Newsletter from "@/components/organisms/Newsletter";
import Footer from "@/components/organisms/Footer";
import ProductCard from "@/components/atoms/card";
import HeroSection from "@/components/HeroSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
    
      <Navbar />

 
      <main className="flex-1">
      
        <HeroSection
          image="/hero.png?v=2"              
          title="Windpipe 1.2 is live."
          subItems={["Live boldly!"]}
          subtitle="Smoother hits, sleek modern design."
          ctaText="ORDER NOW"
          onCtaClick={() => console.log("Order Now clicked")}
        
        />

       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <ProductCard />
        </div>
      </main>

   
      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <Newsletter />
        </div>
      </section>


      <Footer />
    </div>
  );
}
