module.exports = {
  name: 'bday',
  description: 'No description necessary',
  aliases: ['bd'],
  usage: '<@member>',
  execute(message) {
    const taggedTarget = message.mentions.users.first();

    if(!taggedTarget) {
      message.channel.send("Who's birthday-nya?");
    }

    if(taggedTarget) {
      message.channel.send(`BY THE POWER VESTED IN ME, SOULWORKER CHII, AND MY MASTER, WE WISH YOU HAPPY BIRTHDAY, ${taggedTarget}-KUN!`);
    }
  }
}