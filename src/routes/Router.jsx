import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import RootLayouts from "../layouts/RootLayouts";

import Home from "../pages/Home";
import Login from "../pages/Login";

import About from "../components/About";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Treatments from "../components/Treatments";
import BookAppointment from "../components/BookAppointment";
import Contact from "../components/Contact";

import DashBoardLayout from "../layouts/DashBoardLayout";
import PrivateRoutes from "../Router/PrivateRoutes";

import Appointments from "../Dashboard/Appointments";
import Contacts from "../Dashboard/Contacts";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/Blogdetails";
import TreatmentDetail from "../components/TreatmentDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/reviews",
        Component: Reviews,
      },
      {
        path: "/testimonials",
        Component: FAQ,
      },
      {
        path: "/treatments",
        Component: Treatments,
      },
      {
        path: "/appointment",
        Component: BookAppointment,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path:'/blogs',
        Component:Blogs
      },
      {
  path: "/Blogs/:slug",
  element: <BlogDetail />,
},
{
  path: "/treatments/:slug",
  Component: TreatmentDetail,
},
    ],
  },

  {
    path: "/DashBoardLayout",
    element: (
      <PrivateRoutes>
        <DashBoardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/DashBoardLayout/appointments"
            replace
          />
        ),
      },
      {
        path: "appointments",
        Component: Appointments,
      },
      {
        path: "contact",
        Component: Contacts,
      },
    ],
  },
]);