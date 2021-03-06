const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
	bot.on('ready', () => reqEvent('ready')(bot));
	bot.on('message', reqEvent('message'));
	bot.on('guildMemberAdd', reqEvent('guildMemberAdd'));
};
