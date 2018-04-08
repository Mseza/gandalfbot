const Discord = require('discord.js');
const client = new Discord.Client();

let guildBot = "";
let newRole = "";
let roleRules = "";

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

  if(message.author.bot) return;

  if(message.channel.id === '432300235470012438'){

    if(message.content === "J'ai lu et accepté les règles !"){

      message.member.addRole(roleRules);
      message.member.removeRole(newRole);

    } else {

      message.reply('VOUS NE PASSEREZ PAS!');

    }

  }

});

client.login(process.env.BOT_TOKEN);
