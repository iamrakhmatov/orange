import React from 'react';
import AppHero from '../home/hero';
import AppProduct from '../home/product';
import AppAbout from '../home/about';
import AppPricing from '../home/pricing';


function AppHome() {
  return (
    <div className="w-full overflow-hidden ">
      <AppHero />
      <AppProduct />
      <AppPricing />
      <AppAbout />
    </div>
  );
}


export default AppHome;