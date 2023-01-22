import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  const { botArmy, removeBot, deleteBot } = props;

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <centre>
            <h2>
                Your Bot Army
            </h2>
        </centre>
        <div className="row bot-army-row">
          {botArmy.map((bot) => {
            return (
              <BotCard 
              bot={bot} 
              deleteBot={deleteBot} 
              handleBot={removeBot} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
