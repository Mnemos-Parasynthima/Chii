const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AnswersCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'answers',
      aliases: ['asw'],
      group: 'misc',
      memberName: 'answers',
      description: `Nya.`,
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'pls',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]    
    });
  }

  run(msg, { pls }) {
    if (pls === 'pls' || pls === 'please') {
      const embed = new MessageEmbed().setTitle('Answers!').setColor('ff00ff').setFooter('Answers may be different as per my myaster\'s handwriting');

      embed.setDescription('*1)* x/9y^4;*2)* 1/((x-2)(x-3);*3)* (3(x-3)*x^2+2x-1)/((x-5)^2 * (x+4) * (x+5));*4)* 1/x-1;5) 1/((x+2)(x-3)) \n Restrictions! *1)* 0; *2)* -2, 2, 3; *3)* 5, -4, -5; *4)* -1, 1; *5)* -3, 3, -2, 2 \n According to my myaster!');

      msg.embed(embed);
    } else {
      msg.reply('Nyo!');
    }
  }
}