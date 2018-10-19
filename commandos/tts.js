const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  if(!args[0]) return message.channel.send("Please specify what you want me to say.", {
    tts: true
  });
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage , {
    tts: true
  });
}

module.exports.help = {
  name: "ttssay"
}
