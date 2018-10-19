const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
     let bicon = "https://cdn.discordapp.com/attachments/343128944486252544/455794234545537025/frosty.jpg";

    let botembed = new Discord.RichEmbed()
    .setTitle("Frosty 16 Commands List 1")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .setFooter("Frosty | Page 1/1 | help | Made by TCreeper")
    .addField("help", "Usage: 'help [1, 2, 3]' Displays what you are seeing right now")
    .addField("help2", "Same as 'help 2' but without a space :P Views more commands.")
    .addField("info", "Information about this bot")
    .addField("8ball", "Usage: '8ball <question>'Classic 8ball game")
    .addField("ice", "Shows amount of ice you have.")
    .addField("transferice", "Usage: 'transferice <user> <amount>' Give blocks of ice to people")
    .addField("level", "Views your XP, Level status")
    .addField("report", "Usage: 'report <user> <reason>' Lets you report people (Do NOT abuse it)")
    .addField("say", "MOD | Usage: 'say <word/sentence>' Tells the bot to tell what you tell it (xd)")
    .addField("clear", "MOD | Usage 'clear <1-100>' Clears the channel (bulk delete)")
    .addField("prefix", "MOD | Usage 'prefix <prefix>' Custom prefix. Default f>")
    .addField("serverinfo", "Information about this server")
    .addField("superserverinfo", "Super server information page 1")
    .addField("ssi2", "Super server information page 2")
    .addField("ssi3", "Super server information page 3")
    .addField("changelog", "Views the Changelog")
    .addField("ttssay", "MOD | Usage 'ttssay <word/sentence>' Same as 'say' but with tts enabled.")
    .addField("chsay", "MOD | Usage 'chsay <channel> <word/sentence>' Same as 'say' but sends it to a specific channel.")
    .addField("ping", "Just replies with pong. To see if the bot is alive.")
    .addField("daily", "Gives you 500 Activness points (more use coming soon)")
    .addField("kick", "MOD | Usage 'kick <user> <reason>' Kicks the user and sends a embed to a channel called 'mod'")
    .addField("ban", "MOD | Usage 'ban <user> <reason>' Bans the user and sends a embed to a channel called 'mod'")
    .addField("arole", "MOD | Usage 'arole <user> <role>' Gives a user role.")
    .addField("rrole", "MOD | Usage 'rrole <user> <role>' Removes a role from a user.")
    .addField("help2", "Second commands list");
    //.addField("warn", "MOD | Usage 'warn <user> <reason>' Warns a user and sends the warning to a channel called 'mod'")
    //.addField("doggo", "Gives you a random dog!")
  //  .addField("cat", "Gives you a random cat!")
  //  .addField("shibe", "Gibes you a random picture of a shiba inu!")
  //  .addField("sawboat", "Usage 'sawboat <reason>' Saws a boat.");

   // message.author.send(botembed)
   // message.channel.send("A list of commands have been sent to your DM's.")

   try{
       message.author.send(botembed)
       message.channel.send("A list of commands have been sent to your DM's.")
   }catch(e){
     message.channel.send("I cannot DM you!")
   }




}

module.exports.help = {
    name: "help"
}
