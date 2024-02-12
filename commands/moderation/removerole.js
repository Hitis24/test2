const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'removerole',
  botPermission: [
    'EMBED_LINKS',
    'READ_MESSAGE_HISTORY',
    'USE_EXTERNAL_EMOJIS',
    'ADD_REACTIONS',
    'MANAGE_ROLES'
  ],

  aliases: ['removerole', 'a!removerole'],
  category: "moderation",
  description: 'Remove role from any user',
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_ROLES')) {
      return message.channel.send('Sorry, you need the `MANAGE_ROLES` permission to use this command.');
    }

    if (!message.guild.me.permissions.has('MANAGE_ROLES')) {
      return message.channel.send('I do not have the `MANAGE_ROLES` permission to remove roles.');
    }

    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!target) {
      return message.reply(`Please mention a valid user for role removal.`);
    }

    let rrole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args[1]) || message.guild.roles.cache.find(role => role.name === args.slice(1).join(' '));

    if (!rrole) {
      return message.reply(`Please mention a valid role for removal.`);
    }

    let botRolePosition = message.guild.me.roles.highest.position;
    let rolePosition = rrole.position;
    let userRolePosition = message.member.roles.highest.position;

    if (userRolePosition <= rolePosition) {
      return message.channel.send(`Failed to remove the role from the user because your role is lower than the specified role.`);
    }

    if (botRolePosition <= rolePosition) {
      return message.channel.send(`Failed to remove the role from the user because my highest role is lower than the specified role.`);
    }

    try {
      await target.roles.remove(rrole);
      console.log(`Role removed successfully from ${target.user.tag}`);
      message.channel.send(`Role removed successfully from ${target.user.tag}`);
    } catch (error) {
      console.error(`Error removing role from ${target.user.tag}:`, error);
      message.channel.send('Failed to remove the role from the user.');
    }
  }
};
