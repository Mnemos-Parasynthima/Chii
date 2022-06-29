const { Command } = require('discord.js-commando');

module.exports = class ReactCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'react',
      aliases: ['rct', 'reaccionar', 'hanno'],
      group: 'misc',
      memberName: 'react',
      description: `React! using \`think\`, \`sip\`, \`yorka\`, \`ephnel\`, \`arua\`, \`shrug\`, \`sad\`, \`proud\`, \`happy\`, \`denied\`, \`wut\`, \`yes\`, \`lazy\`, \`baka\`, \`angry\`, \`mad\``,
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
          case 'think':
            const think = this.client.emojis.cache.find(emoji => emoji.name === "think");
            msg.say(`<:${think.name}:${think.id}>`);
            break;
          case 'sip':
            const sip = this.client.emojis.cache.find(emoji => emoji.name === "sip");
            msg.say(`<:${sip.name}:${sip.id}>`);
            break;
          case 'yorka':
            const yorka = this.client.emojis.cache.find(emoji => emoji.name === "yorka");
            msg.say(`<:${yorka.name}:${yorka.id}>`);
            break;
          case 'ephnel':
            const ephnel = this.client.emojis.cache.find(emoji => emoji.name === "ephnel");
            msg.say(`<:${ephnel.name}:${ephnel.id}>`);
            break;
          case 'arua':
            const arua = this.client.emojis.cache.find(emoji => emoji.name === "arua");
            msg.say(`<:${arua.name}:${arua.id}>`);
            break;
          case 'shrug':
            const shrug = this.client.emojis.cache.find(emoji => emoji.name === "shrug");
            msg.say(`<:${shrug.name}:${shrug.id}>`);
            break;
          case 'sad':
            const sad = this.client.emojis.cache.find(emoji => emoji.name === "sad");
            msg.say(`<:${sad.name}:${sad.id}>`);
            break;
          case 'proud':
            const proud = this.client.emojis.cache.find(emoji => emoji.name === "proud");
            msg.say(`<:${proud.name}:${proud.id}>`);
            break;
          case 'happy':
            const happy = this.client.emojis.cache.find(emoji => emoji.name === "happy");
            msg.say(`<:${happy.name}:${happy.id}>`);
            break;
          case 'denied':
            const denied = this.client.emojis.cache.find(emoji => emoji.name === "denied");
            msg.say(`<:${denied.name}:${denied.id}>`);
            break;
          case 'wut':
            const wut = this.client.emojis.cache.find(emoji => emoji.name === "wut");
            msg.say(`<:${wut.name}:${wut.id}>`);
            break;
          case 'yes':
            const yes = this.client.emojis.cache.find(emoji => emoji.name === "yes");
            msg.say(`<:${yes.name}:${yes.id}>`);
            break;
          case 'lazy':
            const lazy = this.client.emojis.cache.find(emoji => emoji.name === "lazy");
            msg.say(`<:${lazy.name}:${lazy.id}>`);
            break;
          case 'baka':
            const bakathink = this.client.emojis.cache.find(emoji => emoji.name === "baka");
            msg.say(`<:${baka.name}:${baka.id}>`);
            break;
          case 'angry':
            const angry = this.client.emojis.cache.find(emoji => emoji.name === "angry");
            msg.say(`<:${angry.name}:${angry.id}>`);
            break;
          case 'mad':
            const mad = this.client.emojis.cache.find(emoji => emoji.name === "mad");
            msg.say(`<:${mad.name}:${mad.id}>`);
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