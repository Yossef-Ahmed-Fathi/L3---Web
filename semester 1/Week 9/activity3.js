let name = prompt("Enter Your Name");
let balance = Number(prompt("Enter Your Initial Balance"));

for (let i = 1; i <= 3; i++) {
  if (balance <= 0) {
    console.log("Balance is 0 or less, exiting...");
    break;
  }

  let choice = prompt(
    `Transaction ${i}: Choose 1. Deposit, 2. Withdraw, 3. Balance`
  );

  switch (Number(choice)) {
    case 1:
      let deposit = Number(prompt("Enter amount to deposit:"));
      balance += deposit;
      console.log(`Transaction ${i}: Deposit ${deposit}`);
      console.log(`New Balance: ${balance}`);
      break;

    case 2:
      let withdraw = Number(prompt("Enter amount to withdraw:"));
      if (withdraw > balance) {
        console.log("Insufficient funds");
      } else if (withdraw <= 0) {
        console.log("Invalid amount");
      } else {
        balance -= withdraw;
        console.log(`Transaction ${i}: Withdraw ${withdraw}`);
        console.log(`New Balance: ${balance}`);

        if (balance < 100) {
          console.log("Warning: Low balance!");
        }
      }
      break;

    case 3:
      console.log(`Transaction ${i}: Current Balance = ${balance}`);
      continue;

    default:
      console.log("Invalid option");
  }
}

let status = balance >= 100 ? "Account Active" : "Low Balance";
console.log(`${name} | Status: ${status}`);
