import React from 'react';
import { GoUp } from '../go-up/GoUp';
import { Hero } from '../hero/Hero';
import { Footer } from './Footer';

const DefaultLayout = ({children}) => {
  return (
    <div className='layout'>
        <Hero/>


        <main>{children}</main>
        <Footer/>
        <GoUp/>
    </div>
  );
};

export default DefaultLayout;
