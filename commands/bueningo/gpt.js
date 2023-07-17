const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.gptken,
});

const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
const answer = response.data.choices[0].text;
console.log(answer);
}
//Ask an example question

module.exports = {
    
	data: new SlashCommandBuilder()
		.setName('gpt')
		.setDescription('buena')
        .addUserOption((option) =>
             option.setName('user').setDescription('chavalaree a un chaval?')),
	async execute(interaction) {
        let anw = ask(interaction.options.get('user'));
		return interaction.reply(anw);
	},
};
