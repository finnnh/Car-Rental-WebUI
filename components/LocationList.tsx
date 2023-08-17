import React from "react";
import LocationComponent from "./LocationComponent";

const getLocationData = async () => {
  const res = await fetch("http://localhost:8888/locations", {
    cache: "no-cache",
  });
  return res.json();
};

async function LocationList() {
  const locations = await getLocationData();
  return (
    <div className="justify-center p-10 grid md:grid-cols-3 gap-6 min-w-100 min-h-200">
      {locations.map((l: any) => {
        return (
          <LocationComponent
            city={l.city}
            address={
              l.street +
              " " +
              l.houseNumber +
              ", " +
              l.postalCode +
              " " +
              l.city
            }
          />
        );
      })}
    </div>
  );
}

export default LocationList;
