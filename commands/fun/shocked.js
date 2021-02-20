const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { shocked } = require('../../assets/json/rp.json')

module.exports = class ShockedCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shocked',
      aliases: ['gasp', 'shckd'],
      group: 'fun',
      memberName: 'shocked',
      description: 'Gets shocked',
      guildOnly: true,
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const taggedUser = msg.mentions.users.first();

    if (!taggedUser) {
      msg.say('Huh?');
    }

    if (taggedUser) {
      const i = Math.floor(Math.random() * shocked.length);
      const embed = new MessageEmbed().setDescription('*SHOCKED*').setImage(shocked[i]);
      const user = msg.guild.member(taggedUser);
      if (user) {
        msg.embed(embed);
      }
    }
  }
};