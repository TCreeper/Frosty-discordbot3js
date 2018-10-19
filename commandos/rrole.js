const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No.")
  let reMember =  message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!reMember) return message.reply("User not found.");
  let reole = args.join(" ").slice(22);
  if(!reole) return message.reply("Specify a role.");
  let gReole = message.guild.roles.find(`name`, reole);
  if(!gReole) return message.reply("Role not found.");

  if(reMember.roles.has(gReole.id));
  await(reMember.removeRole(gReole.id));

  try{
      await reMember.send(`You have been removed from the role "${gReole.name}".`)
  }catch(e){
     message.channel.send(`<@${reMember.id}> has been removed from the role "${gReole.name}".`)
  }

}

module.exports.help = {
    name: "rrole"
}
