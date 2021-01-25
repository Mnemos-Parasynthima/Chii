const { Command } = require('discord.js-commando');
//const fetch = require('node-fetch');
//const cheerio = require('cheerio');
//const YouTube = require('discord-youtube-api');
//const youtube = new YouTube(process.env.ytkey);

module.exports = class YTCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'YouTube',
      aliases: ['yt', 'youtube', 'searchyt'],
      group: 'fun',
      memberName: 'yt',
      description: 'Searches on YouTube [UNAVAILABLE]',
      format: '<query>',
      throttling: {
        usages: 2,
        duration: 10,
      },
      args: [
        {
          key: 'query',
          prompt: 'What do nya want me to search for-nya?!',
          type: 'string'
        }
      ]
    });
  }

  async run(msg, { query }) {
    msg.reply('Command not available!');
    /*
    const video = 
    const url = await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(args.join("+"))}`)
      .then((res) => res.text())
      .then((html) => cheerio.load(html))
      .then(function find($) {
        const u = $(".yt-uix-tile-link").first().attr("href");
        console.log(u);
        // Sometimes if video is an AD it sends garbage
        // so instead remove it from the DOM and search again
        if (u && u.startsWith("http")) {
          $(".yt-uix-tile-link").first().remove();
          console.log(find($));
          return find($);
        }
        console.log(u);
        return u;
      })
      .catch(error => {
        console.error(error);
      });

    if (!url) return msg.say("No Results Found.");
    return mesg.say`https://youtube.com${url}`);
    */
  }
};


module.exports = {



  usage: '<query>',
  async execute(message, args) {

  }
}