/*if (message.content.startsWith(prefix + "av")) {
    let target = message.mentions.users.size === 0 ? message.author : message.guild.member(message.mentions.users.first()).user;
    return message.channel.send(target.avatarURL);
  }*/

exports.run = (client, message) => {
  let target = message.mentions.users.size === 0 ? message.author : message.guild.member(message.mentions.users.first()).user;
  message.channel.send(targer.avatarURL);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avi', 'avatar'],
  //permLevel: 0
};

exports.help = {
  name: 'av',
  description: 'av command.',
  usage: 'av'
};