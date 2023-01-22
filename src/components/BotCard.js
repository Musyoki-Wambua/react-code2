import React from "react";


function BotCard(props) {
  const { bot, handleBot, deleteBot } = props;
  return (
    <div class="card"  key={bot.id} onClick= {() => handleBot (bot)} >
        <img src={bot.avatar_url} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title"> {bot.name} </h5>
                <p class="card-text"> {bot.catchphrase} </p>
            </div>
        <button className="ui mini red button" onClick={() => deleteBot(bot)}>x</button>
    </div>
  );
}

export default BotCard;
