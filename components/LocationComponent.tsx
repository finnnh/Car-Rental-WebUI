import React from "react";

interface LocationComponentProps {
  city: string;
  address: string;
}

const LocationComponent: React.FC<LocationComponentProps> = ({
  city,
  address,
}) => {
  return (
    <div className="border-violet-400 border-2 bg-gray-900 rounded-md p-8 shadow-md flex">
      <div className="mr-2">
        <img src="/location.svg" alt="Location Icon" className="w-8 h-8" />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-white">{city}</h2>
        <p className="text-slate-300">{address}</p>
      </div>
    </div>
  );
};

export default LocationComponent;
