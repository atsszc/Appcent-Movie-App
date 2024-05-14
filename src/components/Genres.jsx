import React from "react";

const Genres = ({ index, name, length }) => {
  return (
    <div className="flex gap-4 text-2xl text-textColor hover:text-white ">
      <div>{name}</div>
      <div className="text-textColor">{index + 1 !== length ? "/" : ""}</div>
    </div>
  );
};

export default Genres;
