import React from "react";
import ContentBox from "@/components/ContentBox";
import LocationList from "@/components/LocationList";
import InputWithButton from "@/components/InputWithButton";

function locations() {
  return (
    <div>
      <ContentBox>
        <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
          All Locations
        </h1>
        <LocationList />
      </ContentBox>

      <ContentBox>
        <h1 className="text-4xl font-bold flex justify-center mt-8  mb-10 text-white">
          Your City is Missing?
        </h1>

        <div className="mb-10 justify-center flex">
          <InputWithButton
            buttonText="Submit"
            placeholder="Submit your city"
          ></InputWithButton>
        </div>
        <p className="text-slate-300 text-center mb-5">
          We are looking forward to extend our Service to as many Locations as
          possible.
        </p>

        <p className="text-slate-300 text-center mb-5">
          Just send it in and we will see if your location makes sense
          logistically and economically.
        </p>
      </ContentBox>
    </div>
  );
}

export default locations;
