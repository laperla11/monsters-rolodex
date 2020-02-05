import React from "react";
import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.length > 0
      ? monsters.map(monster => <Card key={monster.id} monster={monster} />)
      : "loading"}
  </div>
);

export default CardList;
