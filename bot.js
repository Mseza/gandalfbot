const Discord = require('discord.js');
const client = new Discord.Client();

let guildBot = "";
let newRole = "";
let roleRules = "";
let modoRole = ""

client.on('ready', () => {

  console.log('I am ready!');

});

client.on('message', message => {

  guildBot = message.member.guild;
  newRole = guildBot.roles.find("name", "Membre certifié");
  modoRole = guildBot.roles.find("name", "Modération");
  membersRole[] = "";

  if(message.author.bot) return;
  
  if(message.content === "AddRoles"){
   
    membersRole = message.guild.modoRole.members;
    for(int i = 0; i < membersRole.length; i++){
     
      membersRole[i].addRole(newRole);
      
    }
    
  }

  if(message.member.roles.has('369152444955099138')) {
    
    if(message.content === '!clear'){
    
      message.channel.bulkDelete(99);
      message.channel.send('VOUS NE PASSEREZ PAS!');
      
    } else {
  
    return;
      
    }

  }
    
  if(message.channel.id === '432300235470012438'){

    if(message.content === "J'ai lu et j'adhère aux règles de ce serveur."){

      message.channel.bulkDelete(99);
      message.member.addRole(newRole);
      message.channel.send('VOUS NE PASSEREZ PAS!');
      console.log(message.author.username + " est entré sur le serveur !");

    } else {

      message.channel.send('VOUS NE PASSEREZ PAS!');

    }

  }

});

client.login(process.env.BOT_TOKEN);
