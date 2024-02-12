module.exports = {
  name: "unlock",
  description: "Unlock channel",
  category: "moderation",
  usage: "Unlock <channel>",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) {
      return message.channel.send({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** You Can't Run This Commands`
        }
      });
    }

    let channelToUnlock =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[1]);

    if (!channelToUnlock) return message.reply({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** Mention channel`
        }
      });

    let everyone = message.guild.roles.cache.get(message.guild.id);

    channelToUnlock.permissionOverwrites.edit(everyone, {
      SEND_MESSAGES: true
    }).then(() => {
      message.reply(`Unlocked Channel ${channelToUnlock}!`);
    }).catch(console.error);
  }
};
