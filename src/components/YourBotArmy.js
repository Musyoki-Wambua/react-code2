import React from "react";

function YourBotArmy(props) {
  const { botArmy, removeBotFromTheArmy } = props;

  return (
    <div className="container">
        <center>
            <h2>Your Bot Army</h2>
        </center>
        <div className="row">
            {botArmy.map((bot) => {
                return (
                  <div className="col-3 p-1" key={bot.id}>
                    <div className="ui four column grid">
                      <img src={bot.avatar_url} class="card-img-top" alt="" />
                      <div className="card-body">
                        <h5 className="card-title"> {bot.name} </h5>
                        <p className="card-text"> {bot.catchphrase} </p>
                        <span>Health: {bot.health}</span>
                        <br />
                        <span>Damage: {bot.damage}</span>
                        <br />
                        <span>Amour: {bot.armor}</span>
                        <br />
                        <span>Bot Class: {bot.bot_class}</span>
                      </div>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          removeBotFromTheArmy(bot);
                        }}
                      >
                        Delete Bot From Your Army
                      </button>
                    </div>
                  </div>
                );
            })}
        </div>
    </div>
  );
}

export default YourBotArmy;
