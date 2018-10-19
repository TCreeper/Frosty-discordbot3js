const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  //console.log({body})

  let dogembed = new Discord.RichEmbed()
  .setColor("#473011")
  .setTitle(":dog: Doggo!! :dog:")
  .setImage(body.url)
  .setFooter("Frosty | doggo | Made by TCreeper");

  message.channel.send(dogembed);

}

module.exports.help = {
    name: "doggo"
}
