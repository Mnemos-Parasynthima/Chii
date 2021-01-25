const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class BakaCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'baka',
      aliases: ['bk'],
      group: 'misc',
      memberName: 'baka',
	    description: 'Calls someone baka.',
      guildOnly: true,
      format: '<@member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/baka").then((res) => res.json());
		const taggedUser = msg.mentions.users.first();
    console.log(msg.mentions.users.first());
    const embed = new Discord.MessageEmbed()
      .setTitle(`Baka ${taggedUser.username}-nya`)
      .setColor('#ff0000')
      .setImage(url)
		
		msg.embed(embed);
  }
};