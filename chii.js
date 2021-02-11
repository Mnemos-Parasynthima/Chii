const { CommandoClient } = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');

const client = new CommandoClient({
  commandPrefix: process.env.prefix,
  owner: process.env.ownerId,
});

// Collection for music
client.queue = new Map();

/******
 * Code for outside of replit 
 * const { prefix, owner, token } = require('./config.json');
 ******/

//Allowing bot to be 24/7
var http = require('http');

http.createServer(function(req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

client.on('ready', () => {

  console.log('SoulWorker Chii is now online.')

  client.user.setActivity('chii', { type: 'LISTENING' });

});
//End code to allow 24/7 bot

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['anime', 'Anime!!'],
    ['fun', 'Fun stuff'],
    ['misc', 'Misc!!'],
    ['mod', 'Moderation'],
    ['music', 'Music'],
    ['nsfw', 'NSFW!!'],
    ['rp', 'Roleplaying']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    help: false,
    prefix: false,
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
});
client.on('error', console.error);

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general' || ch.name === 'announcements');
  if (!channel) {
        console.log('Channel not found');
    return;
  }

  if (member === client.owner) {
    channel.send(`@everyone Welcome back Master! I missed you-nya!!`);
  } else {
    channel.send(`@everyone Welcomnya to the server, ${member}-kun!`); // TODO: Add more styling
  }
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general' || ch.name === 'announcements');
  if (!channel) {
        console.log('Channel not found');
    return;
  }

  if (member === client.owner) {
    channel.send(`Nyyoooooo!!!`);
  } /* else {
    const embed = new Discord.MessageEmbed() //TODO: Embed styling
      .s
  } */
});

client.login(process.env.token);