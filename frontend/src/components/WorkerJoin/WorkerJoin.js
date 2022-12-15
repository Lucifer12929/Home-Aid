import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { createTRIV } from "../../actions/triv";
import './WorkerJoin.css'

export default function WorkerJoin() {
  const dispatch = useDispatch();
  const [triv, setPem] = useState({
    name: "",
    phoneNo: "",
    email: "",
    latitude: 0,
    longitude: 0,
    distance: 0,
    userName: "",
    passWord: "",
    city: "",
    address: "",
    occupation: "",
  });
  var submitHandler = (e) => {
    e.preventDefault();
    console.log(triv);
    dispatch(createTRIV(triv));
    alert("Joined Successfully!!!");
  };
  return (
    <>
      <Navbar />
      
    

      <form onSubmit={submitHandler}>
        <div className="container-lgw">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
              <span class="sticker sticker-lg" data-text="Join Us"><span>Join Us</span></span>
                <p className="hint-text">Join with us for getting work!!!</p>

                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}
                 <div id="details">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputName">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        required
                        value={triv.name}
                        onChange={(e) =>
                          setPem({
                            ...triv,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        required
                        value={triv.email}
                        onChange={(e) =>
                          setPem({
                            ...triv,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="inputPhone">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        required
                        value={triv.phoneNo}
                        onChange={(e) =>
                          setPem({
                            ...triv,
                            phoneNo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                {/* <br /> */}
                {/* --------------------------------------------------userName, passWord----------------------------------------------------- */}

                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="userName">userName</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        required
                        value={triv.userName}
                        onChange={(e) =>
                          setPem({
                            ...triv,
                            userName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="passWord">password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={triv.passWord}
                        onChange={(e) =>
                          setPem({
                            ...triv,
                            passWord: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  </div>
                  {/* ----------------------------------------------Lat, Long----------------------------------------------------------------- */}
                  {/* <br /> <br /> <br /> */}
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="Latitude">Latitude</label>
                        <input
                          type="text"
                          className="form-control"
                          id="latitude"
                          required
                          value={triv.latitude}
                          onChange={(e) =>
                            setPem({
                              ...triv,
                              latitude: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-sm-4">
                      <div className="form-group">
                        <label htmlFor="longitude">Longitude</label>
                        <input
                          type="text"
                          className="form-control"
                          id="longitude"
                          required
                          value={triv.longitude}
                          onChange={(e) =>
                            setPem({
                              ...triv,
                              longitude: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <a
                      href="https://www.latlong.net/convert-address-to-lat-long.html"
                      className="col-sm-4 btn btn-primary buttionSize"
                      target="_blank"
                      rel="noopener noreferrer"
                      height="4px"
                    >
                      Get Location
                    </a>
                  </div>
                 <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label htmlFor="city">city</label>
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        required
                        value={triv.city}
                        onChange={(e) =>
                          setPem({
                            ...triv,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  </div>
                {/* ------------------------------------------------Shop type, address ------------------------------------------------------- */}

                {/* <div className="col-sm-4"> */}
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Address</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={triv.address}
                    onChange={(e) =>
                      setPem({
                        ...triv,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
                <br />
                {/* ------------------------------------------------triv type------------------------------------------------------ */}
                <div>
                  <label htmlFor="Occupation">Occupation:</label>
                  <select
                    name="Occupation"
                    id="Occupation"
                    onChange={(e) =>
                      setPem({
                        ...triv,
                        occupation: e.target.value,
                      })
                    }
                  >
                    <option value="Plumber">Plumber</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Mechanic">Mechanic</option>
                  </select>
                </div>
                <br />

                {/* ----------------------------------------------------submit------------------------------------------------------------ */}
                <br />
                <button type="submit" className="btn btn-primary">
                  <i className="fa" /> Join
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
