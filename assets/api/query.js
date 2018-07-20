const uri = new URLSearchParams(location.search);
let user = uri.get('q');
let action = uri.get('p');
document.querySelector('.table-title h3').innerHTML = document.querySelector('.table-title h3').innerHTML.replace(/%user%/gi, user)
document.querySelector('.table-title h3').innerHTML = document.querySelector('.table-title h3').innerHTML.replace(/%type%/gi, `${action}(s)`)
if(action == "warn") {
  // select p.* from punishments p INNER JOIN USERS u p.userid = u.id WHERE user = user AND type = warn;
  let f1 = document.createElement('th');
  let f2 = document.createElement('th');
  let f3 = document.createElement('th');
  f1.classList.add('text-left');
  f2.classList.add('text-left');
  f3.classList.add('text-left');
  f1.innerHTML = "Warned by :";
  f2.innerHTML = "Reason :";
  f3.innerHTML = "In :";
  document.querySelector('table.table-fill tr').appendChild(f1);
  document.querySelector('table.table-fill tr').appendChild(f2);
  document.querySelector('table.table-fill tr').appendChild(f3);
}
else if(action == "mute") {
  // select p.* from punishments p INNER JOIN USERS u p.userid = u.id WHERE user = user;
  let f1 = document.createElement('th');
  let f2 = document.createElement('th');
  let f3 = document.createElement('th');
  let f4 = document.createElement('th');
  f1.classList.add('text-left');
  f2.classList.add('text-left');
  f3.classList.add('text-left');
  f4.classList.add('text-left');
  f1.innerHTML = "Muted by :";
  f2.innerHTML = "Reason :";
  f3.innerHTML = "In :";
  f4.innerHTML = "Time muted :";
  document.querySelector('table.table-fill tr').appendChild(f1);
  document.querySelector('table.table-fill tr').appendChild(f2);
  document.querySelector('table.table-fill tr').appendChild(f3);
  document.querySelector('table.table-fill tr').appendChild(f4);
}
else if(action == "ban") {
  // select p.* from punishments p INNER JOIN USERS u p.userid = u.id WHERE user = user;
  let f1 = document.createElement('th');
  let f2 = document.createElement('th');
  let f3 = document.createElement('th');
  let f4 = document.createElement('th');
  f1.classList.add('text-left');
  f2.classList.add('text-left');
  f3.classList.add('text-left');
  f4.classList.add('text-left');
  f1.innerHTML = "Banned by :";
  f2.innerHTML = "Reason :";
  f3.innerHTML = "In :";
  f4.innerHTML = "Time banned :";
  document.querySelector('table.table-fill tr').appendChild(f1);
  document.querySelector('table.table-fill tr').appendChild(f2);
  document.querySelector('table.table-fill tr').appendChild(f3);
  document.querySelector('table.table-fill tr').appendChild(f4);
}
else if(action == "kick") {
  // select p.* from punishments p INNER JOIN USERS u p.userid = u.id WHERE user = user;
  let f1 = document.createElement('th');
  let f2 = document.createElement('th');
  let f3 = document.createElement('th');
  f1.classList.add('text-left');
  f2.classList.add('text-left');
  f3.classList.add('text-left');
  f1.innerHTML = "Kicked by :";
  f2.innerHTML = "Reason :";
  f3.innerHTML = "In :";
  document.querySelector('table.table-fill tr').appendChild(f1);
  document.querySelector('table.table-fill tr').appendChild(f2);
  document.querySelector('table.table-fill tr').appendChild(f3);
  load(user, 'warn');
}