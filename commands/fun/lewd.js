const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { lewd } = require('../../assets/json/rp')

module.exports = class LewdCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lewd',
      aliases: ['thatslewd'],
      group: 'fun',
      memberName: 'lewd',
      description: 'Oh how lewd!',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setImage((lewd[Math.round(Math.random() * (lewd.length - 1))])

    msg.embed(embed);
  }
};