import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export default function Footer() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      <div>
      <footer class="footer">
	  <div class="footer-content">
	       <h3>TRIVIALITY SERVICES</h3>
		   <p>Triviality offers home services such as electricians, plumbers, and mechanics from the nearest location as well as providing household needs online from electric, mechanical, and plumbing shops. With the daily job opportunity for local vendors, it makes it easier to find local vendors. </p> 
		   <ul class="socials">
    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
    <li><a href="#"><i class="fa fa-youtube"></i></a></li>
    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
 </ul>
      </div>
     
  </footer>
  <div
            className="text-center p-3 footer-bottom"
            
          >
            © 2022 Copyright:&nbsp;&nbsp;  
            <Link className="text-white" to="/">
             TRIVIALITY
            </Link>
          </div>
      </div>
      {/* End of .container */}
    </>
  );
}
