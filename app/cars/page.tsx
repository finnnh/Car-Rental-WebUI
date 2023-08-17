import React from "react";
import CarList from "@/components/CarList";
import PriceCard from "@/components/PriceCard";

const basicInsurance = ["Glass Protection", "Simple Damage"];
const premiumInsurance = ["Glass Protection", "Moderate Damage"];
const deluxeInsurance = ["Glass Protection", "Full Damage"];

export default function Cars() {
  return (
    <div>
      <div className=" border-violet-400 border-4 bg-gray-800 rounded-lg  m-10">
        <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
          All available Cars
        </h1>

        <CarList />
      </div>

      <div className=" border-violet-400 border-4 bg-gray-800 rounded-lg  ml-10 mr-10">
        <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
          Insurance
        </h1>

        <div className="flex justify-center py-10">
          <div className="px-10">
            <PriceCard
              price="€10,00"
              title="Basic Insurance"
              description="The basic Insurance is included"
              content={basicInsurance}
            />
          </div>

          <div className="px-10">
            <PriceCard
              price="€25,00"
              title="Premium Insurance"
              description="The basic Insurance is included"
              content={premiumInsurance}
            />
          </div>

          <div className="px-10">
            <PriceCard
              price="€50,00"
              title="Deluxe Insurance"
              description="If you want to go the safe way ;)"
              content={deluxeInsurance}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
