const { Command } = require('discord.js-commando');

module.exports = class BdayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bday',
      aliases: ['bd', 'cumple', 'tanjo-bi'],
      group:'fun',
      memberName: 'bday',
      description: 'No description necessary',
      format:'<member>',
      args: [
        {
          key: 'target',
          prompt: '',
          type: 'member',
          default: ''
        }
      ]
    });
  }

  run(msg, { target }) {
    if(!target) {
      msg.say("Who's birthday-nya?");
    }

    if(target) {
      msg.say(`BY THE POWER VESTED IN ME, SOULWORKER CHII ARUEL, AND MY MASTER, WE WISH YOU HAPPY BIRTHDAY, ${target}-KUN!`);
    }
  }
}