const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { attack } = require('../../assets/json/rp.json');

module.exports = class AttackCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'attack',
      aliases: ['attck', 'ataca'],
      group: 'rp',
      memberName: 'attack',
	    description: 'Attacks someone (some mild agressiveness).',
      guildOnly: true,
      format: '<member>',
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
		
    if (target.id === msg.client.user.id ) return msg.reply('Why would I attack nyaself, baka-nya!');

    if (!target) {
      embed.setDescription('. . .');
      return msg.embed(embed);
    }

    if (target) {
      const i = Math.floor(Math.random() * attack.length);
      embed.setDescription(`**${msg.author.username}** attacks **${target.nickname || target.user.username}**`).setImage(attack[i]);
	    msg.embed(embed);
    }
  }
};