import './App.css';
import Header from'./components/Header';
import Navigation from './components/Navigation'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact';
import Footer from './components/Footer'
// import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
<Header><Navigation></Navigation></Header>
<About></About>
<Work></Work>
{/* <Skills></Skills> */}
<Contact></Contact>
<Footer></Footer>
    </div>
  );
}

export default App;
