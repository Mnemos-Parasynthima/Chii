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
    let fates = ['By the power of a SoulWorker, yes', 'To a SoulDreg, I say no', 'Be it true', 'idk', 'Your life will change', 'It seems so', 'Who knows...']; // Array of possible fates

    const fate = Math.floor(Math.random()*fates.length);
    //console.log(fate);
    msg.reply(fates[fate]);
  }
}