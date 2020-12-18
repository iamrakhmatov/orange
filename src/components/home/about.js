import React from 'react';
import {AppleFilled} from '@ant-design/icons';
import logo from '../../assets/logo/logo.png';

class AppAbout extends React.Component {
  render() {
    return (
      <div id="about" className="bg-orange bg-fixed w-full h-96 bg-center relative">
        <div className="bg-black opacity-60 w-full h-full absolute top-0 left-0"></div>
        <div className="flex flex-col sm:flex-row justify-center items-center max-w-screen-sm px-5 sm:px-0 lg:max-w-screen-md pt-10 sm:pt-16 mx-auto relative z-3">
          <div className="flex sm:flex-col justify-center items-center w-max">
            <div className="inline-block p-3">
              <AppleFilled style={{ fontSize: '3.8rem', color:'#ffffff'}} />
            </div>
            <div className="inline-block p-3 pt-6 sm:pt-3">
              <img className="w-16" src={logo} alt='Orange Logo'/>
            </div>
          </div>
          <div className="pt-2">
            <h2 className="text-gray-200 text-xl">
              <span className="text-secondary font-bold tracking-wide text-2xl ">
                Orange Store
              </span> - официальный партнёр компании Apple в Узбекистане со 
              статусом Apple Premium Reseller.
            </h2>
            <h3 className="text-lg font-semibold text-gray-300">
              Статус Apple Premium Reseller даётся только профессионалам в своём деле.
            </h3>
            {/* <p className="text-gray-400 text-base">
              В нашем магазине можно не только купить iPhone, компьютер 
              Mac или планшет iPad, а также другую технику Apple и аксессуары 
              для неё. Orange – это прежде всего место, пропитанное атмосферой 
              Apple, в котором вам помогут с выбором техники, научат ей пользоваться, 
              дадут советы по эксплуатации ваших гаджетов и предложат качественные аксессуары.
            </p> */}
          </div>
        </div>
        <div className="mx-auto mt-3 w-16 h-1 bg-secondary relative z-3"></div>
      </div>
    );
  }
}

export default AppAbout;