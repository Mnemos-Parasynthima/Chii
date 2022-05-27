const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class HugCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'hug',
      aliases: ['hugging', 'embrace', 'abrazo'],
      group: 'rp',
      memberName: 'hug',
	    description: 'Hugs someone.',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'target',
          prompt: 'Who to hug?',
          type: 'member'
        }
      ]
    });
  }

  async run(msg, { target }) {
    //const { url } = await fetch("https://api.waifu.pics/sfw/hug").then((res) => res.json());
    const response = await fetch('https://nekos.best/api/v2/hug');
    const json = await response.json();
    
    const embed = new MessageEmbed()
      .setTitle(`Hugging ${target.nickname || target.user.username}-nya!`)
      .setColor('#ff0000')
      .setImage(json.results[0].url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();
		
		msg.embed(embed);
  }
};