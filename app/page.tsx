import InputWithButton from "@/components/InputWithButton";
import LeaderBoard from "@/components/LeaderBoard";
import PriceCard from "@/components/PriceCard";

const cars = [
  { id: 1, name: "Audi A4", score: 150 },
  { id: 2, name: "BMW M4", score: 200 },
  { id: 3, name: "Opel Astra", score: 120 },
  { id: 4, name: "Ford Fiesta", score: 120 },
  { id: 5, name: "Honda Civic", score: 120 },
];

const citys = [
  { id: 1, name: "Cologne", score: 150 },
  { id: 2, name: "Paris", score: 200 },
  { id: 3, name: "Bonn", score: 120 },
  { id: 4, name: "Berlin", score: 120 },
  { id: 5, name: "Helsinki", score: 120 },
];

const basicInsurance = ["Glass Protection", "Simple Damage"];
const premiumInsurance = ["Glass Protection", "Moderate Damage"];
const deluxeInsurance = ["Glass Protection", "Full Damage"];

export default function Home() {
  return (
    <div>
      <div className="relative py-2">
        <img src="/banner.png" alt="Banner" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-6xl font-bold mb-20">NexusCar</h1>
          <InputWithButton
            buttonText="Search"
            placeholder="Enter your City/ZIP Code..."
          />
        </div>
      </div>
      <br />
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
      <br />
      <section id="top">
        <div className="border-violet-400 border-4 px-5 bg-gray-800 rounded-lg ml-10 mr-10">
          <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
            Top Car's/City's
          </h1>

          <div className="flex justify-center py-10">
            <div className="px-10">
              <LeaderBoard content={cars} title="Cars" />
            </div>

            <div className="px-10">
              <LeaderBoard content={citys} title="Citys" />
            </div>
          </div>
        </div>
      </section>
      <br />
      <section id="price">
        <div className="border-violet-400 border-4 px-5 bg-gray-800 rounded-lg ml-10 mr-10">
          <h1 className="text-4xl font-bold flex justify-center mt-8 text-white">
            Price Calculator
          </h1>
        </div>
      </section>
    </div>
  );
}
