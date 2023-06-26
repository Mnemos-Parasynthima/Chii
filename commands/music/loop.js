const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop',
      aliases: ['repeat', 'l'],
      group: 'music',
      memberName: 'loop',
      description: 'Loops the queue',
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

  async run(msg, { status }) {
    msg.say("The `loop` command is currently not functional, nya! It will remain in service until the upcoming major update-nya!")
    // const { channel } = msg.member.voice;
    // const serverQueue = this.client.queue.get(msg.guild.id);
    // const embed = new MessageEmbed();

    // if (!channel) {
    //   msg.say('Nya need to be in a chyannel');
    // }

    // try {
    //   if (!serverQueue) return msg.say('Nyothing playing!');
    //   if (msg.guild.me.voice.channel !== msg.member.voice.channel) return msg.say('Be with me!');

    //   if (!serverQueue.loop && status === 'enable') {
    //     serverQueue.loop = true;
    //     console.log(serverQueue);
    //     console.log(serverQueue.loop);
    //     embed.setColor('#00ff00').setDescription('🔁 Repeat is enyabled!');
    //     return msg.embed(embed);
    //   } else if (serverQueue.loop && status === 'disable') {
    //     console.log(serverQueue);
    //     serveQueue.loop = false;
    //     console.log(serverQueue.loop);
    //     embed.setColor('#ff0000').setDescription('🔁 Repeat is disabled-nya!');
    //     return msg.embed(embed);
    //   } else {
    //     return;
    //   }
    // } catch {
    //   serverQueue.connection.dispatcher.end();
    //   await channel.leave();
    //   return msg.say('Something\'s wrong...try again-nya!');
    // }
  }
}