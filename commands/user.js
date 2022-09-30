const { SlashCommandBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('User info'),
	async execute(interaction) {

        let userEmbed = {
            color: 0x00BBFF,
            title: 'User info',
            fields: [
                {
                    name: 'User Name & Weird Numbers',
                    value: interaction.user.tag
                },
                {
                    name: 'User ID',
                    value: interaction.user.id
                },
                {
                    name: 'User Avatar',
                    value: ''
                }
            ],

            image: {
                url: interaction.user.avatarURL()
            }

        };
		await interaction.reply({embeds: [userEmbed]});
	},
};
