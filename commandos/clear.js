const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  let x = parseFloat(args[0])
  console.log(x)
  if (x > 99) return message.channel.send("Please choose a value lower than 100 .");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  if(!x) return message.channel.send("Please specify amount of messages to clear.");
  message.channel.bulkDelete(x)
  message.channel.send(`Cleared ${x} messages.`);

}

module.exports.help = {
  name: "clear"
}
