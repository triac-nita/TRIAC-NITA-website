/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({item}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="relative w-64 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <img
        src={item.profile_pic}
        alt="placeholder"
        className={`w-full h-full object-cover`}
      />
      <div
        className={`${
          isHovered ? "opacity-100 bg-gray-900 bg-opacity-75  text-white" : "opacity-0"
        } absolute inset-0 flex justify-center items-center transition-opacity duration-300`}
      >
        <div className=" text-white rounded">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm">{item.role}</p>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
    </div>
  );
};

export default Card;
