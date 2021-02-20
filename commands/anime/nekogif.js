const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class NekoGIFCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nekosgif',
      aliases: ['nyagif', 'nekog', 'nekogif'],
      group: 'anime',
      memberName: 'nekosgif',
      description: 'Nya!!',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }

  async run(msg) {
    // Gets image data from api and sends as json
	  const { url } = await fetch("https://nekos.life/api/v2/img/ngif").then((res) => res.json());
    const embed = new MessageEmbed()
      .setTitle('Neko GIF')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
      
	  msg.embed(embed);
  }
};