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
      },
      args: [
        {
          key: 'user',
          prompt: '',
          type: 'member',
          default: ''
        }
      ]
    });
  }

  run(msg, { user }) {
    if (!user) return msg.say('Huh?');

    const i = Math.floor(Math.random() * shocked.length);
    const embed = new MessageEmbed().setDescription('*SHOCKED*').setImage(shocked[i]);
    msg.embed(embed);
  }
};