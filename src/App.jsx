import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GradientDrip from "./components/GradientDrip";
import AvatarContainer from "./components/AvatarContainer";
import Quote from "./components/Quote";
import CarouselContainer from "./components/CarouselContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GradientDrip />
      <AvatarContainer />
      <Quote />
      <CarouselContainer />
      <hr className="w-full border-2 border-zinc-200 opacity-70" />
      <Footer />
    </div>
  );
};

export default App;
