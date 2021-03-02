const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { stare } = require('../../assets/json/rp.json');

module.exports = class StareCommand extends Command {
  constructor(client) {
    super(client, {
	    name: 'stare',
      aliases: ['ji'],
      group: 'rp',
      memberName: 'stare',
	    description: 'Staring...',
      throttling: {
        usages: 3,
        duration: 5
      }
    });
  }

  run(msg) {
    const i = Math.floor(Math.random() * stare.length);
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setDescription("*Jjjiiiiiiiiiiiiiiii*")
      .setImage(stare[i]);
	  msg.embed(embed);
  }
}