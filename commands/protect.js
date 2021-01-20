module.exports = {
  name: 'protect',
  description: 'Protects owner of Chii',
  aliases: [''],
  execute(message) {
    const owner = process.env.ownerId;
    if (message.author.id !== owner) {
      message.reply('You\'re not my love and my Master-nya!');
    } else if (message.author.id === owner) {
      message.channel.send('Stop bullying my master-nya! I\'ll fight you!');
    } else {
      return;
    }
  }
}