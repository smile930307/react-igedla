import React from 'react';
import { Link } from 'gatsby';
import IgedlaLogo from '../../assets/cropped-logo-igedla.png';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl text-blue-800">
        <div className="w-32 mr-3">
          <Link to="/">
            <img src={IgedlaLogo} alt="Igedla Logo" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row self-start md:justify-end mt-4 sm:mt-0 ">
        <Link className="px-6 font-roboto" to="/">
          Home
        </Link>
        <Link className="px-6 font-roboto" to="/about">
          About
        </Link>
        <Link className="px-6 font-roboto" to="/employers">
          Employers
        </Link>
        <Link className="px-6 font-roboto" to="/faq">
          FAQ
        </Link>
        <Link className="px-6 font-roboto" to="/contact">
          Contact
        </Link>
      </div>
      <div className="hidden md:block" />
    </div>
  </header>
);

export default Header;
