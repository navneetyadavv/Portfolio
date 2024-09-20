import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
// import Starfield from "react-starfield";



function App() {
  return (
    <>
     {/* <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          // backgroundColor="black"
        /> */}
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
