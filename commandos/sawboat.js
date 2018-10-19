const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
  if(!args[0]) return message.channel.send("Usage 'sawboat <reason>'");
  let boatmessage = args.join(" ");

  let boatembed = new Discord.RichEmbed()
  .setTitle(`To show you ${boatmessage}, I SAWED THIS BOAT IN HALF!`)
  .setImage("https://thumbs.gfycat.com/HighlevelEmbellishedAsiantrumpetfish-size_restricted.gif")
  .setFooter("Frosty | sawboat | Made by TCreeper");

  message.channel.send(boatembed);
}

module.exports.help = {
  name: "sawboat"
}
