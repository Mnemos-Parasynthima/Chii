const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pause',
      aliases: ['ps', 'pausa'],
      group: 'music',
      memberName: 'pause',
      description: 'Pauses the current music/video.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    const { channel } = msg.member.voice;
    const serverQueue = this.client.queue.get(msg.guild.id);
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setDescription('⏸ **PAUSED**')

    try {
      if (!channel) {
        msg.say('Nyoin a voice chyannel!')
        return;
      }
      if (msg.guild.me.voice.channel !== msg.member.voice.channel) {
        msg.say('Be with me!');
        return;
      }

      if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause(true);
        msg.embed(embed);
      } else { msg.say('Nyothing\'s playing!'); }
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
    }
  }
}