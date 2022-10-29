const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const prefix = process.env.prefix;

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['commands', 'hlp', 'cmd'],
      group: 'mod',
      memberName: 'help',
      description: 'Lists all of my commands or nynfo about a specific command-nya.',
      format: '<command name>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'args',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]
    });
  }

  run(msg, { args }) {
    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setThumbnail(msg.client.user.displayAvatarURL())
      .setTimestamp()
    const commands = msg.client.registry.commands; // TODO: Destructure??

    if (!args) {
      embed.setTitle('SoulWorker Chii\'s Commands')
        .setDescription('I am SoulWorker Chii Aruel, one of the best SoulWorkers from West Cloudreamnya. Nya only Master is Umbre0n-sama, but I suppose I\'ll accept your commands-nya. UwU')
        .setFooter(`Send \`${prefix} help [command name]\` for more info onya a command-nya!`)
        .addFields(
          {
            name: 'Anime',
            value: `\`anime\`, \`foxgirl\`, \`nekos\``
          },
          {
            name: 'Developer',
            value: `\`emulate\``
          },
          {
            name: 'Fun',
            value: `\`avatar\`, \`bday\`, \`fate\`, \`holiday\`, \`kaomoji\`, \`thatslewd\`, \`poll\`, \`praise\`, \`random\`, \`rate\`, \`say\`, \`shocked\`, \`temperature\`, \`urban\``
          },
          {
            name: 'Miscelleanous',
            value: `\`fight\`, \`hiss\`, \`react\`, \`useless\``
          },
          {
            name: 'Moderation',
            value: `\`ban\`, \`info\`, \`help\`, \`kick\`,  \`server\`, \`slash\`, \`snipe\`, \`user-info\``
          },
          {
            name: 'Music',
            value: `\`pause\`, \`play\`, \`queue\`, \`remove\`, \`resume\`, \`skip\`, \`stop\`, \`volume\``
          },
          {
            name: 'Roleplaying',
            value: `\`baka\`, \`hug\`, \`isekai\`, \`pat\`, \`poke\`, \`slap\`, \`smug\`, \`stare\`, \`tickle\``
          }
        )

      return msg.embed(embed)
        .then(() => {
          if (msg.channel.type === 'text') return;
        })
        .catch(error => {
          console.error(`Could not send help to ${message.author.tag}.\n`, error);
          msg.reply('It seems like I can\'t send!');
        });
    }

    const name = args.toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) return msg.reply('Nyat\'s not a valid command-nya!');

    //console.log(command);
    const { duration, usages } = command.throttling;
    const rate = duration / usages;
    const cooldown = Math.round(10 * rate) / 10; 

    embed.setTitle(`Chii's \`${command.name}\` command help`)
      .setDescription(`**Parameters:** \`<> - required; [] - optional\` \n\n${command.description}\n **Aliases:** ${command.aliases.join(', ')}\n **Usage:** \`${prefix} ${command.name} ${command.format || ''}\`\n **Cooldown:** ${cooldown} second(s)`);
      
    msg.embed(embed);
  }
};