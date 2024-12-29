import logo from './assets/logozlap2.png';
import promo from './assets/terafest1.png';
import promo2 from './assets/terafest-pack.png';
import './App.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function App() {
  return (
    <div className="App ">
      <header className={`App-header bg-cover bg-[url('./assets/bg.png')]`} style={{ backgroundImage: './assets/bg.png'}}>
        <img src={logo} className="w-[150px]" alt="logo" />
        {/* 
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='w-[200px] m-[20px]'
        >
          <SwiperSlide>
            <img src={promo} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={promo2} className='w-full'/>
          </SwiperSlide>
        </Swiper>
        */}
        <a className='border-4 font-bold bg-[#1b434c] rounded-[10px] py-2 px-4 mb-4 w-[220px]' href="https://www.tokopedia.com/zlap">Shop on Tokopedia</a>
        <a className='border-4 font-bold bg-[#1b434c] rounded-[10px] py-2 px-4 mb-4 w-[220px]' href="https://shopee.co.id/shop/18959012">Shop on Shopee</a>
        <a className='border-4 font-bold bg-[#1b434c] rounded-[10px] py-2 px-4 w-[220px] pointer-events-none opacity-60' href="https://www.tiktok.com/@zlap.collectibles">Visit Our Tiktok</a>
      </header>
    </div>
  );
}

export default App;
