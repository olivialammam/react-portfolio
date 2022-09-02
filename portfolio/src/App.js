import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import Navigation from './components/Navigation'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
<Header><Navigation></Navigation></Header>
<About></About>
<Work></Work>
<Contact></Contact>
    </div>
  );
}

export default App;
