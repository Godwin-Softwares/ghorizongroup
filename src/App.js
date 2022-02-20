import { Blog, Header, Whatg , Features, Footer, Possibility,} from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
        <Brand/>
        <Whatg/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
