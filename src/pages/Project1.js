import React from "react";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main className="content">
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
        <Footer />
      </div>
      
    </main>
  );
};

export default Project1;
