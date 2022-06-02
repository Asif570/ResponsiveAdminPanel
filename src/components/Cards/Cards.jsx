import React from "react";
import "./Cards.css";
import { CardsData } from "../../data/data";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="Cards">
      {CardsData.map((cart, id) => {
        return (
          <div className="ParentContainer">
            <Card
              title={cart.title}
              color={cart.color}
              barValue={cart.barValue}
              png={cart.png}
              value={cart.value}
              series={cart.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
