import React from "react";
import {
  SiGooglekeep,
  SiReact,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

function Header() {
  return (
    <div className="flex items-center justify-center p-12 text-4xl gap-2">
      <p className="text-keep">
        <SiGooglekeep />
      </p>
      <span>+</span>
      <p className="bg-react">
        <SiReact />
      </p>
      <span>+</span>
      <p className="text-tailwind">
        <SiTailwindcss />
      </p>
      <span>+</span>
      <p className="text-firebase">
        <SiFirebase />
      </p>
    </div>
  );
}

export default Header;
