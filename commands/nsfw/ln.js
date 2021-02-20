const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class LewdNekosCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nsfwn',
      aliases: ['lneko', 'lewdneko'],
      group: 'nsfw',
      memberName: 'nsfwn',
      description: 'NYA!!',
      throttling: {
        usages: 3,
        duration: 1,
      }
    });
  }

  async run(msg) {
    const owner = process.env.ownerId;
    const endpoints = ['lewd', 'eron'];
    const i = Math.floor(Math.random() * endpoints.length);

    if (msg.author.id === owner && msg.channel.nsfw === true) {
      const { url } = await fetch(`https://nekos.life/api/v2/img/${endpoints[i]}`)
        .then((res) => res.json());

      const embed = new MessageEmbed()
        .setTitle('Lewd Neko(s)')
        .setColor('#ff0000')
        .setImage(url)
        .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
        .setTimestamp();
        
      msg.embed(embed);
    } else if (msg.author.id !== owner) { msg.reply('Command not allowed');
    } else if (msg.channel.nsfw === false) { msg.reply('Illegal!');
    } else { return; }
  }
};