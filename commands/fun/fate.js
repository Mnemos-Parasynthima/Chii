const { Command } = require('discord.js-commando');

module.exports = class FateCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'fate',
      aliases: ['f'],
      group: 'fun',
      memberName: 'fate',
      description: 'Gives the fate',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }
  
  run(msg) {
    const fates = ['By the power of a SoulWorker, yes', 'To a SoulJunk, I say no', 'Be it true', 'idk', 'Your life will change', 'It seems so', 'Who knows...', 'Nyaaa~~~']; // Add more fates

    const i = Math.floor(Math.random() * fates.length);
    //console.log(fate);
    msg.reply(fates[i]);
  }
}