import React, { useContext } from "react";
import { ProfileContext } from "../App";

const Button = ({ children }) => {
  const {profile} = useContext(ProfileContext);
  return (
    <button className="rounded-lg border bg-blue-600 px-3 py-1 text-lg text-white hover:bg-blue-700 focus:border-blue-300 focus:ring-1 focus:ring-blue-300">
      {profile ? profile : "Select Your Profile"}
    </button>
  );
};

export default Button;
