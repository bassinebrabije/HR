import Slider from "./slider/page";
import Hero from "./hero/page";
import Footer from "./footer";
import Cta from './cta/page';
import More from "./more/page";
import Resources from "./resources/page";
export default function Home() {
  return (
    <main className="pt-16 sm:pt-10 absolute inset-0 h-full w-full bg-transparent">
      {/* Fading Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e5faf52f] to-[rgba(229,250,245,0)]"></div>

      {/* Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#adadad2d_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      {/* Hero Content - Ensure Text is Visible */}
      <div className="relative z-10">
        <Hero />
        <Slider />
        <More />
        <Resources />
        <Cta />
        <Footer />
      </div>
    </main>



  );
}
