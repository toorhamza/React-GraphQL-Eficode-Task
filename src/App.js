import React, { useState } from "react";
import "./css/App.css";
import "./css/search.css";
import { useGeoCoordinates } from "./hooks";
import Search from "./components/Search";
import { PLAN_DESTINATION } from "./graphql/query";
import { useLazyQuery } from "@apollo/react-hooks";
import FinalOutput from "./components/FinalOutput";
import NavBar from "./components/NavBar";

function App() {
  const coord = useGeoCoordinates("text");
  const [selected, setSelected] = useState("");
  const fromlong = 24.926077;
  const fromlat = 60.169443;
  const [tolong, setTolong] = useState();
  const [tolat, setTolat] = useState();
  const [getTrip, { error, data }] = useLazyQuery(PLAN_DESTINATION, {
    variables: { fromlong, fromlat, tolong, tolat }
  });
  const finalTripData = data ? data.plan.itineraries : null;

  if (error) {
    console.log(error);
  }
  console.log(finalTripData);

  const selectedHandle = (coord, name, post) => {
    setTolong(coord[0]);
    setTolat(coord[1]);
    setSelected(`${name}, ${post}`);
    getTrip();
  };

  const selectOptionsOutput = !coord.result
    ? null
    : coord.result.map(o => {
        return (
          <li key={o.name + o.postCode}>
            {`${o.name}, ${o.postCode} ${o.locality ? o.locality : ""} ${
              o.neighbourhood ? o.neighbourhood : ""
            }`}{" "}
            <button
              onClick={() => {
                selectedHandle(o.coords, o.name, o.postCode);
                coord.onReset();
              }}
              className="searchButton"
            >
              Choose
            </button>{" "}
            <button onClick={null} className="searchButton">
              See on Maps
            </button>
          </li>
        );
      });

  return (
    <div className="App">
      <NavBar />
      <div className="info">
        <div className="item1">
          <h4 style={{ display: "inline-block" }}>Departure from:</h4> Pohjoinen
          Rautatiekatu 25
        </div>
        <div className="item2">
          <h4 style={{ display: "inline-block" }}>Destination:</h4> {selected}
        </div>
      </div>
      <Search coord={coord} />
      {selectOptionsOutput}

      <FinalOutput data={finalTripData} />
    </div>
  );
}

export default App;
