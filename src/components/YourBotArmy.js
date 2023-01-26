import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  const { botArmy, removeBot, deleteBot } = props;

  return (
    <div className="card h-100">
      <div className="row h-100">
        <div className="row">
          {botArmy.map((bot) => {
            return (
              <BotCard bot={bot} deleteBot={deleteBot} handleBot={removeBot} />
            );
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
