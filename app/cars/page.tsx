import React from "react";
import CarList from "@/components/CarList";
import InsuranceList from "@/components/InsuranceList";
import ContentBox from "@/components/ContentBox";

export default function Cars() {
  return (
    <div>
      <ContentBox>
        <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
          All available Cars
        </h1>

        <CarList />
      </ContentBox>
      <ContentBox>
        <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
          Insurance
        </h1>
        <InsuranceList />
      </ContentBox>
    </div>
  );
}
