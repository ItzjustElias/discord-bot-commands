module.exports = {
    name: 'ban',
    description: "This command simply bans a member!",
    async execute(message, args, cmd, client, Discord){


        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("BAN_MEMBERS")){
        const target = message.mentions.users.first();
        
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        } else {
            message.channel.send(`You coudn't ban that member, you need to mention someone you dummy!`);
        }
        
        }else{
            message.channel.send('You dont have the permissions to ban members!')
        }
    }
}