import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayouts from '../layouts/RootLayouts';
import Home from '../pages/Home';
import About from '../components/About';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Testimonials from '../components/FAQ';
import Treatments from '../components/Treatments';
import BookAppointment from '../components/BookAppointment';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Login from '../pages/Login';
import DashBoardLayout from '../layouts/DashBoardLayout';
import PrivateRoutes from '../Router/PrivateRoutes';
import Appointments from '../Dashboard/Appointments';
import Contacts from '../Dashboard/Contacts';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayouts,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/about',
            Component:About
        },
        {
            path:'/services',
            Component:Services
        },
        {
            path:"/reviews",
            Component:Reviews
        },
        {
            path:"/testimonials",
            Component:FAQ
        },
        {
            path:"/treatments",
            Component:Treatments
        },
        {
            path:'/appointment',
            Component:BookAppointment
        },{path:"/contact",
            Component:Contact

        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/DashBoardLayout',
            Component:DashBoardLayout
        }

    ]
  },
  {
    path:'/DashBoardLayout',
  element:<PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
    children:[
        {
path:'appointments',
Component:Appointments
        },
        {
            path:'contact',
            Component:Contacts
            }
       
    
    ]
  },
]);