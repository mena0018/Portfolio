'use client';

import './ToggleLang.css';
import { useContext, useState } from 'react';
import { Context } from '@/context/langContext';
import FrenchFlag from 'public/img/icones/toggle-switch/france.webp';
import EnglishFlag from 'public/img/icones/toggle-switch/royaume-uni.webp';
import Settings from 'public/img/icones/toggle-switch/settings.svg';
import Image from 'next/image';

export default function ToggleLang() {
  const { toggleLang } = useContext(Context);

  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <>
      <div className={`label-btn ${isActive && 'active'}`} onClick={handleClick}></div>

      <Image
        src={Settings}
        onClick={handleClick}
        alt='icône de paramètres'
        className={`logo-settings ${isActive && 'active'}`}
      />

      <div onClick={handleClick} className={`items ${isActive && 'active'}`}>
        <Image src={EnglishFlag} alt='Drapeau Anglais' onClick={() => toggleLang('EN')} />
      </div>

      <div onClick={handleClick} className={`items ${isActive && 'active'}`}>
        <Image src={FrenchFlag} alt='Drapeau Français' onClick={() => toggleLang('FR')} />
      </div>
    </>
  );
}
