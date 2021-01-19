const Discord = require('discord.js');

module.exports = {
  name: 'fight',
  description: "Fights whoever is tagged",
  execute(message) {
    const taggedUser = message.mentions.users.first();

    if(!taggedUser) {
      message.channel.send("Who will I fight-nya?");
    }

    if(taggedUser) {
      const attacks = [
        'Budo 2: Claws Out', 'Kitty Kendo', 'Budo 5: Cat by Night', 'Budoka 6: Dance of Death',
        'Kasha\'s carriage', 'Bakeneko\'s Curse', 'Budo 3: Prey Sighted', 'Budo Cat'
      ];
      const attack = Math.floor(Math.random() * attacks.length);
      const reactions = ['UwU', '♡＾▽＾♡'
      ];
      const reaction = Math.floor(Math.random() * reactions.length);
      const target = taggedUser.username;
      const embed = new Discord.MessageEmbed()
        .setTitle(`SoulWorker Chii\'s Fight`)
        .setColor('#ff0000')
        .setDescription(`SoulWorker Chii uses \`${attacks[attack]}\` on ${taggedUser}. Instant one-hit K.O.!\n
          Chii: ${reactions[reaction]}`
        )
      ;
      message.channel.send(embed);
    }
  }
}