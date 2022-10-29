const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class SlapCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'slap',
      aliases: ['slp'],
      group: 'rp',
      memberName: 'slap',
	    description: 'Slaps someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: 'Who to slap?',
          type: 'member'
        }
      ]
    });
  }

  async run(msg, { target }) {
    const { url } = await fetch("https://api.waifu.pics/sfw/slap").then((res) => res.json());

    if (target.id === msg.client.user.id ) return msg.reply('Why would I slap nyaself, baka-nya!');

    const embed = new MessageEmbed()
      .setTitle(`Slapping ${target.nickname || target.user.username}-nya!`)
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by waifu.pics`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};