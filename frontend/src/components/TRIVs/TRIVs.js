import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TRIV from "./TRIV/TRIV";
import { getDistance } from "geolib";
import { useSelector } from "react-redux";

export default function TRIVs({ customer }) {
  const trivs = useSelector((state) => state.triv);
  const [workers, setWorkers] = useState(trivs);

  // -----------------------------------------DISTANCE CALCULATION------------------------------------------------
  trivs.map(
    (triv) =>
      (triv.distance =
        getDistance(
          { latitude: triv.latitude, longitude: triv.longitude },
          { latitude: customer.latitude, longitude: customer.longitude }
        ) / 1000)
  );

  // ----------------------------------------SORTING-----------------------------------------------------
  function compareDistance(a, b) {
    if (a.distance < b.distance) {
      return -1;
    }
    if (a.distance > b.distance) {
      return 1;
    }
    return 0;
  }

  const sortWorkersBydistance = () => {
    setWorkers(workers.sort(compareDistance));
  };

  return (
    <>
      <Navbar />
      
      <TRIV
        trivs={trivs}
        workers={workers}
        setWorkers={setWorkers}
        sortWorkersBydistance={sortWorkersBydistance}
        customer={customer}
      />
    
    </>
  );
}
