const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot,message,args) => {

  let {body} = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`);

  //console.log({body})
//  console.log(body)
  // let shibeembed = new Discord.RichEmbed()
  //.setColor("#473011")
  //.setTitle(":dog: Shibe! :dog:")
  //.setImage(body)
  //.setFooter("Frosty | shibe | Made by TCreeper");

  message.channel.send({
    files: body
  });

}

module.exports.help = {
    name: "shibe"
}
