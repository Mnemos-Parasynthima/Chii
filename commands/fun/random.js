module.exports = {
  name: 'randnum',
  description: 'Sends a random number from 1 to 100',
  aliases: ['random', 'number'],
  execute(message) {
    const num = Math.floor(Math.random() * 100) + 1;
    message.channel.send(num);
  }
}