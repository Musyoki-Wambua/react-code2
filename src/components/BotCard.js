import React from "react";




function BotCard(props) {
  const { bot, handleBot, deleteBot } = props;
  return (
    <div className="col-3 p-1"  key={bot.id} onClick= {() => handleBot (bot)} >
        <div className="card h-100">
        <img src={bot.avatar_url} class="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"> {bot.name} </h5>
                <p className="card-text"> {bot.catchphrase} </p>
                <span>
                    Health: {bot.health}
                </span>
                <br/>
                <span>
                    Damage: {bot.damage}
                </span>
                <br/>
                <span>
                    Amour: {bot.armor}
                </span>
                <br/>
                <span>
                    Bot Class: {bot.bot_class}
                </span>
            </div>
            <button type="button" className="btn btn-danger" onClick={() => deleteBot(bot)}>X</button>
        </div>        
    </div>
  )
    
}

export default BotCard;
