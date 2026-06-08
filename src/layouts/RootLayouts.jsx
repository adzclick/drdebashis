import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import FloatingButtons from '../components/FloatingButtons';
import Loader from '../Loader/Loader';

const RootLayouts = () => {
     const [loading, setLoading] = useState(true);
      useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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


