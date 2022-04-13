import './App.css';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header'
import Banner from './container/Banner/Banner'
import Section from './container/Section/Section';
function App() {
  return (
    <div>
    <div className="container">
      <Header />
      <Banner />
      <Section />
    </div>
    <Footer />
    </div>
  );
}

export default App; 
