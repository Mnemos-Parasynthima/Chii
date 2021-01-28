const { Command } = require('discord.js-commando');

module.exports = class HissCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'hiss',
      aliases: ['intimidate', 'intmdt'],
      group: 'misc',
      memberName: 'hiss',
      description: 'Hisses',
      guildOnly: true,
      format: '<@member>',
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
      // this gets the member from the user
      const user = msg.guild.member(taggedUser);
      if (user) {
        msg.say(`${user}, HIISSSSS!!!`);
      }
    }
  }
};