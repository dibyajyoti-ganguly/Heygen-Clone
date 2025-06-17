import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GradientDrip from "./components/GradientDrip";
import AvatarContainer from "./components/AvatarContainer";
import Quote from "./components/Quote";
import CarouselContainer from "./components/CarouselContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GradientDrip />
      <AvatarContainer />
      <Quote />
      <CarouselContainer />
    </div>
  );
};

export default App;
