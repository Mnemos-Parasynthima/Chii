const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
///const { URLSearchParams } = require('url');

module.exports = class ClassicalCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'classical',
      aliases: ['recompiece', 'piece'],
      group: 'fun',
      memberName: 'classical',
      description: 'Returns a classical to listen',
      //format: '<query>',
      throttling: {
        usages: 3,
        duration: 5,
      }/*,
      args: [
        {
          key: 'query',
          prompt: "Nya need to provide a term!",
          type: 'string'
        }
      ]*/
    });
  }

  async run(msg/*, { query }*/) {
    // const term = new URLSearchParams({term: query});

    // const { list } = await fetch(`https://api.openopus.org/${term}`).then(res => res.json());

    // if (!list.length) return msg.say(`No results found for **${query}**`);

    // const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

    // const [answer] = list;

    // const embed = new MessageEmbed()
    //   .setColor('#ff0000')
    //   .setTitle(answer.word)
    //   .setURL(answer.permalink)
    //   .addFields(
    //     { name: 'Definition', value: trim(answer.definition, 1024) },
    //     { name: 'Example', value: trim(answer.example, 1024) },
    //     { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
    // );

    // msg.embed(embed);

    const { works } = await fetch("https://api.openopus.org/dyn/work/random/").then(res => res.json());
    const i = Math.floor(Math.random() * works.length);

    const p = works[i];
    //console.log(`${p.title}; ${p.genre}; ${p.composer.name}`);

    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Random Classical Piece')
      .setFooter(`Request by: ${msg.author.username}`)
      .addFields(
        { name: 'Title', value: p.title },
        { name: 'Genre', value: p.genre },
        { name: 'Composer', value: p.composer.name },
    );

    msg.embed(embed);
  }
};