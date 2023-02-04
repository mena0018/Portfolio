'use client';

import './Navbar.css';
import { useState, useContext } from 'react';
import { Context } from '@/context/langContext';
import { navbarData } from '@/constants/navbar';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import logo from 'public/img/icones/logo/logoR.webp';
import Image from 'next/image';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { lang } = useContext(Context);

  const btnClick = () => setIsActive(!isActive);

  return (
    <>
      <ProgressBar />
      <div className='nav-container'>
        <nav>
          <ul onClick={btnClick} className={`liste-nav ${isActive && 'active'}`}>
            <li className='item-nav'>
              <a href='#home' className='nav-link'>
                <Image src={logo} alt='Logo' width={45} height={45} priority />
              </a>
            </li>

            {navbarData[lang].map((item: any, index: number) => (
              <li className='item-nav' key={index}>
                <a href={item.id} className='nav-link'>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='logo'>
        <a href='#home' className='nav-link'>
          <Image src={logo} alt='Logo' width={45} height={45} />
        </a>
      </div>

      <div onClick={btnClick} className={`btn-responsive-menu ${isActive && 'active'}`}>
        <div className='lignes'></div>
        <div className='lignes'></div>
        <div className='lignes'></div>
      </div>
    </>
  );
}
