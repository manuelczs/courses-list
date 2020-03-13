import React, { Component } from "react";
import CoursesPage from "./CoursesPage";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <div className="">
        <h1>Administration</h1>
        <h3>React, Flux and React Router web app</h3>
        <NavLink to="/about" className="btn btn-primary">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
