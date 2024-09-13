import React from 'react';
import { CgArrowTopRight } from 'react-icons/cg';

const App = () => {
  return (
    <div className="bg-black">
      <div className='min-h-screen mx-auto max-w-[1200px]'>
        <div className="navbar ">
          <div className="navbar-start">
            {/* Only for small device */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a className="text-xl">
              <p className='text-center font-inter text-white text-xl'>
                <span className='block'>J.</span>
                <span className='block'>Joseph</span>
                <span className='block'>Nahid</span>
              </p>
            </a>
          </div>
          {/* Only for large device */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-4 uppercase font-inter text-xl text-white">
              <li>About me</li>
              <li>Skills</li>
              <li>Projects</li>
            </ul>
          </div>
          <div className="navbar-end">
           <div className="flex justify-between items-center gap-2 border border-white rounded-full pl-3 pr-1 py-1">
            <p className='uppercase text-xl font-inter text-white'>Contact</p>
            <CgArrowTopRight className='text-3xl bg-[#FF00E5] text-black rounded-full'/>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;