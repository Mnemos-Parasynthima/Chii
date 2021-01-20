module.exports = {
  name: 'fate',
  description: 'Gives the fate',
  aliases: ['f'],
  execute(message) {
    let fates = ['By the power of a SoulWorker, yes', 'To a SoulDreg, I say no', 'Be it true', 
      'idk', 'Your life will change', 'It seems so', 'Who knows...'
    ]; //Array of possible fates

    const output = Math.floor(Math.random()*fates.length);
    message.reply(fates[output]);

  }
};