const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
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
      }
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/poke").then((res) => res.json());
		const taggedUser = msg.mentions.users.first();
    //console.log(msg.mentions.users.first());
    const embed = new Discord.MessageEmbed()
      .setTitle(`Poking ${taggedUser.username}-nya!`)
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
		
		msg.embed(embed);
    // Add protection from Chii
  }
};