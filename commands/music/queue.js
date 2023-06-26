const { MessageEmbed, splitMessage, escapeMarkdown } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class QueueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'queue',
      aliases: ['q', 'list'],
      group: 'music',
      memberName: 'queue',
      description: 'Shows the array of requested music.',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  // StYliNG
  run(msg) {
    msg.say("The `queue` command is currently not functional, nya! It will remain in service until the upcoming major update-nya!")
    // const serverQueue = this.client.queue.get(msg.guild.id);
    
    // if (!serverQueue) return msg.say('Nyothing playing!');

    // let description = "";
    // for (let i = 0; i < serverQueue.musics.length; i++) {
    //   description += `**${i}.** [${serverQueue.musics[i].title.substring(0,40)}](${serverQueue.musics[i].url}) | \`${serverQueue.musics[i].duration}\`\n`;
    // }

    // const embed = new MessageEmbed()
    //   .setTitle('Music Queue')
    //   .setDescription(description)
    //   .setColor('#ff0000');

    // const splitDescription = splitMessage(description, {
    //   maxLength: 2048,
    //   char: '\n',
    //   prepend: '',
    //   append: ''
    // });

    // splitDescription.forEach(async (m) => {
    //   embed.setDescription(m);
    //   msg.embed(embed);
    // });
  }
}