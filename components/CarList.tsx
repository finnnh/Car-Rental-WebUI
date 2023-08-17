import React from "react";
import CarComponent from "./CarComponent";

const getCarData = async () => {
  const res = await fetch("http://localhost:8888/cars", { cache: "no-cache" });
  return res.json();
};

const CarList: React.FC = async () => {
  const cars = await getCarData();
  return (
    <div className="justify-center p-10 grid md:grid-cols-6 gap-6 min-w-100 min-h-200">
      {cars.map((car: any) => {
        return (
          <CarComponent
            name={car.brand + " " + car.model}
            price={"€ " + car.pricePerDistanceHigh}
            seats={car.seats}
            location={car.location.city}
            category="---"
            svgPath="/car.svg"
          />
        );
      })}
    </div>
  );
};

export default CarList;
