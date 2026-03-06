'use client';

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-6 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all z-40"
      aria-label="Scroll to top"
    >
      <HiArrowUp className="text-xl" />
    </button>
  );
}
