module.exports = {
    name: "clear",
    description: "Clears messages",

    async execute(message, args, cmd, client, Discord) {

        const amount = args.join(" ");
        
        if(message.member.permissions.has("ADMINISTRATOR")){

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)

        message.channel.send('Clear succesfull')

       
    });

        }else{
            message.channel.send('You dont have the permissions to clear messages!')
        }
    

    }
}