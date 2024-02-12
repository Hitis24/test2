module.exports = {
  name: "hide",
  description: "Hide channel",
  category: "moderation",
  usage: "Hide <channel>",
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) {
      return message.channel.send({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** You Can't Run This Commands`
        }
      });
    }

    let channelToHide =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[1]);

    if (!channelToHide) return message.reply({
        embed: {
          color: "ff0000",
          description: `:crossed_swords: **${message.member.user.username}** Mention channel`
        }
      });

    let everyone = message.guild.roles.cache.get(message.guild.id);

    channelToHide.permissionOverwrites.edit(everyone, {
      VIEW_CHANNEL: false
    }).then(() => {
      message.reply(`Hid Channel ${channelToHide}!`);
    }).catch(console.error);
  }
};
