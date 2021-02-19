//const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
/**
 * Code for outside of replit
 * const { token, prefix, ownerId } = require('./config.json');
 */

const client = new CommandoClient({
  commandPrefix: process.env.prefix,
  owner: process.env.ownerId,
});

// Collection for music
client.queue = new Map();

//Allowing bot to be 24/7
const http = require('http');

http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
}).listen(8080);
//End code to allow 24/7 bot

client.on('ready', () => {

  console.log('SoulWorker Chii is now online.')

  client.user.setActivity('chii', { type: 'LISTENING' });

});

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

  if (member.id === process.env.ownerId) {
    channel.send(`Welcome back Master! I missed you-nya!!`);
  } else {
    channel.send(`Welcomnya to the server, ${member}-kun!`); // TODO: Add more styling
  }
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general' || ch.name === 'announcements');
  if (!channel) {
        console.log('Channel not found');
    return;
  }

  if (member.id === process.env.ownerId) {
    channel.send(`Nyyoooooo!!! Trash you @MEE6!`);
  }
});

client.login(process.env.token);