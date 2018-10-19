const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://rra.ram.moe/i/r?type=owo`);

  //console.log({body})

  let potatoembed = new Discord.RichEmbed()
  .setColor("#007bff")
  .setTitle("OwO what's this")
  .setImage(`https://cdn.ram.moe/${body.path.replace("/i/", "")}`)
  .setFooter(`Frosty | owo | Powered by ram.moe`);

  message.channel.send(potatoembed);

}

module.exports.help = {
    name: "owo"
}
