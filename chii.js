const fs = require('fs');
const Discord = require('discord.js');
/*
*Code for outside of repl.it
const { prefix, token } = require('./config.json');
*/

/*
* Code for repl.it
*/
const prefix = process.env.prefix;
const token = process.env.token;

const client = new Discord.Client();
client.commands = new Discord.Collection();

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

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

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

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 500;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the ${command.name} command-nya.`);
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an nyarror trying to execute that command-nya!');
  }
});
/*
// Creates an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Sends the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  // Does nothing if the channel wasn't found on this server
  if (!channel) {
        console.log('Could not welcome');
    return;
  }

  // Sends the message, mentioning the member
  channel.send(`Welcomnya to the server, ${member}-kun`);
});

// Test
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');

  if (!channel) {
    console.log('Could not say bye');
    return;
  }

  channel.send(`Bye bye, ${member}-kun`);
});*/

client.login(token);