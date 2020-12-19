import React from 'react';
import { AppleFilled } from '@ant-design/icons';
import airpods from '../../assets/products/airpods.png';
import cases from '../../assets/products/case.png';
import watch from '../../assets/products/watch.png';

import iphone11 from '../../assets/products/iphone-11-pro.png';
import iphone12 from '../../assets/products/iphone-12-pro.png';

import ipad1 from '../../assets/products/ipad1.png';
import ipad2 from '../../assets/products/ipad2.png';
import ipadPro from '../../assets/products/ipad.png';

import air from '../../assets/products/air2.png';

function AppProduct() {
  return (
    <div className="2xl:container mx-auto" id="product">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col py-10">
          <h2 className=" mb-2 flex justify-center text-3xl font-bold tracking-wider">Продукты</h2>
          <AppleFilled style={{ fontSize: '2rem', color: '#000000' }} />
        </div>
      </div>
      {/* --------------------------------------- Accessories --------------------------------------- */}
      <div className="max-w-md mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-lg text-gray-500 font-black flex justify-center tracking-wide">Аксессуары</h1>
        <div className="w-10 h-1 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-3 pb-10">
        <div className="bg-gray-50 flex justify-center items-center">
          <img className="w-25" src={airpods} alt="airpods" />
        </div>
        <div className="bg-gray-50">
          <img className="w-25" src={watch} alt="iWatch" />
        </div>
        <div className="bg-gray-50">
          <img className="h-25 w-auto" src={cases} alt="apple remote" />
        </div>
      </div>
      {/*--------------------------------------- iPhone --------------------------------------- */}
      <div className="max-w-md mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-lg text-gray-500 font-black flex justify-center tracking-wide">iPhone</h1>
        <div className="w-10 h-1 bg-secondary"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-11/12 md:w-5/6 lg:w-3/4 mx-auto pb-10">
        <div className="bg-gray-50 flex justify-center p-12">
          <img className="w-96" src={iphone11} alt="airpods" />
        </div>
        <div className="bg-gray-50 flex justify-center p-12">
          <img className="w-96" src={iphone12} alt="iWatch" />
        </div>
      </div>


      {/*--------------------------------------- iPad --------------------------------------- */}
      <div className="max-w-md mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-lg text-gray-500 font-black flex justify-center tracking-wide">iPad</h1>
        <div className="w-10 h-1 bg-secondary"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pb-10">
        <div className="hidden sm:block p-7 bg-gray-50">
          <img className="w-full" src={ipad1} alt="airpods" />
        </div>
        <div className="col-span-2 sm:border-2 border-gray-300">
          <img src={ipadPro} alt='Ipad Pro' />
        </div>
        <div className="bg-gray-50">
          <img className="w-full" src={ipad2} alt="iWatch" />
        </div>
      </div>

      {/*--------------------------------------- Mac --------------------------------------- */}
      <div className="max-w-md mx-auto flex flex-col justify-center items-center my-3">
        <h1 className="text-lg text-gray-500 font-black flex justify-center tracking-wide">Mac</h1>
        <div className="w-10 h-1 bg-secondary"></div>
      </div>

      <div className="grid grid-cols-1 h-72 sm:h-80 md:h-96 ">
        <div className="mac flex justify-center">
            <img className="w-full md:w-2/4" src={air} alt='Ipad Pro' />
        </div>
      </div>
    </div>
  );
}


export default AppProduct;