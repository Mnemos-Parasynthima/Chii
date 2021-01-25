const Discord = require('discord.js');
const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');

module.exports = class OppaiCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'oppai',
      aliases: ['boobs', 'opp'],
      group: 'nsfw',
      memberName: 'oppai',
      description: 'No description necessary',
      throttling: {
        usages: 3,
        duration: 1,
      }
    });
  }

  async run(msg) {
    const owner = process.env.ownerId;
    if (msg.author.id === owner && msg.channel.nsfw === true) {
    const { url } = await fetch('https://nekos.life/api/v2/img/boobs')
      .then((res) => res.json());
      const embed = new Discord.MessageEmbed()
        .setTitle('Oppai')
        .setColor('#ff0000')
        .setImage(url)
        .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
        .setTimestamp()
      msg.embed(embed);
    } else if (msg.author.id !== owner) { msg.reply('Command not allowed');
    } else if (msg.channel.nsfw === false) { msg.reply('Illegal!');
    } else { return; }
  }
};