import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { useToggle } from '../ToggleContext';
import Footer from '../components/Footer';

export default function Layout() {
  const { toggled, darkModeHandler } = useToggle();

  return (
    <>
      <div className={`main ${!toggled?'bg-dark17':'bg-lighte3'}`}>
        <Header toggled={toggled} onToggle={darkModeHandler} />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}
