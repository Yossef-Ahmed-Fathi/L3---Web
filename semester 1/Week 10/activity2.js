let gradeBook = [];
let highest = 0;

gradeBook.push(["Sara", 88]);
gradeBook.push(["Ali", 95]);
gradeBook.push(["Mona", 72]);
gradeBook.push(["Omar", 60]);

for (let i = 0; i < gradeBook.length; i++) {
  let name = gradeBook[i][0];
  let grade = gradeBook[i][1];
  console.log("Name : " + name + " | Grade : " + grade);

  if (grade > highest) {
    highest = grade;
  }
}

console.log("Highest Grade is : " + highest);
