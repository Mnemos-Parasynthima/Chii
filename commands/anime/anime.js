const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');


module.exports = class AnimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'anime',
      aliases: ['awwnime', 'moe'], // Change aliases
      group: 'anime',
      memberName: 'anime',
      description: 'Animenya! [Note: Repetitive images]',
      throttling: {
        usages: 3,
        duration: 3,
      }
    });
  }

  run(msg) {

  }
};