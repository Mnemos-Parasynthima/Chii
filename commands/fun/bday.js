const { Command } = require('discord.js-commando');

module.exports = class BdayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bday',
      aliases: ['bd', 'cumple', 'tanjo-bi'],
      group:'fun',
      memberName: 'bday',
      description: 'No description necessary',
      format:'<member>'
    });
  }

  run(msg) {
    const taggedTarget = msg.mentions.users.first();

    if(!taggedTarget) {
      msg.channel.send("Who's birthday-nya?");
    }

    if(taggedTarget) {
      msg.say(`BY THE POWER VESTED IN ME, SOULWORKER CHII, AND MY MASTER, WE WISH YOU HAPPY BIRTHDAY, ${taggedTarget}-KUN!`);
    }
  }
}