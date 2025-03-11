"use client";
import HeroPage from '../section/Hero';
import WhyChooseUs from '../section/WhyChooseUs';
import Services from '../section/Services';
import Footer from '../components/Footer';
import Testimonals from '../section/Testimonals';
import Cta from '../section/Cta';
import { useState, useEffect } from "react";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once client-side
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; 
  }

  return (
    <>
        <HeroPage/>
        <WhyChooseUs/>
        <Services/>
        <Cta/>
        <Testimonals/>
        <Footer/>
    </>
  );
}
