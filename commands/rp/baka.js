const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class BakaCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'baka',
      aliases: ['bk'],
      group: 'rp',
      memberName: 'baka',
	    description: 'Calls someone baka.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: 'Who?',
          type: 'member'
        }
      ]
    });
  }

  async run(msg, { target }) {
    const response = await fetch('https://nekos.best/api/v2/baka');
    const json = await response.json();
    
    if (target.id === msg.client.user.id ) return msg.reply('I\'m nyo baka, you are!');

    const embed = new MessageEmbed()
      .setTitle(`Baka ${target.nickname || target.user.username}-nya!`)
      .setColor('#ff0000')
      .setImage(json.results[0].url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.best`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};