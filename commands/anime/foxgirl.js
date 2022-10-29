const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class FoxGirlCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'foxgirl',
      aliases: ['fxgrl', 'kitsune'],
      group: 'anime',
      memberName: 'foxgirl',
      description: 'Awooo',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }

  async run(msg) {
    const response = await fetch('https://nekos.best/api/v2/kitsune');
    const json = await response.json();
    const embed = new MessageEmbed()
      .setTitle('Kitsune')
      .setColor('#ff0000')
      .setImage(json.results[0].url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.best`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
      
	  msg.embed(embed);
  }
};