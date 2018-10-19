const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
     let bicon = "https://cdn.discordapp.com/attachments/343128944486252544/455794234545537025/frosty.jpg";

    let bot2embed = new Discord.RichEmbed()
    .setTitle("Frosty 16 Commands List 2")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .setFooter("Frosty | Page 1/1 | help | Made by TCreeper")
    .addField("warn", "MOD | Usage 'warn <user> <reason>' Warns a user and sends the warning to a channel called 'mod'")
    .addField("doggo", "Gives you a random dog!")
    .addField("cat", "Gives you a random cat!")
    .addField("shibe", "Gibes you a random picture of a shiba inu!")
    .addField("sawboat", "Usage 'sawboat <reason>' Saws a boat.")
    .addField("nasty", "List of bad commands")
    .addField("owo", "OwO What's this?")
    .addField("potato", "Potatooo!!!")
    .addField("yoda", "Mmmmmhm")
    .addField("yomamma", "Yo Mamma!");


    try{
     message.author.send(bot2embed)
     message.channel.send("A list of commands have been sent to your DM's.")
    }catch(e){
        message.channel.send("I cannot DM you!")
    }




}

module.exports.help = {
    name: "help2"
}
