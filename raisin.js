const raisinAlarm = function(cookies) {
  // Put your solution here
  for (const cookie of cookies) {
    if (cookie === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



const raisinAlarmArray = function(cookies) {
  // Put your solution here
  let result = [];
  for (const cookie of cookies) {
    result.push(raisinAlarm(cookie));
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));