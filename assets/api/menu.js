/**
 * @author Mrthomas20121
 * menu.js - App Menus
 */

//  variables
const {remote} = require('electron');
const {Menu, MenuItem, dialog} = remote;
const fs = require('fs');
const menu = new Menu();

function aboutApp() {
  alert("Show the members of a server with their roles and nicks.")
}

var about = new MenuItem ({
  label: 'About',
  submenu: [
    {
      label: 'About',
      accelerator : 'ctrl+b',
      click () { aboutApp() }
    },
    {
      label: 'Exit',
      accelerator : 'ctrl+w',
      click () { window.close() }
    },
  ]
});

menu.append(about);
remote.getCurrentWindow().setMenu(menu);