const { Command } = require('discord.js-commando');

module.exports = class HolidayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'react',
      aliases: ['rct'],
      group: 'misc',
      memberName: 'react',
      description: `React! using \`wut\`, \`happy\`, \`chii\`, \`emilia\`, or \`puck\`.`,
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

    const addReaction = (msg, args) => {
      switch (args) {
        case 'wut':
          const chiiwut = this.client.emojis.cache.find(emoji => emoji.name === "chiiwut");
          msg.react(chiiwut);
          break;
        case 'happy':
          const chiihappy = this.client.emojis.cache.find(emoji => emoji.name === "chiihappy");
          msg.react(chiihappy);
          break;
        case 'chii':
          const chii = this.client.emojis.cache.find(emoji => emoji.name === "chii");
          msg.react(chii);
          break;
        case 'emilia': // add more emilias
          const emilia = this.client.emojis.cache.find(emoji => emoji.name === "drunkemilia");
          msg.react(emilia);
          break;
        case 'puck':
          const puck = this.client.emojis.cache.find(emoji => emoji.name === "emoji_1");
          msg.react(puck);
          break;
      }
    }

    await msg.delete();

    const fetched = await msg.channel.messages.fetch({ limit: 1});
    if (fetched && fetched.first()) {
      addReaction(fetched.first(), args);
    }

  }
}