import React from "react";

const MainAbout = () => {
  return (
    <div className="h-[50vh] bg-white ">
      <div className="container mx-auto text-black flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl">Advokatska kancelarija Dusan Dimic</h1>
        <div className="flex flex-col justify-center items-center pt-10">
          <h2 className="text-3xl">Nasa misija je vas uspeh</h2>
          <p className="text-2xl pt-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            imperdiet lectus in eros euismod ultrices. Phasellus libero nunc,
            faucibus in arcu ut, fringilla ullamcorper enim. Curabitur quis
            commodo ligula.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
