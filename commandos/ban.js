const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    if(!bUser) return message.channel.send("User not found.");
    let bReason = args.join(" ").slice(22);
    if (!bReason) return message.channel.send("Please add a reason.");

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No.");
    if(bUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That person cannot be banned.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("BAN! rip")
    .setColor("#ff0000")
    .addField("User Banned:", `${bUser} with ID ${bUser.id}`)
    .addField("User banned by:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Channel the user has been banned:", message.channel)
    .addField("Time user has been banned:", message.createdAt)
    .addField("Reason of the kick:", bReason)
    .setFooter(`RIP.`);

    let banchannel = message.guild.channels.find(`name`, "mod")
    if(!banchannel) return message.channel.send("Need #mod channel to work. If #reports already exists give the bot permission.");

    banchannel.send(banEmbed);
    message.guild.member(bUser).ban(bReason);
}

module.exports.help = {
    name: "ban"
}
