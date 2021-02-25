const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { death, title } = require('../../assets/json/isekai.json');

module.exports = class IsekaiCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'isekai',
      aliases: ['isk'],
      group: 'rp',
      memberName: 'isekai',
	    description: 'Isekai\'s someone.',
      guildOnly: true,
      format: '[member]',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: '',
          type: 'member',
          default: ''
        }
      ]
    });
  }

   run(msg, { target }) {
    const embed = new MessageEmbed().setColor('#ff0000');
    const i = Math.floor(Math.random() * death.length);
    const j = Math.floor(Math.random() * title.length);
    const harem = Math.floor(Math.random() * 200) + 0;

    if (!target) {
      embed.setAuthor(`${msg.author.username}'s isekai report`, msg.author.avatarURL())
        .setDescription(`**${msg.author.username}** ${death[i]} with a harem of **${harem}** as **${title[j]}**`);
      return msg.embed(embed);
    }
		
    if (target.id === msg.client.user.id ) return msg.reply('Why would I isekai nyaself!');

    if (target) {
      embed.setAuthor(`${target.user.username}'s isekai report`, target.user.avatarURL())
        .setDescription(`**${target.user.username}** ${death[i]} with a harem of **${harem}** as **${title[j]}**`);
      return msg.embed(embed);
    }
  }
};