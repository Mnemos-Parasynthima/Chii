const { Command } = require('discord.js-commando');

module.exports = class ReactCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'react',
      aliases: ['rct', 'reaccionar', 'hanno'],
      group: 'misc',
      memberName: 'react',
      description: `React! using \`worried\`, \`angry\`, \`mad3\`, \`furious\`, \`scared\`, \`wut\`, or \`smile\`.`,
      guildOnly: true,
      format: '<reaction>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'args',
          prompt: 'What should I react with-nya!?',
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { args }) {
    try {
      const sendReaction = (msg, args) => {
        switch (args) {
          case 'worried':
            const chiiworried = this.client.emojis.cache.find(emoji => emoji.name === "chiiworried");
            msg.say(`<:${chiiworried.name}:${chiiworried.id}>`);
            break;
          case 'angry':
            const chiiangry = this.client.emojis.cache.find(emoji => emoji.name === "chiiangry");
            msg.say(`<:${chiiangry.name}:${chiiangry.id}>`);
            break;
          case 'mad3':
            const chiimad3 = this.client.emojis.cache.find(emoji => emoji.name === "chiimad3");
            msg.say(`<:${chiimad3.name}:${chiimad3.id}>`);
            break;
          case 'furious':
            const chiifurious = this.client.emojis.cache.find(emoji => emoji.name === "chiifurious");
            msg.say(`<:${chiifurious.name}:${chiifurious.id}>`);
            break;
          case 'scared':
            const chiiscared = this.client.emojis.cache.find(emoji => emoji.name === "chiiscared");
            msg.say(`<:${chiiscared.name}:${chiiscared.id}>`);
            break;
          case 'wut':
            const chiiwut = this.client.emojis.cache.find(emoji => emoji.name === "chiiwut");
            msg.say(`<:${chiiwut.name}:${chiiwut.id}>`);
            break;
          case 'smile':
            const chiismile = this.client.emojis.cache.find(emoji => emoji.name === "chiismile");
            msg.say(`<:${chiismile.name}:${chiismile.id}>`);
            break;
          default:
            msg.reply('That\'s nyot a reaction! Type \`chii help react\` to knyow the reactions!');
            break;
        }
      }
      sendReaction(msg, args);
    } catch (error) {
      console.error(error);
      msg.say('Something wrong happened!');
    }

  }
}