
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Crisis from "@/components/Crisis";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Crisis />
      <Contact />
    </div>
  );
};

export default Index;
