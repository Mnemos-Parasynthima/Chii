const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = {
  name: 'YouTube',
  description: 'Searches on YouTube [UNUSABLE]',
  aliases: ['yt', 'youtube', 'searchyt'],
  usage: '<query>',
  async execute(message, args) {
    message.reply('Command not supported yet!');
    /*
    if (!args.length) { message.reply('What do nya want me to search for-nya?!') }

    const url = await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(args.join("+"))}`)
      .then((res) => res.text())
      .then((html) => cheerio.load(html))
      .then(function find($) {
        const u = $(".yt-uix-tile-link").first().attr("href")   
      .catch(error => {
        console.error(error);
      })

        // No ads
        if(u && u.startsWith("http")) {
          $(".yt-uix-tile-link").first().remove();
          return find($);
        }
        return u;
      });

    console.log(`${url}, ${u}`);
    if(!url) { message.channel.send("No Results Found."); }
    message.channel.send(`https://youtube.com${url}`);
    */
  }
}