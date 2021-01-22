//const fetch = require('node-fetch');
//const cheerio = require('cheerio');
//const YouTube = require('discord-youtube-api');
//const youtube = new YouTube(process.env.ytkey);

module.exports = {
  name: 'YouTube',
  description: 'Searches on YouTube [UNUSABLE]',
  aliases: ['yt', 'youtube', 'searchyt'],
  usage: '<query>',
  async execute(message, args) {
    message.reply('Command not supported yet!');
    /*
    if (!args.length) { message.reply('What do nya want me to search for-nya?!') }

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

    if (!url) return message.channel.send("No Results Found.");
    return message.channel.send(`https://youtube.com${url}`);
    */
  }
}