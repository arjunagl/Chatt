import React, { useState, useEffect } from 'react';

const infiniteScrollComponent = () => {
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    console.log('Fetch more list items!');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div>I am infinite scroll component</div>;
};
