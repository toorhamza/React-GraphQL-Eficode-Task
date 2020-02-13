import { useState } from "react";
import axios from "axios";

export const useGeoCoordinates = type => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const fetchCoordinates = async () => {
    let req = await axios.get(
      `https://api.digitransit.fi/geocoding/v1/search?text=${value}&size=5`
    );
    let data = await req.data;
    let extractData = data.features.map(o => {
      let newObject = {
        name: o.properties.name,
        postCode: o.properties.postalcode,
        locality: o.properties.locality,
        neighbourhood: o.properties.neighbourhood,
        coords: o.geometry.coordinates
      };

      return newObject;
    });
    setResult(extractData);
    setValue("");
  };

  const onInput = event => {
    setValue(event.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    fetchCoordinates();
  };

  const onReset = () => {
    setValue("");
    setResult([]);
  };

  return {
    type,
    value,
    result,
    onInput,
    onSearch,
    onReset
  };
};
