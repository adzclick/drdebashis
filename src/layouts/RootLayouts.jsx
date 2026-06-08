import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import FloatingButtons from '../components/FloatingButtons';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollTop></ScrollTop>
            <Outlet></Outlet>
            <Footer></Footer>
            <FloatingButtons></FloatingButtons>
        </div>
    );
};

export default RootLayouts;