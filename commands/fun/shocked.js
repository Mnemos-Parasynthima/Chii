const { Command } = require('discord.js-commando');

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
      // this gets the member from the user
      const user = msg.guild.member(taggedUser);
      if (user) {
        msg.say(`*SHOCKED*`);
      }
    }
    //TODO: Return anime gif
  }
};