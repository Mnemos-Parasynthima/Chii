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
      format: '<member>',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const taggedUser = msg.mentions.users.first();

    if (taggedUser.id === msg.client.user.id ) return msg.reply('. . .');

    if (!taggedUser) return msg.say('Huh?');

    if (taggedUser) {
      //const user = msg.guild.member(taggedUser);
      //if (user) {
        msg.say(`${taggedUser}, HIISSSSS!!!`);
      //}
    }
  }
};