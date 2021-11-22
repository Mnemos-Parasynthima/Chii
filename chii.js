const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const Canvas = require('canvas');
const { registerFont } = require('canvas');
registerFont('./assets/fonts/OpenSans-Regular.ttf', { family: 'sans-serif' });
const applyText = require('./structures/applyText');
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

// Collection for snipes
client.snipes = new Map();

//Allowing bot to be 24/7
const http = require('http');

http.createServer((req, res) => {
  res.write("I am the best SoulWorker.");
  res.end();
}).listen(8080);
//End code to allow 24/7 bot

client.on('ready', () => {
  console.log('SoulWorker Chii is now online.')

  client.user.setActivity('SoulWorker', { type: 'PLAYING' });
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['anime', 'Anime!!'],
    ['dev', 'Developer stuff'],
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

client.once('ready', () => console.log('Ready!'));
client.on('error', console.error);

client.on('messageDelete', async msg => {
  if (msg.author.bot) return;

  client.snipes.set(msg.channel.id, {
    content: msg.content,
    author: msg.author.tag,
    member: msg.member,
    image: msg.attachments.first() ? msg.attachments.first().proxyURL : null
  })
})

client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'announcements');
  if (!channel) return console.log('Channel not found');

  if (member.id === process.env.ownerId) {
    channel.send(`Welcome back Master! I missed you-nya!!`);
  } else {
    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./assets/imgs/canvas.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`Welcome to the server, ${member}-kun!`, attachment);
  }
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome' || ch.name === 'announcements');
  if (!channel) return console.log('Channel not found');

  if (member.id === process.env.ownerId) {
    channel.send(`Nyyoooooo!!! Trash you @MEE6!`);
  }
});

client.login(process.env.token);