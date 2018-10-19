const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    if(!kUser) return message.channel.send("User not found.");
    let kReason = args.join(" ").slice(22);
    if (!kReason) return message.channel.send("Please add a reason.");

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No.");
    if(kUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That person cannot be kicked.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick! OOF")
    .setColor("#ff8800")
    .addField("User Kicked:", `${kUser} with ID [${kUser.id}]`)
    .addField("User kicked by:", `<@${message.author.id}> with ID [${message.author.id}]`)
    .addField("Channel the user has been kicked:", message.channel)
    .addField("Time user has been kicked:", message.createdAt)
    .addField("Reason of the kick:", kReason)
    .setFooter(`RIP.`);

    let kickchannel = message.guild.channels.find(`name`, "mod");
    if(!kickchannel) return message.channel.send("Need #mod channel to work. If #reports already exists give the bot permission.");

    message.guild.member(kUser).kick(kReason);
    kickchannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
}
