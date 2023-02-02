import './ProgressBar.css';
import { useEffect } from 'react';
import useProgressBar from '../../hook/useProgressBar';

export default function ProgressBar() {
  const { scroll, progressBar } = useProgressBar();

  useEffect(() => {
    window.addEventListener('scroll', progressBar);
    return () => window.removeEventListener('scroll', progressBar);
  });

  return (
    <div className='progressBarContainer'>
      <div
        className='progressBar'
        style={{ transform: `scaleX(${scroll})`, opacity: `${scroll}` }}
      />
    </div>
  );
}
