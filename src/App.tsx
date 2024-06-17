import './App.css';
import Header from './components/header/index';
import Hero from './components/hero';
import AboutTelescopes from './components/aboutTelescopes';
import Charts from './components/charts';
import AboutProject from './components/aboutProject';
import Team from './components/team';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutTelescopes />
      <Charts />
      <AboutProject />
      <Team />
      <Footer />
    </>
  );
}

export default App;
