const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  if(!args[0]) return message.channel.send("Please specify a channel, or use say instead of chsay.");
  if(!args[1]) return message.channel.send("Please specify what you want me to say.");

  let sychannel2 = args.slice(0).join(" ");
    //console.log("SYCHANNEL2 = ", sychannel2)

  let sychannel = sychannel2.replace(/ .*/,'');
    //console.log("SYCHANNEL = ", sychannel)

  let botmessage = args.slice(1).join(" ");
    //console.log("BOT MESSAGE = ", botmessage)

  let saychannel = message.guild.channels.find(`name`, sychannel);
    //console.log("SAYCHANNEL = ", saychannel)

  if(!saychannel) return message.channel.send("Channel not found.");

  message.delete().catch();
  saychannel.send(botmessage);
}

module.exports.help = {
  name: "chsay"
}
