import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import eshop from './eshop.png'
import mshop from './mshop.png'
export default function Services({ customerDetails }) {
  // console.log("from services ", customerDetails);
  return (
    <>
      <div name='service' className="containerk mt-2">
        <div className="row g-4">
          <div className="col-md-4 ">
            <div className="cardi serviceCard p-3">
              <div className="mt-3 image_box">
                {" "}
                <img
                  src={eshop}
                  width={200}
                  alt="Electrical Shops"
                />
                <h3 className="mt-3 text-truncate">Electrical Shops</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the nearest electrical shops Near your place
                </span>
                <div className="d-block mt-3">
              
                  <Link to="/Eshops">
                    <button className=" btn btn-danger btn-sm btn-block ">
                      Shops
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardi serviceCard p-3">
              <div className="mt-3 image_box">
                {" "}
                <img
                  src={eshop}
                  width={200}
                  alt="Mechanic shops"
                />
                <h3 className="mt-3 text-truncate">Mechanic shops</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the nearest Mechanic shops Near your place
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/Mshops">
                    <button className=" btn btn-primary btn-sm btn-block">
                      Shops
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardi serviceCard p-3">
              <div className="mt-3 image_box">
                {" "}
                <img
                  src={eshop}
                  width={200}
                  alt="Plumbing shops"
                />
                <h3 className="mt-3 text-truncate">Plumbing shops</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the nearest Mechanic shops Near your place
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/Pshops">
                    <button className=" btn btn-secondary btn-sm btn-block">
                      Shops
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardi serviceCard p-3">
              <div className="mt-3 image_box">
                {" "}
                <img
                  src={eshop}
                  width={200}
                  alt="Find Workers"
                />
                <h3 className="mt-3 text-truncate">Find Workers</h3>{" "}
                <span className="text justify-content mt-3">
                  Find the worker you need to make your work done
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/CustomerSignin">
                    <button className=" btn btn-success btn-sm btn-block">
                      Workers
                    </button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardi serviceCard p-3">
              <div className="mt-3 image_box">
                {" "}
                <img
                  src={eshop}
                  width={200}
                  alt="Shop Join"
                />
                <h3 className="mt-3 text-truncate">Shop Join</h3>{" "}
                <span className="text justify-content mt-3">
                  Join your shop with us and sell your items online
                </span>
                <br />
                <div className="d-block mt-3">
                  <Link to="/ShopJoin">
                    <button
                      className=" btn btn-warning btn-sm btn-block inlineStyle"
                      data-inline="true"
                    >
                      Add Shop
                    </button>
                  </Link>{" "}
                  {/* </div> */}
                  {/* <div className="d-block mt-3"> */}{" "}
                  <Link to="/ShopSignin">
                    <button
                      className=" btn btn-warning btn-sm btn-block inlineStyle"
                      data-inline="true"
                    >
                      Update Shop
                    </button>
                  </Link>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardi serviceCard p-3">
              <div className="mt-3 image_box">
                {" "}
                <img
                 src={eshop}
                 width={200}
                  alt="Workers Join"
                />
                <h3 className="mt-3 text-truncate">Workers Join</h3>{" "}
                <span className="text justify-content mt-3">
                  workers can Join our website and get work.
                </span>
                <div className="d-block mt-3">
                  {" "}
                  <Link to="/workerJoin">
                    <button className="btn btn-warning btn-sm btn-block inlineStyle">
                      Join
                    </button>
                  </Link>{" "}
                  {/* <div className="d-block mt-3"> */}
                  {"                           "}
                  <Link to="/WorkerSignin">
                    <button
                      className=" btn btn-warning btn-sm btn-block"
                      data-inline="true"
                    >
                      Update Details
                    </button>
                  </Link>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
