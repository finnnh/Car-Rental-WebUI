import React from "react";
import PriceCard from "./PriceCard";

const basicInsurance = ["Glass Protection", "Simple Damage"];
const premiumInsurance = ["Glass Protection", "Moderate Damage"];
const deluxeInsurance = ["Glass Protection", "Full Damage"];

const InsuranceList: React.FC = () => {
  return (
    <div className="justify-center p-10 grid md:grid-cols-3 gap-6 min-w-100 min-h-200">
      <PriceCard
        price="€10,00"
        title="Basic Insurance"
        description="The basic Insurance is included"
        content={basicInsurance}
      />

      <PriceCard
        price="€25,00"
        title="Premium Insurance"
        description="The basic Insurance is included"
        content={premiumInsurance}
      />

      <PriceCard
        price="€50,00"
        title="Deluxe Insurance"
        description="If you want to go the safe way ;)"
        content={deluxeInsurance}
      />
    </div>
  );
};

export default InsuranceList;
