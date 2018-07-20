
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
client.on("allUsers", function() { 
  console.log("done");
  
  let serverID = "333341155737731072";
  // let serverID = "358344470749511680";
  // let serverID = bot.channels[channelID].guild_id
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
      sub.innerHTML = `${client.users[member.id].username}#${client.users[member.id].discriminator} &middot; UserID:  ${member.id}`;
      card.appendChild(sub);
      let ul = document.createElement('ul');
      ul.id = "roles"
      ul.classList.add('rolelist');
      let r = [];
      userRoles.forEach(element => {
        let name = Object.values(client.servers[serverID].roles).find(r => r.id === element);
        let li = document.createElement('li');
        li.style.backgroundColor=`#${name.color.toString(16)}`;
        if(name.name == "Joestars") {
          li.style.color="#000";
        }
        li.innerHTML = name.name
        ul.appendChild(li);
      });
      card.appendChild(ul);
      let modpanel = document.createElement('div');
      modpanel.classList.add('modpanel');

      let ban = document.createElement('div');
      ban.classList.add('noselect');
      ban.innerHTML = "ban";
      ban.addEventListener("click", () => {
        location = `query.html?q=${client.users[member.id].username}&p=ban`
      });
      modpanel.appendChild(ban);

      let kick = document.createElement('div');
      kick.classList.add('noselect');
      kick.innerHTML = "kick";
      kick.addEventListener("click", () => {
        location = `query.html?q=${member.id}&p=kick`
      });
      modpanel.appendChild(kick);

      let mute = document.createElement('div');
      mute.classList.add('noselect');
      mute.innerHTML = "mute";
      mute.addEventListener("click", () => {
        location = `query.html?q=${member.id}&p=mute`
      });
      modpanel.appendChild(mute);

      let warns = document.createElement('div');
      warns.classList.add('noselect');
      warns.innerHTML = "warn";
      warns.addEventListener("click", () => {
        location = `query.html?q=${member.id}&p=warn`
      });
      modpanel.appendChild(warns);
      card.addEventListener("mouseover", () => {
        card.appendChild(modpanel);
      });
      card.addEventListener("mouseleave", (element, ev) => {
        card.removeChild(modpanel);
      });
    }
  }
  client.disconnect();
});