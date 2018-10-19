const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports.run = (bot, message, args) => {

    message.delete().catch();
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("No.");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("User not found.");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't warn that person.");
    let reason = args.join(" ").slice(22)
    if (!reason) return message.channel.send("Please add a reason");

    if(!warns[wUser.id]) warns [wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err)  =>  {
        if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
     .setDescription("No getting warned in the halls.")
     .setAuthor(message.author.username)
     .setColor("#fffa00")
     .setThumbnail("https://cdn.discordapp.com/attachments/442059025367171085/460108340479918080/inthehalls.png")
     .addField("User warned:", `${wUser} with ID "${wUser.id}".`)
     .addField("Warned In Channel:", message.channel)
     .addField("Number of warnings the user has:", warns[wUser.id].warns)
     .addField("Reason of the warning:", reason);

    let warnchannel = message.guild.channels.find(`name`, "mod");
    if(!warnchannel) return message.reply("#mod not found. Please create one and make sure that the bot has permission to read it");

    warnchannel.send(warnEmbed);

    //if(warns[wUser.id].warns == 2){
    //    message.guild.member(wUser).kick(reason);
    //    message.channel.send(`${wUser.tag} has been kicked automatically because he/she has over 3 warnings.`)
    //}
}

module.exports.help = {
    name: "warn"
}
