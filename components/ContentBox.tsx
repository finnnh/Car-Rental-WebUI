import React from "react";

export default function ContentBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-violet-400 border-4 px-5 bg-gray-800 rounded-lg ml-10 mr-10 mt-10">
      {children}
    </div>
  );
}
