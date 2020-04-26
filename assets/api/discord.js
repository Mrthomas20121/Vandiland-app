/**
 * @author Mrthomas20121
 * discord.js - Discord Integration
 */
let discord = require('discord.io');

discord.Client.prototype.getRoleName = function(serverID, roleName) {
  return Object.values(this.servers[serverID].roles).find(r => r.id === roleName);
}
discord.Client.prototype.getAvatar = function(avatar, userID) {
  return `https://cdn.discordapp.com/avatars/${userID}/${avatar}`
}

let client = new discord.Client({
  token:require('../auth.json').token,
  autorun:true
});

client.on('ready', (event)=> {
  console.log("connected as %s", client.username);
  // let roles = server.roles;
  client.getAllUsers();

});
client.on("allUsers", function(event) { 
  console.log("done");
  
  let serverID = require('../auth.json').server_id;
  //let serverID = client.channels[channelID].guild_id
  let server = client.servers[serverID];
  let members = server.members;
  //console.log(members);
  let cards = document.querySelector('div.cards');
  
  for(let member of Object.values(members)) {
    console.log(member);
    if(member.bot) {}
    else {
      let userRoles = member.roles;
      let card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('list');
      let header = document.createElement('header');
      if(member.avatar !== null) {
        header.innerHTML = `<img class="avatar" src="https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}">${client.users[member.id].username}`;
      } else { 
        header.innerHTML = `<img class="avatar" src="https://cdn.discordapp.com/embed/avatars/${(Number(member.discriminator)%5)}${'.png'}">${client.users[member.id].username}`;
      }
      card.appendChild(header);
      cards.appendChild(card);
      let sub = document.createElement('span');
      sub.classList.add('sub');
      if(member.hasOwnProperty('nick')) {
        sub.innerHTML = `${client.users[member.id].username}#${client.users[member.id].discriminator} &middot; UserID:  ${member.id} &middot; Nickname: ${member.nick}`;
      } 
      else {
        sub.innerHTML = `${client.users[member.id].username}#${client.users[member.id].discriminator} &middot; UserID:  ${member.id} &middot; No Nickname found.`;
      }
      card.appendChild(sub);
      let ul = document.createElement('ul');
      ul.id = "roles"
      ul.classList.add('rolelist');
      let r = [];
      if(userRoles.length == 0) {
        let l = document.createElement('li');
        l.innerHTML = 'No roles'
        l.classList.add('nostyle')
        ul.appendChild(l)
      }
      userRoles.forEach(element => {
        let name = Object.values(client.servers[serverID].roles).find(r => r.id === element);
        let li = document.createElement('li');
        li.style.backgroundColor=`#${name.color.toString(16)}`;
        if(name.color.toString(16).toLowerCase() == "ffffff") {
          li.style.color="#000";
        }
        li.innerHTML = name.name
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
  }
  client.disconnect();
});