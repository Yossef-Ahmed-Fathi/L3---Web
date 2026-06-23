let total = 0;
let feedback;
let name = prompt("Enter Your Name:");
let q1 = prompt("2 + 3 * 5:");
if (q1 == 17) {
  total++;
} else {
  total + 0;
}

let q2 = prompt("Round of : 3.4");
if (q2 == 3) {
  total++;
} else {
  total + 0;
}

let q3_raw = prompt("Capital of Egypt:");
let q3 = q3_raw.toLocaleLowerCase();
if (q3 == "cairo") {
  total++;
} else {
  total + 0;
}

switch (total) {
  case 0:
    feedback = "Better Luck Next Time";
  case 1:
    feedback = "Keep Practicing";
  case 2:
    feedback = "Great Job";
  case 3:
    feedback = "Perfect Score";
}

let mode = total === 3 ? "Unlocked" : "Locked";

for (let i = 1; i <= 3; i++) {
  console.log(`
    Name : ${name}
    Score : ${total} --> ${feedback}
    Challenging Mode : ${mode}
`);
}
