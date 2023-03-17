import logo from './logo.svg';
import './App.scss';
import { Navbar, CursorMove, Header, About, Skills, Projects } from './components';

function App() {
  return (
    <div className="App">
      {/* <div className='container'> */}
        <CursorMove/>
        <Navbar />
        <Header />
        <Skills />
        <Projects/>
        <About />
      {/* </div> */}
    </div>
  );
}

export default App;
