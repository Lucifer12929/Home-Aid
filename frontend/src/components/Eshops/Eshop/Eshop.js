import React from "react";
import { Link } from "react-router-dom";
import './Eshop.css'

export default function Eshop({ EshopsObj }) {
  return (
    <div className="eshopfull">
      <br/>
      <br/>
      {EshopsObj.length === 0 ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <section id="header" className="jumbotron text-center">
            <h1 className="display-3">Electric Shops</h1>
            <p className="lead">Find The best Electric Shop you need!!!</p>
          </section>
          <section id="gallery">
            <div className="container_eshop">
             
                {EshopsObj.map((Eshop, key) => (
                  <>
                  <div className="card_eshop">
                        <div className="card_content_eshop">
                        <div className="cardheader">
                        <img
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3eca3062037097.5a8fec1b66428.jpg"
                          alt=""
                          className="card-img-top"
                        />
                        </div>
                        <div className="card-body">
                        
                          <h2 className="card-title">
                          {Eshop.shopName}
                          </h2>
                          <p className="card-price">{Eshop.description}</p>
                       
                          <h6 className="card-text_eshop">{Eshop.address}</h6>
                          <i className="fas fa-user"></i> Owner :{" "}
                          {Eshop.ownerName} <br />
                          <i className="fas fa-phone-square"></i> {"     "}
                          {Eshop.phoneNo} <br />
                          <i className="fas fa-envelope-square"></i>{" "}
                          {Eshop.email}
                          <div className='card-bottom_eshop'>
                          <Link
                            to={{
                              pathname: `/Items?${Eshop._id}`,
                              state: {
                                shopprop: true,
                              },
                            }}
                          >
                            <a href className=" btn btn-outline-success btn-sm">
                              Items
                            </a>
                          </Link>
                          </div>
                          
                          
                        </div>

                        </div>
                        </div>
                    
                  </>
                ))}
              </div>
         
          </section>
        </>
      )}
    </div>
  );
}
