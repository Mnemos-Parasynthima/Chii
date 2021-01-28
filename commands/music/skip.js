const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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
    const channel = msg.member.voice;
    const embed = new MessageEmbed().setColor('#ff0000').setDescription('⏩ Skipped');

    if (!channel) msg.say('Nyoin a voice chyannel!');
    if (msg.guild.me.voice.channel !== msg.member.voice.channel) {
      msg.say('Be with me!');
    }

    const serverQueue = this.client.queue.get(msg.guild.id);
    if (!serverQueue) msg.say('Nyothing is playing!');

    try {
      serverQueue.connection.dispatcher.end();
      msg.embed(embed);
    } catch {
      serverQueue.connection.dispatcher.end();
      await channel.leave();
      msg.say('Try again!');
    }
  }
}