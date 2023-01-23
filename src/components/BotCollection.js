import React from "react";
import BotCard from "./BotCard";
// import BotSpecs from "./BotSpecs";

function BotCollection(props) {
  const { bot, addBot, deleteBot } = props;

  return (
    <div className="container mt-4">
        <>
            <h2>Bots Collection</h2>
        </>
        <div className="row">
        {bot.map((bot) => {
          return (
            <>
              <BotCard bot={bot} handleBot={addBot} deleteBot={deleteBot} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
