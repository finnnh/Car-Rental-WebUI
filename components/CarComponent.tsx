import React from "react";

interface CarProps {
  name: string;
  price: string;
  seats: number;
  location: string;
  category: string;
  svgPath: string;
}

const CarComponent: React.FC<CarProps> = ({
  name,
  price,
  seats,
  location,
  category,
  svgPath,
}) => {
  return (
    <div className="border-violet-400 border-2 bg-gray-900 shadow-md rounded-lg max-w-xs sp-4 relative">
      <button className="absolute top-0 left-0 p-2">
        <img src="/save.svg" alt="Book" className="w-8 h-8" />
      </button>
      <button className="absolute top-0 right-0 p-2">
        <img src="/inspect.svg" alt="Like" className="w-8 h-8" />
      </button>

      <div className="flex justify-center mb-2 mt-10">
        <img src={svgPath} alt={name} className="w-16 h-16" />
      </div>

      <h2 className="text-xl font-semibold text-center text-white">{name}</h2>
      <p className="text-slate-300 text-center mb-2">{category}</p>

      <div className="flex justify-center items-center">
        <p className="text-2xl font-semibold text-violet-600">{price}</p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <img src="/seats.svg" alt="Seats" className="w-5 h-5 mr-1" />
        <p className="mr-2 text-slate-300">{seats} seats</p>

        <img src="/city.svg" alt="City" className="w-5 h-5 mr-1" />
        <p className="text-slate-300">{location}</p>
      </div>
    </div>
  );
};

export default CarComponent;
