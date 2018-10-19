const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
  if (!message.channel.nsfw) return message.channel.send(`🔞 This is a SFW channel..| Requested by <@${message.author.id}>`);
  let {body} = await superagent
  .get(`https://nekobot.xyz/api/image?type=neko`);

  //console.log({body})

  let nsfwaembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("NSFW")
  .setImage(body.message)
  .setFooter(`Frosty | n_neko | Powered by Nekobot API | Requested by ${message.author.tag}`);

  message.channel.send(nsfwaembed);

}

module.exports.help = {
    name: "n_neko"
}
