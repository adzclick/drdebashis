import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Treatments from '../components/Treatments';
import Services from '../components/Services';
import BookAppointment from '../components/BookAppointment';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import ContactSection from '../components/Contact';
import Locationn from '../components/locationn';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <About></About>
       <Treatments></Treatments>
     <Services></Services>
     <BookAppointment></BookAppointment>
     <Reviews></Reviews>
     <FAQ></FAQ>
     <ContactSection></ContactSection>
   <Locationn></Locationn>
        </div>
    );
};

export default Home;