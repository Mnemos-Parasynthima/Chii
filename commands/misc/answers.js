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

    if (msg.author.id === owner) { return msg.reply('Ooh, my Nyaster. You know the answers. \nI thought you trusted me to give the answers :('); }

    if (nya === 'nya' || nya === 'nekonya') {
      const embed = new MessageEmbed().setTitle('Answers!').setColor('ff00ff').setFooter('Answers may be different as per my myaster\'s handwriting');

      embed.setDescription('What answers? My Mnyaster hasn\'t told me anything yet.');

      msg.embed(embed);
    } else if (nya === 'pls' || nya === 'please') {
      msg.reply('Ha, "please" won\'t affect me, you weakling, nya!')
    } else {
      msg.reply('Nyo!');
    }
  }
}