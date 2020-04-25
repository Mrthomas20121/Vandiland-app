const {app, dialog, BrowserWindow, Tray, Menu} = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');

require('electron-context-menu')({
	prepend: (params, browserWindow) => []
});

let mainWindow;

app.on('ready', (launchInfo) => {
  //console.log(launchInfo);
  mainWindow = new BrowserWindow({
    name: "vandiland app",
    width: 1280,
    height: 720,
    icon: path.join(__dirname, 'assets/icons/app.png'),
	webPreferences: {
	  nodeIntegration: true
	}
   });
app.on('window-all-closed', () => {
      app.quit();
});

app.on('open-file', (event, file) => {
    var content = fs.readFileSync(file).toString();
    mainWindow.webContents.send('file-opened', file, content);
});
mainWindow.loadURL(url.format({
  pathname: path.resolve(__dirname, 'assets/web/index.html'),
  protocol: 'file:',
  slashes: true
  }));

  mainWindow.setMenu(null);

});