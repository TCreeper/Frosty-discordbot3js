const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  if(!args[0]) return message.channel.send("Please specify what you want me to say.");
  let botmessage = args.join(" ");
  try{
  message.delete()
  message.channel.send(botmessage)
  }catch(e){
    message.channel.send(botmessage)
  }
}
module.exports.help = {
  name: "say"
}
