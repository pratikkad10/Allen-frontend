import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <div>
            <Link to={'/'} >ALLEN</Link>
            |
            <Link to={'/neet'}>Courses</Link>
            |
            <Link to={'/jee'}>Courses</Link>
            |
            <Link to={'/neet/online-coaching-class-11'} >Class 11 neet</Link>
            |
            <Link to={'/neet/online-coaching-class-12'} >Class 12 neet</Link>
            |
            <Link to={'/jee/online-coaching-class-11'} >Class 11 jee</Link>
            |            
            <Link to={'/jee/online-coaching-class-12'} >Class 12 jee</Link>
        </div>
       <Outlet/>
       footer|Contact Us
    </div>
  );
}

export default Layout;
