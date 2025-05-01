import React, { useState, useEffect } from 'react';

const banners = [
  'https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg',
  'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/ghosted-apple-tv.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1',
  'https://th.bing.com/th/id/R.c28304caaf23dcb853e08fe04dd2a649?rik=38FhB%2bQ6AQmLtA&riu=http%3a%2f%2ftemplehoulton.com%2fwp-content%2fuploads%2f2023%2f07%2f01_OPP_WEB_THEATERS_GENERIC_1600X600_KR_F01_060623.jpg&ehk=H%2fsc%2bLXdMwJFJGUy3Br25a5qE8GipE9oXOsWYoZqphg%3d&risl=&pid=ImgRaw&r=0',
  'https://posterspy.com/wp-content/uploads/2020/04/DuneFINAL.jpg',


];

const titles = [
  'Avengers End Game',
  'Ghosted',
  'Oppenheimer',
  'Dune',
];

function BannerSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000); // change banner every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end transition-all duration-700'
      style={{ backgroundImage: `url(${banners[index]})` }}
    >
      <div className='text-white text-l text-center w-full bg-gray-900/60 p-1 font-[Arial]'>
        {titles[index]}
      </div>
    </div>
  );
}

export default BannerSlider;
