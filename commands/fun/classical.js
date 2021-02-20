const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class ClassicalCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'classical',
      aliases: ['recompiece', 'piece'],
      group: 'fun',
      memberName: 'classical',
      description: 'Returns a classical to listen',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    // https://wiki.openopus.org/wiki/Using_the_Open_Opus_API#List_random_works
    // Gets image data from api and sends as json
	  //const { title } = await fetch("https://api.openopus.org/dyn/work/random", { method: 'POST', headers: { recommendedwork:1, genre: "Orchestral" } }).then((res) => res.json());

    //console.log(title);
  }
};