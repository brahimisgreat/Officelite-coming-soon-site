import React from "react";

export const PlanCards = ({
  title,
  price,
  peruser,
  essential,
  memory,
  perk,
  color,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className={`${color}`}>
        <h3 className="text-xl font-bold">{title}</h3>
        <h1 className="text-6xl font bold">{price}</h1>
        <p >{peruser}</p>
      </div>
      <div>
        <p>{essential}</p>
        <p>{memory}</p>
        <p>{perk}</p>
      </div>
      <button className="h-14 w-44 rounded-3xl">Get Started</button>
    </div>
  );
};
