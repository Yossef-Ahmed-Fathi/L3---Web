const TODAY = new Date();
const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

console.log(
  "Today's date:",
  TODAY.getMonth() + "-" + TODAY.getDate() + "-" + TODAY.getFullYear(),
);
console.log("Milliseconds in a day:", MS_IN_A_DAY);

const courseNames = ["HTML", "CSS", "Bootstrap", "JavaScript"];
const courseStatuses = ["Open Now", "Open Now", "Closed", "Closed"];
const courseLaunchDates = [
  "2026-07-01",
  `${TODAY.getFullYear()}-${String(TODAY.getMonth() + 1).padStart(2, "0")}-${String(TODAY.getDate()).padStart(2, "0")}`,
  "2026-07-20",
  "2026-08-02",
];

function daysLeft(dates) {
  const targetDate = new Date(dates);
  const diffDays = targetDate - TODAY;
  const finalDiffer = Math.round(diffDays / MS_IN_A_DAY);
  return finalDiffer;
}

function daysLabel(date) {
  let days = daysLeft(date);
  if (days < 0) {
    return `Already launched ${days * -1} days ago`;
  } else if (days > 0) {
    return `${days} days left`;
  } else {
    return `Launching today`;
  }
}

console.log("");
console.log("=============== Courses ==============");

for (let i = 0; i < courseNames.length; i++) {
  console.log(
    `${courseNames[i]} | ${courseStatuses[i]} | ${daysLabel(courseLaunchDates[i])}`,
  );
}

function filterByStatus(status) {
  let filter = [];
  for (let i = 0; i < courseStatuses.length; i++) {
    if (courseStatuses[i] === status) {
      filter.push(courseNames[i]);
    }
  }
  return filter;
}

console.log("");
// Testing Function
console.log("=============== Opened Courses ==============");
console.log(filterByStatus("Open Now"));

console.log("");
console.log("============== Upcoming Courses ==============");
for (let i = 0; i < courseLaunchDates.length; i++) {
  let left = daysLeft(courseLaunchDates[i]);
  if (left > 0) {
    console.log(courseNames[i] + " | " + left + " days left");
  }
}
