const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();


module.exports = {
	data: new SlashCommandBuilder()
		.setName('buena')
		.setDescription('buena'),
	async execute(interaction) {
		return interaction.reply('TE ODIOOOOOOOOOOOOOOOO <@664992644484562946>');
	},
};