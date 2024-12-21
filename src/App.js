import logo from './assets/logozlap2.png';
import promo from './assets/3packs.png';
import './App.css';

function App() {
  return (
    <div className="App ">
      <header className="App-header !bg-[#eb6e00]">
        <img src={logo} className="w-[150px]" alt="logo" />
        <img className="mt-[-50px] w-[80%]" src={promo} alt="promo" />
        <a className='border-4 font-bold rounded-[10px] py-2 px-4 mb-4' href="https://www.tokopedia.com/zlap">Shop on Tokopedia</a>
        <a className='border-4 font-bold rounded-[10px] py-2 px-4' href="https://www.tiktok.com/@zlap.collectibles">Visit Our Tiktok</a>
      </header>
    </div>
  );
}

export default App;
