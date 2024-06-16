import './App.css';
import Header from './components/header/index';
import Hero from './components/hero';
import AboutTelescopes from './components/aboutTelescopes';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutTelescopes />
      <div className='h-[40vh]'></div>
    </>
  );
}

export default App;
