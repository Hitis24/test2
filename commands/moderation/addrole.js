const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'addrole',
  botPermission: [
    'EMBED_LINKS',
    'READ_MESSAGE_HISTORY',
    'USE_EXTERNAL_EMOJIS',
    'ADD_REACTIONS',
    'MANAGE_ROLES'
  ],

  aliases: ['addrole', 'a!addrole'],
  category: "moderation",
  description: 'Add role to any user',
  run: async (client, message, args) => {
    if (!message.member.permissions.has('MANAGE_ROLES')) {
      return message.channel.send('Sorry, you need the `MANAGE_ROLES` permission to use this command.');
    }

    if (!message.guild.me.permissions.has('MANAGE_ROLES')) {
      return message.channel.send('I do not have the `MANAGE_ROLES` permission to add roles.');
    }

    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!target) {
      return message.reply(`Please mention a valid user for role addition.`);
    }

    let arole = message.mentions.roles.first() || message.guild.roles.cache.find(role => role.id === args[1]) || message.guild.roles.cache.find(role => role.name === args.slice(1).join(' '));

    if (!arole) {
      return message.reply(`Please mention a valid role for adding.`);
    }

    let botRolePosition = message.guild.me.roles.highest.position;
    let rolePosition = arole.position;
    let userRolePosition = message.member.roles.highest.position;

    if (userRolePosition <= rolePosition) {
      return message.channel.send(`Failed to add the role to the user because your role is lower than the specified role.`);
    }

    if (botRolePosition <= rolePosition) {
      return message.channel.send(`Failed to add the role to the user because my highest role is lower than the specified role.`);
    }

    try {
      await target.roles.add(arole);
      console.log(`Role added successfully to ${target.user.tag}`);
      message.channel.send(`Role added successfully to ${target.user.tag}`);
    } catch (error) {
      console.error(`Error adding role to ${target.user.tag}:`, error);
      message.channel.send('Failed to add the role to the user.');
    }
  }
};
