const commando = require('discord.js-commando');
const path = require('path');
const client = new CommandoClient({
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
  .registerCommandsIn(path.join(_dirname, 'commands'));

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

//Listens for commands
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return message.reply('Nya?');

  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('I can\'t execute that command inside DMs-nya!');
  }

  if (command.args && !args.length) {
    let reply = `Nya didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper nyasage would be: ${prefix}${command.name} ${command.usage}`;
    }

    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an nyarror trying to execute that command-nya!');
  }
});

client.login(process.env.token);