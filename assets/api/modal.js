const newProject = () => {

const {remote} = require('electron');
const path = require('path');

const winModal = new remote.BrowserWindow({
  name: "Modal",
  width: 300,
  height: 300,
  parent: remote.getCurrentWindow(), 
  modal: true, 
  show: false
});

winModal.loadURL(`file://${path.join(__dirname, "assets")}/index.html`)
  winModal.once('ready-to-show', () => {
    winModal.show()
  });

}
newProject();