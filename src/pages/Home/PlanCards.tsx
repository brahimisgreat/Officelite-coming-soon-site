import React from "react";

export const PlanCards = ({
  title,
  price,
  peruser,
  essential,
  memory,
  perk,
}) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <h1>{price}</h1>
        <p>{peruser}</p>
      </div>
      <div>
        <p>{essential}</p>
        <p>{memory}</p>
        <p>{perk}</p>
      </div>
      <button>Get Started</button>
    </div>
  );
};
