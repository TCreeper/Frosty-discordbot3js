const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {text} = await superagent
  .get(`http://api.yomomma.info/`);

  message.channel.send(`_${JSON.parse(text).joke}_`);

}

module.exports.help = {
    name: "yomamma"
}
