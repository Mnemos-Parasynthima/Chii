/*const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class PatCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'pat',
      aliases: ['pt', 'palmada'],
      group: 'rp',
      memberName: 'pat',
	    description: 'Pats someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: 'Who to pat?',
          type: 'member'
        }
      ]
    });
  }

  async run(msg, { target }) {
    const { url } = await fetch("https://nekos.life/api/v2/img/pat").then((res) => res.json());

    const embed = new MessageEmbed()
      .setTitle(`Patting ${target.nickname || target.user.username}-nya!`)
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};*/