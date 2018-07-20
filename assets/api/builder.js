class builder {

  constructor(botName, botToken, botFolder) {
    this.botName = botName;
    this.botToken = botToken;
    this.folder = botFolder;
  }
  /**
   * @param {String} path
   */  
  export() {
    const fs = require('fs');
    var str = " ";
    str+=`const discord = require('discord.io');`;
    str+=`\nconst bot = new discord.Client(${JSON.stringify({ token : this.botToken, autorun:true }, null, 2)});`
    str+=`\nbot.on('ready', (event) => {\n  console.log('logged in %s - %s', bot.username, bot.id)\n});`
    str+=this.examples('PingPong');
    fs.writeFileSync(`${this.folder}${this.botName}.js`, str);
    fs.mkdirSync(this.folder);
    let start_bat = "";
    start_bat+=`@cmd /c node ${this.botName}.js`
    fs.writeFileSync(`${this.folder}start.bat`, start_bat);
  }
  /**
   * @param {String} str
   */
  examples(str) {
    let res = '';
    if(typeof str == 'string') {
    res+=`\nbot.on('message', (user, userID, channelID, message, event) => {`;
    if(str == 'PingPong') {
      res+=`\nif(bot.id==userID) return;`;
      res+=`\nif(message='ping') bot.sendMessage(${JSON.stringify({ to:'channelID', message:'pong' }, null, 2)});`;
      res+=`\n})`;
    };
    return res;
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}
class commands extends builder {

}
const path = "C:/Users/Thomas-travail-PC/Desktop/";
var builder = new commands("botName", "token", path);
builder.export();