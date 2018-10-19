const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    // let bicon = bot.user.displayAvatarURL;
    let bicon = "https://cdn.discordapp.com/attachments/343128944486252544/455794234545537025/frosty.jpg";
    let botembed = new Discord.RichEmbed()
    .setDescription("Frosty 15")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .addField("The bots name", bot.user.username)
    .addField("Bots creation date", bot.user.createdAt);
    return message.channel.send(botembed);
}

module.exports.help = {
    name: "info"
}
