const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
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
      }
    });
  }

   run(msg) {
    const embed = new MessageEmbed().setColor('#ff0000');
		const tagged = msg.mentions.users.first();
		
    if (tagged.id === process.env.selfId ) return msg.reply('Why would I attack nyaself, baka-nya!');

    if (!tagged) {
      embed.setDescription('. . .');
      return msg.embed(embed);
    }

    if (tagged) {
      const i = Math.floor(Math.random() * attack.length);
      embed.setDescription(`**${msg.author.username}** attacks **${tagged.username}**`).setImage(attack[i]);
	    msg.embed(embed);
    }
  }
};