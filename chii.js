const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
  comandPrefix: process.env.prefix, // Use config.json for outside of replit
  owner: process.env.ownerId, // Use config.json for outside of replit
})

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

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['anime', 'Anime'],
    ['fun', 'Fun'],
    ['misc', 'Miscellaneous'],
    ['mod', 'Moderation'],
    ['nsfw', 'NSFW'],
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

client.login(process.env.token);