const Discord = require("discord.js")
const Report = require("../models/report.js");
const mongoose = require("mongoose");

module.exports.run = (bot, message, args) => {
  message.delete();
  mongoose.connect('mongodb://localhost/Reports');
  let rUser = message.mentions.members.first();
  if(!rUser) return message.reply("User not found.");
  let rreason = args.slice(1).join(" ");
  if (!rreason) return message.reply("Please specify a reason.");

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Report")
  .setColor("#007bff")
  .setThumbnail("https://cdn.discordapp.com/attachments/343128944486252544/455794234545537025/frosty.jpg")
  .addField("Reported User:", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported by:", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", rreason);



  const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    reason: rreason,
    rUsername: message.author.username,
    rID: message.author.id,
    time: message.createdAt

  });

  report.save()
  .then(result => console.log(result))
  .catch(error => console.log(err));

  message.reply("User reported.")

  let reportschannel = message.guild.channels.find(`name`, "mod");
  if(!reportschannel) return message.channel.send("Channel named 'mod' not found. Please make one or make sure I have access to it.");
  reportschannel.send(reportEmbed);
}


module.exports.help = {
    name: "report"
}
