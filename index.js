const botconfig = require("./botconfig.json"); //locates botconfig
const Discord = require("discord.js"); //starts discord.js
const fs = require("fs"); //starts fs
const bot = new Discord.Client({disableEveryone: true}); //idk
bot.commands = new Discord.Collection(); //makes bot commands equal to a collection
let ice = require("./ice.json"); //locates ice
let xp = require("./xp.json"); //locates xp
let cooldown = new Set(); //cooldown
let cdseconds = 5; //cooldown time

console.log("----------------NEW-SESSION-----------------")

fs.readdir("./commandos/", (err, files) => { //read commands

    if(err) console.log(err); //log the error if there is a problem with reading

    let jsfile = files.filter(f => f.split(".").pop() === "js") //idk
    if(jsfile.length <= 0){ //if it cant find commands folder
        console.log("Couldn't find commandos."); //log message to console
        return; //end
    }

    jsfile.forEach((f, i) => { //for every file
        let props = require(`./commandos/${f}`); //require files
        console.log(`(${f} loaded.)`); //log that the command is loaded.
        bot.commands.set(props.help.name, props); //get bot commands ready
    });
});



bot.on('ready', () => { //when the bot is ready
    console.log(`Logged in as ${bot.user.tag}! Serving ${bot.users.size} people, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); // response to console

    bot.user.setActivity(`everything | f>help`, {type: "listening"}); //set the bots activity
  });


  bot.on("message", function(message) { //log ever single message
    console.log('[' + message.guild.name + ' -- ' + message.author.username + ': ' + message.content + ']'); //log them
    });

  bot.on("message", message => {  //when there is a message
      if(message.author.bot) return; //if its a bot cancell
      if(message.channel.type === "dm") return;    //I have gotten rid of this because why not :)

      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8")); //set prefixes.json
      if(!prefixes[message.guild.id]){ //if server id doesnt exist in the json file
        prefixes[message.guild.id] = { //make it
          prefixes: botconfig.prefix //then set a prefix to it
        };
      }

      if(!ice[message.author.id]){ //same thing as prefix but instead of prefix its ice
        ice[message.author.id] = {
          ice: 0
        };
      }

      let iceAmt = Math.floor(Math.random() * 15) + 1;  //I actually have no idea what theese does.
      let baseAmt = Math.floor(Math.random() * 15) + 1;
      //console.log(`${iceAmt} ; ${baseAmt}`);
      if(iceAmt === baseAmt){
        ice[message.author.id] = {
          ice: ice[message.author.id].ice + iceAmt
        };
      fs.writeFile("./ice.json", JSON.stringify(ice), (err) => {
        if(err) console.log(err)
      });

      //let iceEmbed = new Discord.RichEmbed()
      // .setAuthor(message.author.username)
       //.setcolor("#ffff00")
       //.addField("💸", `${iceAmt} ice added!`);

    //  message.channel.send(iceEmbed).then(msg => {msg.delete(5000)});
      }

      let xpAdd = Math.floor(Math.random() * 7) + 8;
      //console.log(xpAdd);

      if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1,
        };
      }

      let curxp = xp[message.author.id].xp;
      let curlvl = xp[message.author.id].level;
      let nxtLvl = xp[message.author.id].level * 1000;
      xp[message.author.id].xp = curxp + xpAdd;

      if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor("#59ff00")
        .addField("New Level", curlvl + 1);

        //message.channel.send(lvlup).then(msg => {msg.delete(10000)});


      }

      fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
      });

      let prefix = prefixes[message.guild.id].prefixes;
      if(!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply("Please wait 5 seconds between commands.")
      }
      if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(message.author.id);
      }

      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);

      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot, message, args);

      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, cdseconds * 1000)

  });

bot.login(botconfig.token);
