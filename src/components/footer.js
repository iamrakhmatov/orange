import React from 'react'
import logo from '../assets/logo/logo-vertical-white.png';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';


function AppFooter() {
  return (
    <div id="contact" className="2xl:container mx-auto h-2/6 bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div className="w-28">
          <img className="w-full" alt='Logo' src={logo} />
        </div>
        <ul className="flex ">
          <li className="mx-2">
            <a rel="noreferrer" href="https://www.instagram.com/orangestore.uz/" target="_blank" >
              <InstagramOutlined style={{ fontSize: '1.8rem', color: '#ff5500' }} />
            </a>
          </li>
          <li className="mx-2">
            <a rel="noreferrer" href="https://www.facebook.com/uz.orangestore/" target="_blank" >
              <FacebookOutlined style={{ fontSize: '1.8rem', color: '#ff5500' }} />
            </a>
          </li>
        </ul>
        <div className="text-white text-base font-medium flex justify-center pb-2">
          Copyright &copy; 2020 Orange Store
        </div>
      </div>
    </div>
  )
}


export default AppFooter;