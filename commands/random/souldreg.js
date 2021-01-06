const commando = require('discord.js-commando');

class SoulDreg extends commando.Command{
  constructor(client) {
    super (client, {
      name: 'souldreg',
      group: 'random',
      memberName: 'souldreg',
      description: 'Responds to the presence of SoulDregs',
      throttling: {
        usages: 2,
        duration: 5,
      },
    });
  }

  run(message) {
    message.reply('SoulDregs? Where? I\'ll destroy them right now-nya!');
  }
};
module.exports = SoulDreg;