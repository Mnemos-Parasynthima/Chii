const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class SkipCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      aliases: ['skp', 'next', 'nxt'],
      group: 'music',
      memberName: 'skip',
      description: 'Skips the current video/music.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  // Add styling, i.e. reactions
  async run(msg) {
    const { channel } = msg.member.voice;
    const serverQueue = this.client.queue.get(msg.guild.id);
    const embed = new MessageEmbed().setColor('#ff0000').setDescription('⏩ Skipped');

    if (!channel) return msg.say('Nyoin a voice chyannel!');
    if (msg.guild.me.voice.channel !== msg.member.voice.channel) return msg.say('Be with me!');

    if (!serverQueue) return msg.say('Nyothing is playing!');

    try {
      serverQueue.connection.dispatcher.end();
      return msg.embed(embed);
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
      return msg.say('Try again!');
    }
  }
}