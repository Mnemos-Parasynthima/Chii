module.exports = {
  name: 'fate',
  description: 'Gives the fate',
  ownerOnly: true,
  execute(message) {
    let fates = ['By the power of a SoulWorker, yes', 'To a SoulDreg, I say no', 'Be it true', 'idk', 'You\'re life will change'], i = 0; //Array of possible fates

    i++;
    console.log(fates.length);
    console.log(i);
    console.log(i % fates.length);
    console.log(fates[i % fates.length]);
    //const fate = fates[i++ % fates.length];
    //console.log(fate);
    
    //message.reply(`${fate}`);
    
  }
};