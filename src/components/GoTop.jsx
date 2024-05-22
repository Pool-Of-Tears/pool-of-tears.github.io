import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { IconChevronUp } from '@tabler/icons-react';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button
      onClick={handleGoTop}
      className={`go-top-button rounded-full  transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      variant="default"
    >
      <IconChevronUp className="absolute h-[2rem] w-[2rem]" />
    </Button>
  );
};

export default GoTop;
