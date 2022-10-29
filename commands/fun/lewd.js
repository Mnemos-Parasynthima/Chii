const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { lewd } = require('../../assets/json/rp.json')

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
    const i = Math.floor(Math.random() * lewd.length);
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setImage(lewd[i]);

    msg.embed(embed);
    //console.log(lewd[i]);
  }
};