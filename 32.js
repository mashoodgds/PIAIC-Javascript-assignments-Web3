current_users = ["eric", "willie", "admin", "erin", "Ever"];
new_users = ["sarah", "Willie", "PHIL", "ever", "Iona"];

for (var i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i].toLowerCase())) {
    console.log("Sorry !! " + new_users[i] + ", that name is taken.");
  } else {
    console.log(new_users[i] + " is still available.");
  }
}
