const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop',
      aliases: ['repeat', 'l'],
      group: 'music',
      memberName: 'loop',
      description: 'Looping [CURRENTLY NOT WORKING]',
      guildOnly: true,
      format: '<enabled | disabled>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'status',
          prompt: 'Enable or disable?',
          type: 'string',
          oneOf: ['enable', 'disable']
        }
      ]
    });
  }

  // FIX
  async run(msg, { status }) {
    const { channel } = msg.member.voice;
    const embed = new MessageEmbed();
    if (!channel) {
      msg.say('Nya need to be in a chyannel');
    }
    const serverQueue = this.client.queue.get(msg.guild.id);
    try {
      if (!serverQueue) msg.say('Nyothing playing!');
      if (msg.guild.me.voice.channel !== msg.member.voice.channel) {
        msg.say('Be with me!');
      }

      if (!serverQueue.loop && status === 'enable') {
        serverQueue.loop = true;
        console.log(serverQueue);
        console.log(serverQueue.loop);
        embed.setColor('#00ff00').setDescription('🔁 Repeat is enyabled!');
        msg.embed(embed);
      } else if (serverQueue.loop && status === 'disable') {
        console.log(serverQueue);
        serveQueue.loop = false;
        console.log(serverQueue.loop);
        embed.setColor('#ff0000').setDescription('🔁 Repeat is disabled-nya!');
        msg.embed(embed);
      } else {
        return;
      }
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
      msg.say('Something\'s wrong...try again-nya!');
    }
  }
}