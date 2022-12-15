import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import { useDispatch } from "react-redux";
import { updateTRIV } from "../../actions/triv";
export default function UpdateTRIV({ trivDetails }) {
  // console.log(shopDetails);
  const [triv, setPem] = useState(trivDetails);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(triv);
    dispatch(updateTRIV(triv._id, triv));
    alert("updated");
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />

      <form onSubmit={submitHandler}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="contact-form">
                <h1>Join Us</h1>
                <p className="hint-text">Join with us for getting work!!!</p>

                {/* ---------------------------------------------name, phone, email--------------------------------------------- */}

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
                <br />
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
                  <i className="fa" /> Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
