import tokped from './assets/tokped3.png';
import shopee from './assets/shopeelogo.png';
import ig from './assets/iglogo.png';
import tiktok from './assets/tiktoklogo.png';
import maingif from './assets/main.gif';
import './App.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function App() {
  return (
    <div className="App h-[100vh] w-full  bg-cover bg-[url('./assets/holographic.png')]">
      <div className='pt-[100px]'>
        {/* 
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          slidesPerGroup={1}
          centeredSlides={false}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='2  mx-4'
        >
          <SwiperSlide>
            <img src={pdp1} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pdp3} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pdp2} className='w-full'/>
          </SwiperSlide>
        </Swiper>
        */}
        <img src={maingif} />
        <div className='w-full'>
          <a className='border-4 font-bold bg-[#02a19b] text-white rounded-[10px] py-2 px-4 mb-4 w-[220px] mr-1' href="https://www.tokopedia.com/zlap">Shop on Tokopedia</a>
          <a className='border-4 font-bold bg-[#02a19b] text-white rounded-[10px] py-2 px-4 mb-4 w-[220px] ml-1' href="https://shopee.co.id/shop/18959012">Shop on Shopee</a>
        </div>
      </div>
      <div className={` w-full bottom-0`}>
          <div className='fixed w-full p-4 flex bottom-0 flex-col'>
            <div className='flex w-full justify-center'>
              <a href="https://www.tokopedia.com/zlap" className='mx-4'>
                <img src={tokped} className='h-[30px]' />
              </a>
              <a href="https://shopee.co.id/shop/18959012" className=' mx-4'>
                <img src={shopee} className='h-[30px]' />
              </a>
              <a href="https://www.tiktok.com/@zlap.collectibles" className=' mx-4'>
                <img src={tiktok} className='h-[30px]' />
              </a>
              <a href="https://www.instagram.com/zlapcollectibles/" className=' mx-4'>
                <img src={ig} className='h-[30px]' />
              </a>
            </div>
            <p className='m-0 mt-4 w-full block'>ZLAP collectibles © 2025</p>
          </div>
      </div>
    </div>
  );
}

export default App;
