const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
  if (args.length < 2) return message.channel.send("You must supply text for Yoda");

  let {text} = await superagent
  .get(`http://yoda-api.appspot.com/api/v1/yodish?text=${encodeURIComponent(args.join(" ").toLowerCase())}`);

  message.channel.send(JSON.parse(text).yodish);

}

module.exports.help = {
    name: "yoda"
}
