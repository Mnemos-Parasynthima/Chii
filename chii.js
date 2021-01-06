const commando = require('discord.js-commando');
const path = require('path');
const client = new commando.Client({
  commandPrefix: process.env.token,
  owner: process.env.ownerID,
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['fun', 'Fun Commands'],
    ['moderation', 'Commands for moderation'],
    ['music', 'Music Commands'],
    ['random', 'Random Commands'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

//Allowing bot to be 24/7
var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

client.on('ready', () => {

  console.log('SoulWorker Chii is now online.')

  client.user.setActivity( 'chii', { type: 'LISTENING' });

});
//End code to allow 24/7 bot

client.once('ready', () => {
  console.log('Ready!');
});

client.on('error', console.error);


client.login(process.env.token);