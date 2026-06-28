let players = [
  ["Ali", 10],
  ["Sara", 20],
  ["Mona", 15],
];

function showPlayers() {
  console.log(
    "%cPlayers Leaderboard",
    "color: white; font-size: 2rem; background-color: blue;"
  );
  for (i = 0; i < players.length; i++) {
    console.log(players[i][0] + " | " + players[i][1]);
  }
}

function countPlayers() {
  return players.length;
}

showPlayers();
console.log("------------------------------------");
players.push(["Yossef", 18]);
console.log("Player Added, Leaderboard after adding :");
showPlayers();
console.log("------------------------------------");
players.pop();
console.log("Player Removed, Leaderboard after removing :");
showPlayers();
console.log("------------------------------------");
console.log("Players Count :" + countPlayers());
