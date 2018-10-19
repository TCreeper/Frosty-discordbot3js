const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
     let bicon = "https://cdn.discordapp.com/attachments/343128944486252544/455794234545537025/frosty.jpg";

    let nsfwbembed = new Discord.RichEmbed()
    .setTitle("Frosty 16 Nasty commands list.")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .setFooter("Frosty | nasty | Made by TCreeper")
    .addField("WARNING", "(SOME OF) These commands are NSFW. These will only work on NSFW channels.")
    .addField("n_4k", "NSFW | 4K porn")
    .addField("n_anal", "NSFW | Anal porn")
    .addField("n_boobs", "NSFW | Boobs")
    .addField("n_butts", "NSFW | Butts")
    .addField("n_gif", "NSFW | GIF")
    .addField("n_thighs", "NSFW | Thighs")
    .addField("n_gw", "NSFW | Gonewild")
    .addField("n_hentai", "NSFW | Hentai")
    .addField("n_holo", "NSFW | Holo")
    .addField("n_lewdneko", "NSFW | Lewd neko")
    .addField("n_neko", "NSFW | Neko")
    .addField("n_lewdkitsune", "NSFW | Lewd kitsune")
    .addField("n_kemonomini", "NSFW | kemonomini")
    .addField("n_h-anal", "NSFW | Hentai anal")
    .addField("n_kanna", "NSFW | Kanna")
    .addField("n_pussy", "NSFW | Pussy");



    try{
      message.author.send(nsfwbembed)
      message.channel.send("A list of nasty commands have been sent to your DM's.")
    }catch(e){
        message.channel.send("I cannot DM you!")
    }



}

module.exports.help = {
    name: "nasty"
}
