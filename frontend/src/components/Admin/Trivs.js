import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteTRIV } from "../../actions/triv";

export default function Trivs({ trivs }) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);
  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Workers</b>
                  </h2>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>phoneNo</th>
                  <th>email</th>
                  <th>city</th>
                  <th>occupation</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {trivs.map((triv) => (
                  <>
                    <tr>
                      <td>{triv.Name}</td>
                      <td>{triv.phoneNo}</td>
                      <td>{triv.email}</td>
                      <td>{triv.city}</td>
                      <td>{triv.occupation}</td>
                      <td>{triv.userName}</td>
                      <td>{triv.passWord}</td>

                      <td>
                        {/* <i
                          class="fas fa-check tick"
                          onClick={() => {
                            console.log("clicked");
                          }}
                        ></i> */}

                        <i
                          class="fas fa-times wronge"
                          onClick={() => {
                            dispatch(deleteTRIV(triv._id));
                            setCheck(!check);
                          }}
                        ></i>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
