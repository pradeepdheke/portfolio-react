import React from 'react';
import { Hero } from '../hero/Hero';
import { Footer } from './Footer';

const DefaultLayout = ({children}) => {
  return (
    <div>
        <Hero/>


        <main>{children}</main>
        <Footer/>
    </div>
  );
};

export default DefaultLayout;
