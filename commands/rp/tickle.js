const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class TickleCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'tickle',
      aliases: ['tckl', 'cosquillas'],
      group: 'rp',
      memberName: 'tickle',
	    description: 'Tickles someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: 'Who to tickle?',
          type: 'member'
        }
      ]
    });
  }

  async run(msg, { target }) {
    const { url } = await fetch("https://nekos.life/api/v2/img/tickle").then((res) => res.json());
  
    if (target.id === msg.client.user.id ) return msg.reply('I can\'t tickle myself!');

    const embed = new MessageEmbed()
      .setTitle(`Tickling ${target.nickname || target.user.username}-nya!`)
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};