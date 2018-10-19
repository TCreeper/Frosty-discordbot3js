const Discord = require("discord.js");
const moment = require("moment");
const fs = require("fs");
const ice2 = require("../ice2.json")

module.exports.run = (bot, message, args) => {

  let ice2 = JSON.parse(fs.readFileSync("./ice2.json", "utf8"));

  if (!ice2[message.author.id + message.guild.id]) ice2[message.author.id + message.guild.id] = {}
  if (!ice2[message.author.id + message.guild.id].ice) ice2[message.author.id + message.guild.id].ice = 0;
  if (!ice2[message.author.id + message.guild.id].lastDaily) ice2[message.author.id + message.guild.id].lastDaily = "NC";

  fs.writeFile("./ice2.json", JSON.stringify(ice2), (err) => {
    if (err) console.log(err);
  })

  if (ice2[message.author.id + message.guild.id].lastDaily != moment().format('L')) {
    ice2[message.author.id + message.guild.id].lastDaily = moment().format('L')
    ice2[message.author.id + message.guild.id].ice +- 500

    let ice2embed = new Discord.RichEmbed()
    .setColor("#007bff")
    .setAuthor(message.author.username)
    .setFooter(message.author.username + `  | ${bot.user.username} | daily | Made by TCreeper`, message.author.displayAvatarURL)
    .setTitle("Daily Reward!")
    .setDescription("500 Activness points have been added to your account!");

    message.channel.send(ice2embed)

  } else {
    let ice2failembed = new Discord.RichEmbed()
    .setColor("#007bff")
    .setAuthor(message.author.username)
    .setFooter(message.author.username + '  | Frosty | daily | Made by TCreeper', message.author.displayAvatarURL)
    .setTitle("Daily Reward!")
    .setDescription("You already collected your daily Reward! Collect the next one in " + moment().endOf('day').fromNow() + '.');

    message.channel.send(ice2failembed);
  }


  fs.writeFile("./ice2.json", JSON.stringify(ice2), (err) => {
    if (err) console.log(err);
  })

}



module.exports.help = {
  name: "daily"
}
