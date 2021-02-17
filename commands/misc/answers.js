const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AnswersCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'answers',
      aliases: ['asw', 'respuestas', 'kotae', 'kaito'],
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
          key: 'nya',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]    
    });
  }

  run(msg, { nya }) {
    const owner = process.env.ownerId;
    //let keys = ['nya', 'pls', 'please', 'chii', 'emiliabestgirl'];

    if (msg.author.id === owner) { return msg.reply('Ooh, my Nyaster. You know the answers. \nI thought you trusted me to give the answers :('); }

    if (nya === 'chii') {
      const embed = new MessageEmbed().setTitle('Answers!').setColor('ff00ff').setFooter('Answers may be different as per my myaster\'s handwriting');

      embed.setDescription('6) -9x^4+3; 7) 2x-1 | 2x-3; 8) x^2-6x+16 | x^2+4; 9) 16x^2+24x+9 | 4x^2+3; 10) x^2-9');

      return msg.embed(embed);
    } else if (nya !== 'chii') {
      return msg.reply('Ha, that won\'t affect me, you weakling, nya!')
    } else {
      return msg.reply('Nyo!');
    }
  }
}