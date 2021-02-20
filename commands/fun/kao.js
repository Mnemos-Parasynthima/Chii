const { Command } = require('discord.js-commando');
const kaomojis = require('../../assets/json/kaomoji');

module.exports = class KaoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'kaomoji',
      aliases: ['kao', 'moji', 'jpemoji'],
      group: 'fun',
      memberName: 'kaomoji',
      description: 'A japanese emoji.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  run(msg) {
    const i = Math.floor(Math.random() * kaomojis.length);
    msg.say(kaomojis[i]);
  }
};