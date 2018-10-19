const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {
  if (!message.channel.nsfw) return message.channel.send(`🔞 This is a SFW channel..| Requested by <@${message.author.id}>`);
  let {body} = await superagent
  .get(`http://api.obutts.ru/butts/0/1/random`);

  //console.log({body})

  let nsfwaembed = new Discord.RichEmbed()
  .setColor("#ff0000")
  .setTitle("NSFW")
  .setImage(`http://media.obutts.ru/${body[0].preview}`)
  .setFooter(`Frosty | n_butts | Powered by oboobs.ru | Requested by ${message.author.tag}`);

  message.channel.send(nsfwaembed);

}

module.exports.help = {
    name: "n_butts"
}
