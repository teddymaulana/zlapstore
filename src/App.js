import tokped from './assets/tokped3.png';
import shopee from './assets/shopeelogo.png';
import ig from './assets/iglogo.png';
import tiktok from './assets/tiktoklogo.png';
import pdp1 from './assets/1.png';
import pdp2 from './assets/2.png';
import pdp3 from './assets/3.png';
import pdp4 from './assets/4.png';
import pdp5 from './assets/5.png';
import './App.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function App() {
  return (
    <div className="App h-[100vh] w-full  bg-cover bg-[url('./assets/holographic.png')] max-w-[500px] mx-auto">
      <div className='pt-[0]'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides={false}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={pdp1} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pdp2} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pdp3} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pdp4} className='w-full'/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pdp5} className='w-full'/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={` w-full bottom-0 z-10 absolute text-[#c6fd07] font-semibold bg-[#545454]`}>
          <div className='fixed w-full p-4 flex bottom-0 flex-col'>
            <div className='flex w-full justify-center'>
              <span className='text-[#c6fd07] font-semibold'>Shop on</span>
              <a href="https://www.tokopedia.com/zlap" className='mx-4'>
                <img src={tokped} className='h-[27px]' />
              </a>
              <a href="https://shopee.co.id/shop/18959012" className=' mx-4'>
                <img src={shopee} className='h-[27px]' />
              </a>
              <a href="https://www.tiktok.com/@zlap.collectibles" className=' mx-4'>
                <img src={tiktok} className='h-[27px]' />
              </a>
              <a href="https://www.instagram.com/zlapcollectibles/" className=' mx-4'>
                <img src={ig} className='h-[27px]' />
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
