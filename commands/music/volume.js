const { Command } = require('discord.js-commando');

module.exports = class VolumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'volume',
      aliases: ['vl', 'vol', 'vlm'],
      group: 'music',
      memberName: 'volume',
      description: 'Set volume from 0 to 5.',
      guildOnly: true,
      format: '<number>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'vol',
          prompt: 'Enter a nyumber between 0 and 5!',
          type: 'integer',
        }
      ]
    });
  }

  // Need styling, i.e. reactions
  async run(msg, { vol }) {
    if (vol > 10 || vol < 0) {
      msg.reply('Enter a nyumber between 0 and 5!');
    } else {
      const channel = msg.member.voice;
      if (!channel) msg.say('Nyoin chnyannel!')

      if (msg.guild.me.voice.channel !== msg.member.voice.channel) {
        msg.say('Be with me!');
      }

      const serverQueue = this.client.queue.get(msg.guild.id);
      if (!serverQueue) msg.say('Nyothing playing!')
      if (!vol) msg.say(`Nya current volume is **${serverQueue.volume}**`)

      try {
        console.log(`Entering try block: ${vol}`);
        serverQueue.volume = vol;
        serverQueue.connection.dispatcher.setVolumeLogarithmic(vol / 5);
        msg.say(`I have set nya volume to **${vol}**`);
      } catch {
        msg.say('Try Nyagain!');
      }
    }
  }
}