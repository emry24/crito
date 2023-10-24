import './App.css';
import Header from './components/Header/Header';
import BrandsSection from './components/BrandsSection/BrandsSection';
import FeatureSection from './components/FeatureSection/FeatureSection';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="wrapper">
     <Header />
     <main>
     <BrandsSection />
      <FeatureSection />
     </main>
     <Footer />
    </div>
  );
}

export default App;
