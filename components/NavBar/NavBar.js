import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-yellow-400 border-t-2 border-b-2 border-black">
      <div className="container mx-auto h-[5vh]">
        <ul className="flex items-center flex-row justify-evenly h-full text-black">
          <li>Naslovna</li>
          <li>O Meni</li>
          <li>Usluge</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
