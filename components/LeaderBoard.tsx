import React from "react";

interface Content {
  id: number;
  name: string;
  score: number;
}

interface LeaderBoardProps {
  title: string;
  content: Content[];
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({ content, title }) => {
  return (
    <div className="border-violet-400 border-2 p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-2 ml-1 text-white">{title}</h2>

      <div className="grid gap-2 grid-cols-1">
        {content.map((c) => (
          <div
            key={c.id}
            className="bg-slate-800 rounded-md w-80 h-10 flex items-center justify-between px-4"
          >
            <p className="text-sm text-white">{c.name}</p>
            <p className="text-sm text-white">{c.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
