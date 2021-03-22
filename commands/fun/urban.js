const { MessageEmbed} = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = class UrbanCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'urban',
      aliases: ['define', 'defintion'],
      group: 'fun',
      memberName: 'urban',
      description: 'Search up a word on Urban dictionary.',
      format: '<query>',
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'query',
          prompt: "Nya need to provide a word!",
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { query }) {
    const term = querystring.stringify({ term: query });

    const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${term}`).then(res => res.json());

    if (!list.length) {
      return msg.say(`No results found for **${query}**`);
    }

    const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

    const [answer] = list;

    const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addFields(
        { name: 'Definition', value: trim(answer.definition, 1024) },
        { name: 'Example', value: trim(answer.example, 1024) },
        { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
    );

    msg.embed(embed);
  }
}