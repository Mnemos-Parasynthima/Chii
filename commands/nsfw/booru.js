const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const booru = require('booru');

module.exports = class BooruCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'booru',
      aliases: ['b'],
      group: 'nsfw',
      memberName: 'booru',
      description: 'Searches images on booru',
      format: '<query>',
      ownerOnly: true,
      throttling: {
        usages: 2,
        duration: 5,
      },
      args: [
        {
          key: 'query',
          prompt: 'What should I look for-nya!',
          type: 'string'
        }
      ]
    });
  }

  //TODO: Fix something, not returning empty
  async run(msg, { query }) {

    const sites = ["danbooru", "yandere", "gelbooru", "rule34", "paheal", "realbooru", "e621.net", "hypnohub"];
    const i = Math.floor(Math.random() * sites.length);
    
    await booru.search(sites[i], [query], {limit: 5, random: true})
      .then(posts => {
        for (let post of posts) {
          const embed = new MessageEmbed()
            .setColor('#ff0000')
            .setImage(post.fileUrl)

          msg.embed(embed);
        }
      }).catch(err => {
        if (err.name === 'booruError') {
            return msg.say(`Nyo results found for **${query}**!`);
        } else {
            return msg.say(`Nyo results found for **${query}**!`);
        }
      });
  }
};