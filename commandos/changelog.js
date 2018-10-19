const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    // let bicon = bot.user.displayAvatarURL;
    let bicon = "https://cdn.discordapp.com/attachments/343128944486252544/455794234545537025/frosty.jpg";
    let botembed = new Discord.RichEmbed()
    .setDescription("Changelog: Frosty 15")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .addField("Version: 1.5.1", "Running on stable 1.5.1 version.")
    .addField("Added Activness points!", "use 'daily' command for Activness points. Use for this command coming soon")
    .addField("rip", "Fixed broken kick and ban commands.")
    .addField("give dem powahrs", "Added arole and rrole commands! Now you can give people roles. (Or remove them).")
    .addField("no runnin in da halls", "Fixed 'warn' command!")
    .addField("so cuteee", "Added commands 'dog' and 'cat' and 'shibe' !! ")
    .addField("slap that flextape", "new command 'sawboat'")
    .addField("Pong!", "Updated the ping command");

    return message.channel.send(botembed);
}

module.exports.help = {
    name: "changelog"
}
