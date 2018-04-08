const Discord = require('discord.js');
const client = new Discord.Client();

let guildBot = "";
let newRole = "";
let roleRules = "";
let modoRole = ""

client.on('ready', () => {

  console.log('I am ready!');

});

client.on('guildMemberAdd', member => {
  guildBot = member.guild;
  newRole = guildBot.roles.find("name", "Arriviste");
  member.addRole(newRole);
});

client.on('message', message => {

  guildBot = message.member.guild;
  newRole = guildBot.roles.find("name", "Arriviste");
  roleRules = guildBot.roles.find("name", "Membre");
  modoRole = guildBot.roles.find("name", "Modération")

  if(message.author.bot) return;

  if(message.member.roles.has('369152444955099138')) return;

  if(message.channel.id === '432300235470012438'){

    if(message.content === "J'ai lu et j'adhère aux règles de ce serveur."){

      message.channel.bulkDelete(99);
      message.member.addRole(roleRules);
      message.member.removeRole(newRole);
      message.channel.send('VOUS NE PASSEREZ PAS!');
      console.log(message.author.username + " est entré sur le serveur !");

    } else {

      message.channel.send('VOUS NE PASSEREZ PAS!');

    }

  }

});

client.login(process.env.BOT_TOKEN);
