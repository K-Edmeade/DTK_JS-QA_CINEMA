import React from "react";
import { Outlet } from 'react-router-dom';

export default function Listings() {
    return( 
      <>
    <h1>Listings</h1>
    <Outlet />
    </>
    );
  }