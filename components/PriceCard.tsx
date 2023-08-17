import React from "react";

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  content: string[];
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  description,
  price,
  content,
}) => {
  return (
    <div className="border-violet-400 border-2 bg-gray-900 rounded-md shadow-md p-8 w-80 h-90">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-slate-300 mt-2">{description}</p>
      <div className="mt-4">
        <p className="text-2xl font-semibold text-violet-600">{price}</p>
        <p className="text-slate-300">per Rent</p>
      </div>
      <p className="text-violet-600 mt-5">Covers:</p>
      <ul className="mt-4 space-y-1">
        {content.map((c) => (
          <li className="text-white">{c}</li>
        ))}
      </ul>
      <button className="bg-violet-600 text-white mt-6 py-2 px-4 rounded-md hover:bg-violet-800">
        Checkout
      </button>
    </div>
  );
};

export default PriceCard;
