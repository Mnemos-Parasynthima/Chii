const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class AnimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'anime',
      aliases: ['waifu'],
      group: 'anime',
      memberName: 'anime',
      description: 'Anime-nya!',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }

  async run(msg) {
    const response = await fetch('https://nekos.best/api/v2/waifu');
    const json = await response.json();
    const embed = new MessageEmbed()
      .setTitle('Anime!')
      .setColor('#ff0000')
      .setImage(json.results[0].url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.best`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
      
	  msg.embed(embed);
  }
};