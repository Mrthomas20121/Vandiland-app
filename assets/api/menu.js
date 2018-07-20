const {remote} = require('electron');
const {Menu, MenuItem, dialog} = remote;
const ext = "json";
// const app = remote.require('app');
const fs = require('fs');

function exportUsers (user, type) {

  dialog.showSaveDialog({ filters: [

      { name: ext, extensions: [ext] }

    ]}, (fileName) => {

    if (typeof fileName === "undefined") return;

    const obj = user;
    alert(`Succefuly exported ${users} ${type}`)
    fs.writeFile(fileName, JSON.stringify(obj, null, 4), function (err) {   

    });

  }); 

}

const menu = new Menu();

var users = new MenuItem ({
  label: 'tools',
  submenu: [
    {
      label: 'Export',
      submenu: [
        {
          label: 'Export warns',
          accelerator : 'ctrl+w',
          click () { openFile() }
        },
        {
          label: 'Export bans',
          accelerator : 'ctrl+b',
          click () { openFile() }
        },
        {
          label: 'Export mutes',
          accelerator : 'ctrl+s',
          click () { saveFile() }
        },
      ]
    }
  ]
});

menu.append(users);
// menu.append(apps);
// menu.append(example);
// menu.append(about);
remote.getCurrentWindow().setMenu(menu);