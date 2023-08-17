import React, { FC } from "react";

interface InputWithButtonProps {
  buttonText: string;
  placeholder: string;
}

const InputWithButton: FC<InputWithButtonProps> = ({
  buttonText,
  placeholder,
}) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-violet-800 flex-grow text-black"
      />
      <button className="bg-violet-800 text-white px-4 py-2 rounded-r-md">
        {buttonText}
      </button>
    </div>
  );
};

export default InputWithButton;
