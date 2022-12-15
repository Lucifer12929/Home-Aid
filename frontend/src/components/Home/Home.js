import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Features from "./Features/Features";

export default function Home({ customer }) {
  // console.log(customer);
  return (
    <div className="home">
      <Navbar/>
      <Features />
      <br />
      <br />
      
        <h1>Services</h1>
       
      <Services customerDetails={customer} />
      <br />
      <br />
      <br/>
     
        <h1>About Us</h1>
       
      <AboutUs />
      <Footer />
    </div>
  );
}
