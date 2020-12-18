import React from 'react';
import { Carousel } from 'antd';
import car1 from '../../assets/images/post1.png';
import car2 from '../../assets/images/post2.png';
import car3 from '../../assets/images/post3.png';

const items = [
  {
    key: 1,
    src: car1
  },
  {
    key: 2,
    src: car2
  },
  {
    key: 3,
    src: car3
  }
]

function AppHero() {
  return (
    <div id="hero" className="h-screen w-full">
      <Carousel effect="fade" autoplay="true" className="h-full">
        {items.map(item => {
          return (
            <div key={item.key} className="">
              <div className="">
                <img alt="carousel" className="object-cover h-full w-full" src={item.src} />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  )
}


export default AppHero;