import './App.css';
import Header from './components/Header/Header';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer'

function App() {
  return (
    <div className="wrapper">
     <Header />
     <main>
      <FeatureSection />
     </main>
     <Footer />
    </div>
  );
}

export default App;
