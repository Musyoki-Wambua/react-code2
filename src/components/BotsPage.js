import React from "react";
import { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  //useState
  const [botArmy, setBotArmy] = useState([]);
  const [bot, setBot] = useState([]);

  //fetch data from API

  useEffect(() => {
    fetch("https://json-server-vercel-wdym-pjc31flqs-musyoki-wambua.vercel.app/bots")
      .then((resp) => resp.json())
      .then((bot) => setBot(bot));
  }, []);

  //addBotToTheArmy function
  const addBotToTheArmy = (selectedBot) => {
    if (!botArmy.find((bot) => bot.id === selectedBot.id)) {
      setBotArmy(botArmy.concat(selectedBot));
    }
  };


  //deleteBotPermanently function
  const deleteBotPermanently = (delBot) => {
    if (botArmy.find((bot) => bot === delBot)) {
      const filterArmy = bot.filter((bot) => bot !== delBot);
      const remainingArmy = botArmy.filter((bot) => bot !== delBot);

      setBot(filterArmy);
      setBotArmy(remainingArmy);

      fetch(`https://json-server-vercel-wdym-pjc31flqs-musyoki-wambua.vercel.app/${delBot.id}`, {
        method: "DELETE",
      });
    }
  };

  //removeBotFromTheArmy function
  const removeBotFromTheArmy = (removeBot) => {
    const listOfBots = botArmy.filter((bot) => bot !== removeBot);
    setBotArmy(listOfBots);
  };

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        removeBot={removeBotFromTheArmy}
        deleteBot={deleteBotPermanently}
      />
      <BotCollection
        bot={bot}
        addBot={addBotToTheArmy}
        deleteBot={deleteBotPermanently}
      />
    </div>
  );
}

export default BotsPage;
