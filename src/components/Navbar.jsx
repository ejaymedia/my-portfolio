import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = './Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul
      className={`list-none ${
        isSecondary ? 'flex flex-col gap-6 sm:hidden' : 'hidden sm:flex'
      } flex-row gap-6`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-white/90' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) setToggle(false);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className="text-white/90 hover:text-white text-[20px] font-medium cursor-pointer"
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              ELIJAH&nbsp;
              <span className="sm:block hidden">AFOLABI</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center relative">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer z-30"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <div className="fixed top-0 right-0 h-screen w-2/3 max-w-xs z-20 backdrop-blur-md bg-white/20 p-6 flex flex-col gap-6 overflow-y-auto">
                {renderNavLinks(true)}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;