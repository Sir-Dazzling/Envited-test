import React from "react";

const CatchyHeader = () => {
  return (
    <div>
      <p className="text-4xl md:text-6xl text-primary-400 font-bold text-center lg:text-right">
        Imagine if <br /> <span className="text-purple-500">Snapchat</span>{" "}
        <br /> had events.
      </p>
      <p
        className="text-center lg:text-right mt-4 lg:mb-12 text-base md:text-2xl 
      text-custom-neutral-600 font-light leading-5 lg:max-w-lg"
      >
        Easily host and share events with your friends across any social media.
      </p>
    </div>
  );
};

export default CatchyHeader;
