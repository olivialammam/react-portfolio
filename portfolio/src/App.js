import './App.css';
import Header from'./components/Header';
import Navigation from './components/Navigation'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
<Header><Navigation></Navigation></Header>
<About></About>
<Work></Work>
<Contact></Contact>
<Footer></Footer>
    </div>
  );
}

export default App;
