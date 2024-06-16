import './App.css';
import Header from './components/header/index';
import Hero from './components/hero';
import AboutTelescopes from './components/aboutTelescopes';
import Charts from './components/charts';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutTelescopes />
      <Charts />
    </>
  );
}

export default App;
