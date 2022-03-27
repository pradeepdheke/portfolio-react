import React from 'react';
import { GoUp } from '../go-up/GoUp';
import { Footer } from './Footer';
import { Header } from './Header';

export const DefaultLayout = ({children}) => {
  return (
    <div className='layout'>
        <Header/>


        <main>{children}</main>
        <Footer/>
        <GoUp/>
    </div>
  );
};

export default DefaultLayout;
