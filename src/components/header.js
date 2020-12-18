import { Component } from 'react';
import { Anchor } from 'antd';
import logoWhite from '../assets/logo/logo.png'
import logoBlack from '../assets/logo/logo-horizontal.png'

const { Link } = Anchor;

class AppHeader extends Component {
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 120) {
      document.querySelector("#navbar").classList.replace('nav-scroll', 'bg-gray-900');
      document.querySelector("#top").classList.replace('block', 'hidden');
      document.querySelector("#scroll").classList.replace('hidden', 'block');
    } else {
      document.querySelector("#navbar").classList.replace('bg-gray-900', 'nav-scroll');
      document.querySelector("#top").classList.replace('hidden', 'block');
      document.querySelector("#scroll").classList.replace('block', 'hidden');

    }
  };
  render() {
    return (
      // <!-- This example requires Tailwind CSS v2.0+ -->
      <nav className="overflow-hidden bg-gray-900 sm:bg-transparent fixed w-full z-20">
        <div id="navbar"  className="nav-scroll relative w-full px-2 sm:px-4 lg:px-6">
          <div className="relative max-w-7xl mx-auto flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              {/* <button
                onClick={this.props.setToggler}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                
                <svg className={`${this.props.status ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
               
                <svg className={`${this.props.status ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button> */}

            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  <img id="top" className="block h-8 w-auto mt-2" src={logoBlack} alt="Workflow" />
                  <img id="scroll" className="hidden h-8 w-auto mt-2" src={logoWhite} alt="Workflow" />
                  {/* <img className="block sm:hidden h-8 w-auto mt-2" src={logoBlack} alt="Workflow" /> */}
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
              <div className="hidden sm:block">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Anchor className="h-16 ml-0 pl-0" targetOffset="58">
                  <Link href="#hero" title="Home" />
                  <Link href="#product" title="Products" />
                  <Link href="#pricing" title="Pricing" />
                  <Link href="#about" title="About" />
                  <Link href="#contact" title="Contact" />
                </Anchor>
              </div>
            </div>
          </div>
        </div>

        {/* <!--
      Mobile menu, toggle classNamees based on menu state.
  
      Menu open: "block", Menu closed: "hidden"
    --> */}
        {/* <div className={`${this.props.status ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div> */}
      </nav>
    );
  }
}

export default AppHeader;
