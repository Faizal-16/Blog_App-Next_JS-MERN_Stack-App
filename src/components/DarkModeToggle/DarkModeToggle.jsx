"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div
      className="h-[24px] w-[48px] flex items-center justify-between cursor-pointer border border-[#53c28b70] rounded-3xl p-1 relative "
      onClick={toggle}
    >
      <div className="text-sm">🌙</div>
      <div className="text-sm">🔆</div>
      <div
        className={`h-4 w-4 bg-[#53c28b] rounded-full absolute ${
          mode === "light" ? "left-1" : "right-1"
        } `}
      />
    </div>
  );
};

export default DarkModeToggle;
