const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class PokeCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'poke',
      aliases: ['pk'],
      group: 'rp',
      memberName: 'poke',
	    description: 'Pokes someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: 'Who to poke?',
          type: 'member'
        }
      ]
    });
  }

  async run(msg, { target }) {
    const { url } = await fetch("https://api.waifu.pics/sfw/poke").then((res) => res.json());

    if (target.id === msg.client.user.id ) return msg.reply('Nyoooooo'); //TODO: make an embed
    
    const embed = new MessageEmbed()
      .setTitle(`Poking ${target.nickname || target.user.username}-nya!`)
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by waifu.pics`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};