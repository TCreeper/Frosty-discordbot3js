const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);

  //console.log({body})

  let dogembed = new Discord.RichEmbed()
  .setColor("#473011")
  .setTitle(":cat: Cat!! :cat:")
  .setImage(body.file)
  .setFooter(`${bot.user.username} | cat | Made by TCreeper`);

  message.channel.send(dogembed);

}

module.exports.help = {
    name: "cat"
}
