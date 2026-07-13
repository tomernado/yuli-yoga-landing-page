import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SplashScreen } from './components/layout/SplashScreen';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Practice } from './components/sections/Practice';
import { Classes } from './components/sections/Classes';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div id="top">
      <SplashScreen />
      <Header />
      <main>
        <Hero />
        <About />
        <Practice />
        <Classes />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
