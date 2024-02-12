module.exports = {
  name: "unhide",
  description: "Unhide channel",
  category: "moderation",
  usage: "Unhide <channel>",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) {
      return message.channel.send({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** You Can't Run This Commands`
        }
      });
    }

    let channelToUnhide =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[1]);

    if (!channelToUnhide) return message.reply({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** Mention channel`
        }
      });

    let everyone = message.guild.roles.cache.get(message.guild.id);

    channelToUnhide.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: true
    }).then(() => {
      message.reply(`Unhid Channel ${channelToUnhide}!`);
    }).catch(console.error);
  }
};
