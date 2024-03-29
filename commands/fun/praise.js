const { Command } = require('discord.js-commando');

module.exports = class PraiseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'praise',
      aliases: ['prs'],
      group: 'fun',
      memberName: 'praise',
      description: 'Praises whoever is mentioned, if not, Chii.',
      format: '[member]',
      throttling: {
        usages: 5,
        duration: 5,
      }
    });
  }

  run(msg) {
    const taggedUser = msg.mentions.users.first();

    if (!taggedUser) return msg.say('Yay! I love getting praised, nya!');

    const user = msg.guild.member(taggedUser);
    if (user) msg.say(`You deserved being praised, ${user}, nya!`);
  }
};