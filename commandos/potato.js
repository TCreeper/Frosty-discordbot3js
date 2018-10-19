const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://rra.ram.moe/i/r?type=potato`);

  //console.log({body})

  let potatoembed = new Discord.RichEmbed()
  .setColor("#473011")
  .setTitle(":potato: POTATOOO!!! :potato:")
  .setImage(`https://cdn.ram.moe/${body.path.replace("/i/", "")}`)
  .setFooter(`Frosty | potato | Powered by ram.moe`);

  message.channel.send(potatoembed);

}

module.exports.help = {
    name: "potato"
}
